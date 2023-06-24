import React from 'react';

import { Flex, Paper, ScrollArea, Title } from '@mantine/core';

interface PropType {
  title: string;
  children?: React.ReactElement;
}

export const InputTemplate: React.FC<PropType> = ({ children, title }) => {
  return (
    <Paper shadow="sm" p="md" style={{ height: '100%' }}>
      <Flex gap="lg" direction="column">
        <Title order={2}>{title}</Title>
        <ScrollArea m="md">{children}</ScrollArea>
      </Flex>
    </Paper>
  );
};
