/** @format */

import { storiesOf } from '@storybook/vue';
import List from './List';
storiesOf('Atom - List', module).add('Default', () => ({
  components: { List },
  template: '<List />',
}));
