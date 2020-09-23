// @flow strict

import React from 'react';
import OverlayedBoxM from '../../OverlayedBox';

type OverlayedBoxType = {
  children?: ?React$Node,
  overlay?: ?React$Node,
  className?: string,
  ...
};

const OverlayedBox = ({children, ...props}: OverlayedBoxType) => {
  return <OverlayedBoxM {...props}>{children}</OverlayedBoxM>;
};

export default OverlayedBox;
