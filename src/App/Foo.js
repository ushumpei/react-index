import React from 'react';

export default () => (
  <div>
    <h2>Foo</h2>
    <pre>
      import ComponentName from './DirectoryName'
    </pre>
    <p>
      モジュールとしてディレクトリを指定すると、ファイル「./DirectoryName/index.js」の内容がコンポーネントとして読み込まれます。「index.js」でディレクトリ内のコンポーネントを組み立てておけば呼び出し側はあたかも一つのコンポーネントのように扱うことができます。
    </p>
  </div>
);
