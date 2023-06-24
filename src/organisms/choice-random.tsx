import React, { useState } from 'react';

import { ActionIcon, Button, Container, Flex, Group, Input, ScrollArea } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { IconTrash } from '@tabler/icons-react';

import { InputTemplate } from '../templates/input-temp';

const TITLE = '選択肢';
const ChoicesMaxLength = 20;

export const ChoiceRandom: React.FC = () => {
  const [choices, setChoices] = useState<string[]>(['', '', '']);
  /** フォームの値が変更されたときの処理 */
  const changeChoiceValue = (value: string, idx: number) => {
    const newChoices = Array.from(choices, (c, i) => {
      if (idx === i) {
        return value;
      }
      return c;
    });
    setChoices(newChoices);
  };

  /** 選択肢を追加 */
  const appendChoices = () => {
    if (choices.length > ChoicesMaxLength) {
      notifications.show({
        withCloseButton: true,
        autoClose: 1000,
        message: `${ChoicesMaxLength}個上限です`,
      });
      return;
    }
    setChoices([...choices, '']);
  };

  /** 選択肢を削除 */
  const deleteChoices = (idx: number) => {
    const newChoices = choices.filter((_, i) => i !== idx);
    setChoices(newChoices);
  };

  return (
    <InputTemplate title={TITLE}>
      <Flex gap="lg" direction="column">
        <ScrollArea h={480}>
          <Flex gap="md" direction="column">
            {choices.map((c, i) => (
              <Group spacing="md" key={i} grow>
                <Input
                  value={c}
                  onChange={(event) => changeChoiceValue(event.currentTarget.value, i)}
                  placeholder="plz enter your choices"
                />
                <Container size="md">
                  <ActionIcon color="red" size="md" onClick={() => deleteChoices(i)}>
                    <IconTrash />
                  </ActionIcon>
                </Container>
              </Group>
            ))}
          </Flex>
        </ScrollArea>
        <Container>
          <Button onClick={appendChoices}>追加</Button>
        </Container>
      </Flex>
    </InputTemplate>
  );
};
