import React from 'react';
import TopLayer from '../TopLayer';
import Button from 'buttons/Button';
import TextBit from 'text/TextBit';
import Headline from 'text/Headline';

export default (
  <TopLayer uxpId="top-layer-1" size="medium" lead withBugbox>
    <TextBit uxpId="text-bit-1" color="blue-secondary" type="h1">
      The world&apos;s largest learning community
    </TextBit>
    <Headline uxpId="headline-1" type="h2">
      Why join Brainly?
    </Headline>
    <Button uxpId="button-1" type="solid">
      Join us
    </Button>
  </TopLayer>
);
