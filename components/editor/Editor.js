import React from 'react';

global.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    switch (label) {
      case 'json': return '/monaco/json.worker.js';
      case 'css': return '/monaco/json.worker.js';
      case 'html': return '/monaco/html.worker.js';
      case 'typescript':
      case 'javascript': return '/monaco/ts.worker.js';
      default: return '/monaco/editor.worker.js';
    }
  }
}

export default class Editor extends React.Component {
  static defaultProps = {
    onCodeChange: () => {}
  };

  componentDidMount() {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      const monaco = require("monaco-editor");
      const editor = monaco.editor.create(this.ref, {
        language: 'json',
        value: this.props.code,
        selectOnLineNumbers: true,
        theme: 'vs-dark',
        minimap: {
          enabled: false
        }
      });
      editor.onDidChangeModelContent((event) => {
        this.props.onCodeChange(editor.getModel().getValue());
      });
    }
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        ref={ref => { this.ref = ref; }}
      />
    );
  }
}
