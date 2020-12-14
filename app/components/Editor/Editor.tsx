import React, { useEffect } from 'react';
import ACE from '../../modules/ACE';
import { EDITOR } from './Editor.style';

const editorConfig: any = {
  theme: 'monokai',
  mode: 'javascript',
};
let editor = new ACE('[data-role="editor"]');

export default function Editor(): JSX.Element {
  useEffect(() => editor.init(editorConfig));

  return (
    <div data-role="editor" style={EDITOR}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum
      aperiam, maxime, amet placeat hic rem unde, quisquam deleniti excepturi
      impedit laborum fugiat officiis! Mollitia quae cum obcaecati perferendis.
      Nobis.
    </div>
  );
}
