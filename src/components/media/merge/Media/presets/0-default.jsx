import React from 'react';
import Media from '../Media';
import Avatar from 'avatar/Avatar';
import Link from 'text/merge/Link/Link';
import Text from 'text/Text';

export default (
  <Media
    uxpId="media-1"
    aside={<Avatar uxpId="avatar-1" />}
    graySecondaryLight
    clickable
    toRight
  >
    <Link uxpId="link-1" color="gray">
      The Goat
    </Link>
    <Text size="small" uxpId="text-1">
      Master
    </Text>
  </Media>
);
