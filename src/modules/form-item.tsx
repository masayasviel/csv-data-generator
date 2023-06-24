import React from 'react';

import { Flex, Paper, Text, Title } from '@mantine/core';

import { IconGripVertical } from '@tabler/icons-react';

interface PropType {
  keyName: string;
  typeName: string;
}

export const FormItem: React.FC<PropType> = ({ keyName, typeName }) => {
  return (
    <Paper shadow="sm" p="md">
      <Flex gap="md" direction="row" justify="flex-start" align="center">
        <IconGripVertical size={24} stroke={1.5} />
        <Flex gap="xs" direction="column">
          <Title order={4}>{keyName}</Title>
          <Text fz="sm">{typeName}</Text>
        </Flex>
      </Flex>
    </Paper>
  );
};
