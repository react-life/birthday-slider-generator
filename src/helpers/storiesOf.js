import { storiesOf, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import propsMap from './StorybookPropsMap';

const addWithInfo = {
  ...infoAddon,
  addWithInfo(name, story, options) {
    return infoAddon.addWithInfo.call(this, name, story, {
      source: true,
      inline: true,
      header: false,
      ...options,
    });
  },
};

setAddon(addWithInfo);
setAddon(propsMap);

export default name => storiesOf(name, module);
