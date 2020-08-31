import React from 'react';
import { Icon } from '../icon';
import './Desc.scss';

function Desc(props) {
  const { step } = props;
  const { desc } = step;
  const { children } = desc;

  return <div className="task-manager-desc">{children.map(Element)}</div>;
}

function Element(el, i) {
  if (typeof el === 'string') return el;

  const Tag = el.type;

  const children = [].concat(el.children).map(Element);

  return (
    <Tag key={i}>
      <Icon icon={el.icon} />
      {children}
    </Tag>
  );
}

export { Desc };
