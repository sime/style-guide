import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Headline, {HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN} from '../Headline';

const text = 'We\'ve got your back!';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const Headlines = () => {
  const standard = [];
  const colorsVariants = [];

  getValues(HEADLINE_SIZE, false).forEach(size => {
    [false, true].forEach(extraBold => {

      standard.push(
        <Headline type={HEADLINE_TYPE.H2} size={size} extraBold={extraBold}>
          {text} - {size}
        </Headline>
      );
    });
  });

  getValues(HEADLINE_COLOR, false).forEach(color => {
    if (color !== HEADLINE_COLOR.WHITE) {
      colorsVariants.push(
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} color={color}>
          {text} - {color}
        </Headline>
      );
    } else {
      colorsVariants.push(
        <ContrastBox>
          <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} color={color}>
            {text} - {color}
          </Headline>
        </ContrastBox>
      );
    }

  });

  return (
    <React.Fragment>
      <DocsBlock info="Size and weight variant">
        {standard}
      </DocsBlock>
      <DocsBlock info="Colors variants">
        {colorsVariants}
      </DocsBlock>
      <DocsBlock info="Examples">
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} transform={HEADLINE_TRANSFORM.CAPITALIZE}>
          {text} - capitalize
        </Headline>
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} transform={HEADLINE_TRANSFORM.LOWERCASE}>
          {text} - lowercase
        </Headline>
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} transform={HEADLINE_TRANSFORM.UPPERCASE}>
          {text} - uppercase
        </Headline>
        <br />
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} align={HEADLINE_ALIGN.LEFT}>
          {text} - align left
        </Headline>
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} align={HEADLINE_ALIGN.CENTER}>
          {text} - align center
        </Headline>
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} align={HEADLINE_ALIGN.RIGHT}>
          {text} - align right
        </Headline>
      </DocsBlock>
    </React.Fragment>
  );

};

export default Headlines;
