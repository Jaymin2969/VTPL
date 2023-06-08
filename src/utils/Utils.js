import Toast from 'react-native-toast-message';

const showErrorToast = title => {
  return Toast.show({
    type: 'error',
    text1: 'Error',
    text2: title,
  });
  // RNToasty.Error({ title, withIcon: false, duration: 1 });
};
const showNormalToast = (title, forceToast = false) => {
  // if (Defaults.dropdown && !forceToast) {
  //    Defaults.dropdown.alertWithType('info', title);
  // } else {
  // RNToasty.Normal({ title, withIcon: false });
  // }
};

const showSuccessToast = title => {
  // if (Defaults.dropdown) {
  //    Defaults.dropdown.alertWithType('success', title);
  // } else {
  // RNToasty.Success({ title, withIcon: false });
  // }
};

export {showErrorToast, showNormalToast, showSuccessToast};
