import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
// import { IC_Illustration } from '../../utils/images';
import Button from '../../components/Button';
const DataNotAvailable = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.iconView}>
        {/* <Image source={IC_Illustration} style={styles.image} /> */}
        <Text style={styles.text}>{'No Records!'}</Text>
        <Text style={styles.iconText}>{'Please take your tests now to check \nyour health level'}</Text>
        <Button
          onClick={() => props.navigation.navigate('Daily Vital Center')}
          text={'ADD VITALS'}
          textStyle={styles.testButtonTextStyle}
          style={styles.testButtonStyle}
        />
      </View>
    </View>
  );
};

export default DataNotAvailable;
