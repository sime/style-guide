// @flow strict

import React from 'react';
import MediaM from '../../Media';

type PropsType = {
  aside: React$Node,
  children: React$Node,
  toRight?: boolean,
  focused?: boolean,
  clickable?: boolean,
  noPadding?: boolean,
  transparent?: boolean,
  graySecondaryLight?: boolean,
  small?: boolean,
  spacedBottom?: boolean,
  className?: string,
  ...
};

const Media = (props: PropsType) => {
  const {children, ...rest} = props;
  const contentArray = React.Children.toArray(props.children);

  return (
    <MediaM {...rest} contentArray={contentArray}>
      {props.children}
    </MediaM>
  );
};

export default Media;
