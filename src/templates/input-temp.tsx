import React from 'react';

import { Paper, Title } from '@mantine/core';

interface PropType {
  title: string;
  children?: React.ReactElement;
}

export const InputTemplate: React.FC<PropType> = ({ children, title }) => {
  return (
    <Paper shadow="sm" p="md">
      <Title order={2}>{title}</Title>
      {children}
    </Paper>
  );
};
