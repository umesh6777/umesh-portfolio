import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Umesh Vashishtha Components',
    brandUrl: 'https://hamishw.com',
  },
});
