import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Breadcrumb = ({short, adaptive, elements = []}) => {
  const breadcrumbClass = classNames('sg-breadcrumb-list', {
    'sg-breadcrumb-list--short': short,
    'sg-breadcrumb-list--adaptive': adaptive
  });

  return <ul className={breadcrumbClass}>
    {elements.map((elem, i) => <li key={i} className="sg-breadcrumb-list__element">{elem}</li>)}
  </ul>;
};

Breadcrumb.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.node).isRequired,
  adaptive: PropTypes.bool,
  short: PropTypes.bool
};

export default Breadcrumb;
