import React from 'react';

import { Button, Flex, Navbar, ScrollArea, Title } from '@mantine/core';

export const SideNavApp: React.FC = () => {
  return (
    <Navbar p="md" width={{ base: 400 }}>
      <Navbar.Section>
        <Title order={2}>フィールド</Title>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section>
        <Flex justify="center" align="center">
          <Button>追加</Button>
        </Flex>
      </Navbar.Section>
    </Navbar>
  );
};
