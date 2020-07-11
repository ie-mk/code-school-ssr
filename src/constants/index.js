import React from 'react';

export const IS_SERVER = typeof window === 'undefined';

export const LEVEL = {
  notAssigned: 'Please select',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export const LEVEL_OPTIONS = Object.keys(LEVEL).map(key => {
  return (
    <option key={key} value={key}>
      {LEVEL[key]}
    </option>
  );
});

export const LEARNING_PATH = {
  notAssigned: 'Please select',
  frontend: 'Frontend developer',
  backend: 'Backend developer',
  designer: 'Designer',
};

// result is same object as LEARNING_PATH just values and keys are reversed
export const LEARNING_PATH_VALUES = Object.keys(LEARNING_PATH).reduce(
  (acc, key) => {
    const val = LEARNING_PATH[key].replace(' ', '');
    acc[val] = key;
    return acc;
  },
  {},
);

export const LEARNING_PATH_OPTIONS = Object.keys(LEARNING_PATH).map(key => {
  return (
    <option key={key} value={key}>
      {LEARNING_PATH[key]}
    </option>
  );
});
