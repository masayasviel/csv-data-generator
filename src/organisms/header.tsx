import React from 'react';

import { Button, Flex, Group, Header, NumberInput, Title } from '@mantine/core';

export const HeaderApp: React.FC = () => {
  return (
    <Header height={100} p="xs">
      <Flex justify="space-around" align="center">
        <Title order={1}>Auto Mock Generator</Title>
        <Group>
          <NumberInput
            defaultValue={10}
            placeholder="2~1000"
            label="データ生成数"
            max={1000}
            min={2}
          />
          <Button color="cyan">生成</Button>
        </Group>
      </Flex>
    </Header>
  );
};
