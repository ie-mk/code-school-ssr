import React from 'react';
import cn from 'classnames';
import './Icon.scss';
import '@mdi/font/css/materialdesignicons.min.css';

// https://dev.materialdesignicons.com/getting-started/webfont
export function Icon(props) {
  let { icon } = props;

  icon = typeof icon === 'string' ? { name: icon } : icon;

  props = { ...props, ...icon };

  const { className, name } = props;

  if (!name) return null;

  props = {
    ...props,
    className: cn(className, 'icon', 'mdi', `mdi-${name}`),
  };

  return <span {...props} />;
}
