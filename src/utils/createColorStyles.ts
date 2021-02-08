const createColorStyles = theme => {
  const { primaryText, primary } = theme.colors;

  return {
    primaryTextOnPrimary: {
      color: primaryText,
      background: primary,
    },
  };
};

export default createColorStyles;
