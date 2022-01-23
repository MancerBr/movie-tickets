import {StyleSheet} from 'react-native';

export default (theme: string) =>
  StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
      backgroundColor: '#EBF7FF',
    },
    iconWrapper: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    icon: {color: '#000'},
    text: {color: '#000'},
  });
