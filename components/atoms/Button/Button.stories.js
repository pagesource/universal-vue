import Vue from 'vue';
import { storiesOf, addParameters} from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Button from './Button'
storiesOf('Atom - Button', module)
.addParameters({
  info: {
    inline: true, header: false
  },
})
  .add('Default', () => ({
    components: { Button },
    template: '<Button @click="action" />',
    methods: { action: action('clicked : Default') }
  }),{
    notes: 'Example of Default Button Variant',
  })
  .add('Rounded', () => ({
    components: { Button },
    template: '<Button  class="rounded" @click="action" />',
    methods: { action: action('clicked') }
  }),{
    notes: 'Example of Rounded Button Variant',
  })
  .add('Disabled', () => ({
    components: { Button },
    template: '<Button  class="disabled" @click="action" />',
    methods: { action: action('clicked') },


  }),{
    notes: 'Example of Disabled Button Variant',
  })
