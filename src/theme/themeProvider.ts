interface IDefaultColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

interface ITheme {
  dark: boolean;
  colors: IDefaultColors;
}

export const Theme: ITheme = {
  dark: false,
  colors: {
    primary: '#acbcb1',
    background: '#E5E5E5',
    card: '#FFFFFF',
    text: '#141414',
    border: '#16D48A',
    notification: 'red',
  },
};
