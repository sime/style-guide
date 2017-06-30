import React from 'react';
import Avatar, {sizes, iconTypes, iconColors} from './avatar';
import Icon from '../icons/Icon';

import {shallow, mount} from 'enzyme';

test('render avatar with Icon', () => {
  const avatar = mount(<Avatar iconType={iconTypes.friends}/>);

  expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
  expect(avatar.find('img')).toHaveLength(0);

  expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(1);
  expect(avatar.find(Icon)).toHaveLength(1);
});

test('render with image', () => {
  const imgSrc = 'https://source.unsplash.com/100x100/?man';

  const avatar = mount(
    <Avatar imgSrc={imgSrc}/>
  );

  expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
  expect(avatar.find('img')).toHaveLength(1);

  expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(0);
  expect(avatar.find(Icon)).toHaveLength(0);
});

test('error when render without image & icon', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  mount(<Avatar/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});


test('icon pass properties to Icon', () => {
  const iconColor = iconColors.mustard;
  const iconType = iconTypes.friends;
  const avatar = mount(<Avatar iconType={iconType} iconColor={iconColor}/>);

  expect(avatar.find(Icon)).toHaveLength(1);

  const icoProps = avatar.find(Icon).props();

  expect(icoProps.color).toEqual(iconColor);
  expect(icoProps.type).toEqual(iconType);
  expect(icoProps.size).not.toEqual(undefined);
});


test('sizes', () => {
  const size = sizes.xlarge;
  const avatar = shallow(
    <Avatar size={size} iconType={iconTypes.friends}/>
  );

  expect(avatar.hasClass(`sg-avatar--${size}`)).toEqual(true);
});

test('border', () => {
  const avatar = shallow(
    <Avatar border={true} iconType={iconTypes.friends}/>
  );

  expect(avatar.hasClass('sg-avatar--with-border')).toEqual(true);
});

test('spaced', () => {
  const avatar = shallow(
    <Avatar spaced={true} iconType={iconTypes.friends}/>
  );

  expect(avatar.hasClass('sg-avatar--spaced')).toEqual(true);
});