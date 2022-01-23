import React from 'react';
import {Text, View} from 'react-native';

import useStyles from './DrawerItem.style';
import Icon from '../../Icon';

export const DrawerItem: React.FC<any> = ({text, icon}) => {
  const styles = useStyles('dark');
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={15} style={styles.icon} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name="navigate-arrow" size={15} style={styles.icon} />
      </View>
    </View>
  );
};
