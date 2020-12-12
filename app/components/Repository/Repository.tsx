import React from 'react';
import {
  Stack,
  PrimaryButton,
  TextField,
  ChoiceGroup,
  IChoiceGroupOption,
} from '@fluentui/react';
import { STACK } from './Repository.style';

const options: IChoiceGroupOption[] = [
  { key: 'private', text: 'Option A' },
  { key: 'public', text: 'Option B' },
];

export default function Repository(): JSX.Element {
  return (
    <Stack styles={STACK} horizontal>
      <h6>Create your database repository</h6>
      <TextField label="Repository Name" required={true} />
      <TextField label="Description" />
      <ChoiceGroup
        defaultSelectedKey="public"
        options={options}
        label="Type"
        required={true}
      />
      <PrimaryButton text="Create" />
    </Stack>
  );
}
