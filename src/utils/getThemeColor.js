const getThemeColor = () => {
  // Adicionado verificao para nao quebrar no build
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#fff';

  return '#16202c';
};

export default getThemeColor;
