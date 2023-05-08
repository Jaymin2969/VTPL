import { StyleSheet } from 'react-native';
import { brandColors } from '../Core/basicStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brandColors.white,
  },
  KeyboardAvoidingView: {
    flex: 1,
  },
  KeyboardAvoidingViewContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
export default styles;
