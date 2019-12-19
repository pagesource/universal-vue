import { configure,addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, object } from '@storybook/addon-knobs/vue';
import { withConsole } from '@storybook/addon-console'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
