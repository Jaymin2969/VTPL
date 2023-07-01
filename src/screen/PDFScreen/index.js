import React from 'react';
import {Alert, Share, View} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Pdf from 'react-native-pdf';

//style
import styles from './style';

//components
import Button from '../../components/Button';
import BaseScreen from '../../components/BaseScreen';

//image
import NavBar from '../../components/NavBar';
import {useSelector} from 'react-redux';

const PDFScreen = ({navigation, route}) => {
  const {params = {}} = route;
  const {addAddress = {}, addToCart = {}} = useSelector(({list}) => list);
  const downloadFile = () => {
    const source = params.type ? addToCart?.Message : addAddress?.Message;
    let dirs = ReactNativeBlobUtil.fs.dirs;
    ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'pdf',
      path: `${dirs.DownloadDir}/${new Date().toISOString()}`,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: new Date().toISOString(),
        description: 'File downloaded by download manager.',
        mime: 'application/pdf',
      },
    })
      .fetch('GET', source)
      .then(res => {
        // in iOS, we want to save our files by opening up the saveToFiles bottom sheet action.
        // whereas in android, the download manager is handling the download for us.
        if (Platform.OS === 'ios') {
          const filePath = res.path();
          let options = {
            type: 'application/pdf',
            url: filePath,
            saveToFiles: true,
          };
          Share.open(options)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        }
        Alert.alert('Download file', 'Report downloaded successfully !', [
          {text: 'OK', onPress: () => navigation.goBack()},
        ]);
      })
      .catch(err => console.log('BLOB ERROR -> ', err));
  };
  return (
    <BaseScreen>
      <NavBar
        text={'Document Viewer'}
        onClick={() => navigation.navigate('TabScreen')}
      />
      <View style={styles.mainWrapper}>
        <Pdf
          trustAllCerts={false}
          source={{
            uri: params.type ? addToCart?.Message : addAddress?.Message,
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{flex: 1}}
        />
        <Button
          colors={['#10add1', '#07799a', '#034e6d']}
          // disabled={loading}
          onClick={downloadFile}
          text="Save"
          textStyle={styles.buttonText}
          style={[styles.buttonStyle]}
        />
      </View>
    </BaseScreen>
  );
};

export default PDFScreen;
