import React from 'react';
import {
  Stack,
  PrimaryButton,
  DefaultButton,
  TextField,
  Separator,
  ChoiceGroup,
  IChoiceGroupOption,
} from '@fluentui/react';
import {
  STACK,
  STACK_ITEM,
  TEXT_INPUT,
  BUTTON,
  FORM_DETAILS,
  LIST_UL,
  RIGHT_STACK_ITEM,
  CONTAINER,
  SEPARATOR,
} from './Repository.style';

const options: IChoiceGroupOption[] = [
  { key: 'private', text: 'Private' },
  { key: 'public', text: 'Public' },
];

export default function Repository(): JSX.Element {
  return (
    <Stack styles={CONTAINER}>
      <Stack.Item>
        <h3>Create your Database Repository</h3>
      </Stack.Item>
      <Stack.Item grow>
        <Stack styles={STACK} horizontal disableShrink>
          <Stack.Item styles={STACK_ITEM} grow align="stretch">
            <TextField
              label="Repository Name"
              required={true}
              styles={TEXT_INPUT}
            />
            <TextField label="Description" styles={TEXT_INPUT} />
            <Separator styles={SEPARATOR} />
            <ChoiceGroup
              defaultSelectedKey="public"
              options={options}
              label="Type"
              required={true}
            />
          </Stack.Item>
          <Stack.Item styles={RIGHT_STACK_ITEM} grow align="stretch">
            <div className="form-details" style={FORM_DETAILS}>
              <ul style={LIST_UL}>
                <li>Repository name should be unique</li>
                <li>Repository name should </li>
              </ul>
            </div>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <DefaultButton text="Cancel" />
        <PrimaryButton text="Create" styles={BUTTON} />
      </Stack.Item>
    </Stack>
  );
}
