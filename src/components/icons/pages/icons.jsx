import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Icon, {types, colors, sizes} from '../Icon';

const icons = () => <div>
  <DocsBlock >
    <ContrastBox>
      <ul className="icons-list">
        {Object.values(types).map(type => <li className="icons-list__element" key={type}>
          <Icon type={type}/>
          <span>&nbsp; - {type}</span>
        </li>)}
      </ul>
    </ContrastBox>
  </DocsBlock>

  <DocsBlock info="Colors">
    <ul className="icons-list">
      {Object.values(colors).map(color => <li className="icons-list__element" key={color}>
        <Icon color={color} type={types.friends}/>
        <span>&nbsp; - {color}</span>
      </li>)}
    </ul>
  </DocsBlock>

  <DocsBlock info="Sizes">
    <ContrastBox>
      <ul className="icons-list">
        {sizes.map(size => <li className="icons-list__element icons-list__element--wider" key={size}>
          <Icon size={size} type={types.x}/>
          <span>&nbsp; - {size}</span>
        </li>)}
      </ul>
    </ContrastBox>
  </DocsBlock>
</div>;

export default icons;