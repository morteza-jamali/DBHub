import { useEffect } from 'react';
import { Stack } from '@fluentui/react';
import SideNav from '../SideNav/SideNav';
import {
  CONTAINER,
  EDITOR,
  SPLITTER,
  SPLITTER_GUTTER,
  TERMINAL,
} from './Editor.style';
import { XTerm } from 'xterm-for-react';
import { FitAddon } from 'xterm-addon-fit';
import Split from 'react-split';

let xtermRef: any;
let fitAddon: any;

const editorConfig: any = {
  theme: 'vscodeDark',
  mode: 'sql',
  showPrintMargin: false,
};

function initEditor() {
  let editor = new ACE('[data-role="editor"]');

  xtermRef.current.terminal.writeln(
    "Hit  enter we will highlight 'THIS' text."
  );
  fitAddon.fit();
  editor.init(editorConfig);
}

function _constructor() {
  xtermRef = React.createRef();
  fitAddon = new FitAddon();
}

function splitOnDrag() {
  fitAddon.fit();
}

export default function Editor(): JSX.Element {
  _constructor();
  useEffect(() => initEditor());

  return (
    <Stack styles={CONTAINER} horizontal>
      <Stack.Item className="sideNav">
        <SideNav />
      </Stack.Item>
      <Stack.Item grow>
        <Stack styles={SPLITTER}>
          <Split
            direction="vertical"
            sizes={[75, 25]}
            style={SPLITTER.root}
            gutterStyle={() => SPLITTER_GUTTER}
            onDrag={splitOnDrag}
            cursor="n-resize"
          >
            <div data-role="editor" style={EDITOR}>
              SELECT * FROM tbl_name
            </div>
            <XTerm
              addons={[fitAddon]}
              ref={xtermRef}
              options={{
                cursorBlink: true,
                cursorStyle: 'bar',
                disableStdin: true,
                theme: TERMINAL,
              }}
            />
          </Split>
        </Stack>
      </Stack.Item>
    </Stack>
  );
}
