import React from 'react';

import { AppShell } from '@mantine/core';

import { ChoiceRandom } from './organisms/choice-random';
import { HeaderApp } from './organisms/header';
import { SideNavApp } from './organisms/sidenav';

function App() {
  return (
    <AppShell
      padding="md"
      header={<HeaderApp />}
      navbar={<SideNavApp />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <ChoiceRandom></ChoiceRandom>
    </AppShell>
  );
}

export default App;
