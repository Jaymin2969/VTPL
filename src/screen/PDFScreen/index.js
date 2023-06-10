import React from 'react';
import {View} from 'react-native';
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
  const {params} = route;
  const {addAddress = {}, addToCart = {}} = useSelector(({list}) => list);
  console.log('addToCart', addToCart);
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
            uri: addAddress?.Message || addToCart?.Message,
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
          onClick={() => navigation.goBack()}
          text="Save"
          textStyle={styles.buttonText}
          style={[styles.buttonStyle]}
        />
      </View>
    </BaseScreen>
  );
};

export default PDFScreen;
