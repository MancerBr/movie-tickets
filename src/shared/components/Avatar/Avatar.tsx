import React from 'react';

import {AvatarImage} from './AvatarImage';
import {DefaultImage} from './DefaultImage';

export const Avatar: React.FC<{uri: string; text: string}> = ({uri, text}) => {
  return <>{uri ? <AvatarImage uri={uri} /> : <DefaultImage text={text} />}</>;
};
