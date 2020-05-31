import React, { memo } from 'react';
import dynamic from 'next/dynamic';

const _MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export const MonacoEditor = memo(function MonacoEditor(props) {
  function editorDidMount() {
    getWorkerUrl();
  }

  props = {
    editorDidMount,
    height: '100%',
    width: '100%',
    language: 'javascript',
    theme: 'vs-dark',
    options: {
      minimap: {
        enabled: false,
      },
    },
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
