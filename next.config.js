const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config) => {
    const _entry = config.entry;
    const _output = config.output;

    config.entry = async function() {
      const originalEntry = await _entry.call(config);
      return {
        ...originalEntry,
        "monaco/editor.worker.js": 'monaco-editor/esm/vs/editor/editor.worker',
        "monaco/json.worker.js": 'monaco-editor/esm/vs/language/json/json.worker',
        "monaco/css.worker.js": 'monaco-editor/esm/vs/language/css/css.worker',
        "monaco/html.worker.js": 'monaco-editor/esm/vs/language/html/html.worker',
        "monaco/ts.worker.js": 'monaco-editor/esm/vs/language/typescript/ts.worker',
      };
    };

    config.output = {
      ...config.output,
      globalObject: 'this'
    };
    // config.output = async function() {
    //   const originalOutput = await _output.call(config);
    //   return {
    //     ...originalOutput,
    //     globalObject: 'this'
    //   };
    // };

    config.node = {
      fs: 'empty'
    };

    return config;
  }
});
