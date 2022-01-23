import React from 'react';
import {Image} from 'react-native';

export const AvatarImage: React.FC<{uri: string}> = ({uri}) => {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
      }}
      source={{
        uri,
      }}
    />
  );
};
