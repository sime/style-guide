import React from 'react';

import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Counter from 'counters/merge/Counter/Counter';

export default (
  <OverlayedBox
    uxpId="overlayed-box-1"
    overlay={<Counter uxpId="counter-1">3</Counter>}
  >
    <Avatar uxpId="avatar-2" />
  </OverlayedBox>
);
