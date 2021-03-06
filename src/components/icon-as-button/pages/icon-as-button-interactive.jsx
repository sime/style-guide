import * as React from 'react';
import IconAsButton, {TYPE, ICON_COLOR, SIZE} from '../IconAsButton';
import Counter from 'counters/Counter';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Avatar, {SIZE as AVATAR_SIZE} from 'avatar/Avatar';

const IconsAsButtons = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE,
    },
    {
      name: 'color',
      values: ICON_COLOR,
    },
    {
      name: 'type',
      values: TYPE,
    },
    {
      name: 'border',
      values: Boolean,
    },
    {
      name: 'action',
      values: Boolean,
    },
    {
      name: 'transparent',
      values: Boolean,
    },
    {
      name: 'active',
      values: Boolean,
    },
    {
      name: 'href',
      values: String,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <IconAsButton color={ICON_COLOR.GRAY} type={TYPE.ATTACHMENT} />
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <IconAsButton
          type={TYPE.MESSAGES}
          transparent
          overlay={<Counter size="small">1</Counter>}
        />
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <IconAsButton transparent>
          <Avatar size={AVATAR_SIZE.SMALL} />
        </IconAsButton>
      </DocsActiveBlock>
    </div>
  );
};

export default IconsAsButtons;
