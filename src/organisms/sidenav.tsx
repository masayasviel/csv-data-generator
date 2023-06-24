import React from 'react';

import { Button, Flex, Navbar, ScrollArea, Title } from '@mantine/core';

import { FormItem } from '../modules/form-item';

export const SideNavApp: React.FC = () => {
  return (
    <Navbar p="md" width={{ base: 400 }}>
      <Navbar.Section>
        <Title order={2}>フィールド</Title>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <FormItem keyName="キー名" typeName="タイプ" />
      </Navbar.Section>

      <Navbar.Section>
        <Flex justify="center" align="center">
          <Button>追加</Button>
        </Flex>
      </Navbar.Section>
    </Navbar>
  );
};
