import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Button from './Button'
storiesOf('Atom - Button', module)
  .add('Default', () => ({
    components: { Button },
    template: '<Button />'
  }))
  .add('Rounded', () => ({
    components: { Button },
    template: '<Button  class="rounded"/>'
  }))
  .add('Disabled', () => ({
    components: { Button },
    template: '<Button  class="disabled"/>'
  }))
