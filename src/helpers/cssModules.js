import css from 'react-css-modules';

export default function cssModules(...args) {
  return css(...args, {
    allowMultiple: true,
    errorWhenNotFound: true,
  });
}
