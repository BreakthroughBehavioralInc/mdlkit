import theme from '../../theme';

const aliases = ['sm', 'md', 'lg'];

describe('theme', () => {
  test('snapshot', () => {
    expect(theme).toMatchSnapshot();
  });

  test('breakpoints have aliases', () => {
    aliases.forEach((alias, i) =>
      expect(theme.breakpoints[alias]).toEqual(theme.breakpoints[i])
    );
  });

  test('media queries have aliases', () => {
    aliases.forEach((alias, i) =>
      expect(theme.mediaQueries[alias]).toEqual(theme.mediaQueries[i])
    );
  });

  test('space has aliases', () => {
    const spaceAliases = ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'];

    spaceAliases.forEach((alias, i) =>
      expect(theme.space[alias]).toEqual(theme.space[i])
    );
  });
});
