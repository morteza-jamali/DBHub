import { useEffect } from 'react';
import { Stack } from '@fluentui/react';
import SideNav from '../SideNav/SideNav';
import { CONTAINER, EDITOR } from './Editor.style';

const editorConfig: any = {
  theme: 'vscodeDark',
  mode: 'javascript',
  showPrintMargin: false,
};

function initEditor() {
  let editor = new ACE('[data-role="editor"]');
  editor.init(editorConfig);
}

export default function Editor(): JSX.Element {
  useEffect(() => initEditor());

  return (
    <Stack styles={CONTAINER} horizontal>
      <Stack.Item className="sideNav">
        <SideNav />
      </Stack.Item>
      <Stack.Item grow>
        <div data-role="editor" style={EDITOR}>
          SELECT * FROM tbl_name
        </div>
      </Stack.Item>
    </Stack>
  );
}
