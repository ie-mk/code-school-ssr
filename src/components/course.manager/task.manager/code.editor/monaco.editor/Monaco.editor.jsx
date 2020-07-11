import React, { memo } from 'react';
import dynamic from 'next/dynamic';

const _MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export const MonacoEditor = memo(function MonacoEditor(props) {
  const { fileExtension } = props;

  function editorDidMount() {
    getWorkerUrl();
  }

  props = {
    editorDidMount,
    height: '100%',
    width: '100%',
    theme: 'vs-dark',
    options: {
      minimap: {
        enabled: false,
      },
    },
    language: LANGUAGE_BY_FILE_EXTENSION[fileExtension],
    ...props,
  };

  return <_MonacoEditor {...props} />;
});

function getWorkerUrl() {
  window.MonacoEnvironment.getWorkerUrl = (moduleId, label) => {
    if (label === 'json') return '_next/static/json.worker.js';
    if (label === 'css') return '_next/static/css.worker.js';
    if (label === 'html') return '_next/static/html.worker.js';
    if (label === 'typescript' || label === 'javascript') {
      return '_next/static/ts.worker.js';
    }

    return '_next/static/editor.worker.js';
  };
}

var LANGUAGE_BY_FILE_EXTENSION = {
  undefined: 'javascript',
  js: 'javascript',
  css: 'css',
};
