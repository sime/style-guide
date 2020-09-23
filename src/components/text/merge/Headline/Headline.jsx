// @flow strict

import * as React from 'react';
import HeadlineM from '../../Headline';

export type HeadlineTypeType = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadlineSizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

export type HeadlineColorType =
  | 'default'
  | 'white'
  | 'gray'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'mint-dark'
  | 'peach-dark'
  | 'lavender-dark'
  | 'mustard-dark'
  | 'blue-dark';

export type HeadlineTransformType = 'uppercase' | 'lowercase' | 'capitalize';

export type HeadlineAlignType =
  | 'to-left'
  | 'to-center'
  | 'to-right'
  | 'justify';

export type HeadlinePropsType = {
  children?: React$Node,
  size?: HeadlineSizeType,
  type?: HeadlineTypeType,
  color?: ?HeadlineColorType,
  transform?: ?HeadlineTransformType,
  align?: ?HeadlineAlignType,
  className?: ?string,
  extraBold?: ?boolean,
  ...
};

const Headline = (props: HeadlinePropsType) => {
  return <HeadlineM {...props} />;
};

export default Headline;
