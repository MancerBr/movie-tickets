import React from 'react';
import {Text, View} from 'react-native';

export const DefaultImage: React.FC<{text: string}> = ({text}) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'gray',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 21}}>{text}</Text>
    </View>
  );
};
