import { configure } from '@kadira/storybook';

const req = require.context('../src/components/', true, /story\.js/);
const fonts = require.context('../src/styles/', true, /base\.sss/);

configure(() => fonts.keys().forEach(fonts), module);
configure(() => req.keys().forEach(req), module);
