import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/themeProvider';

export default StyleSheet.create({
  touchableContainer: {
    zIndex: 10,
  },
  buttonContainer: {
    backgroundColor: Theme.colors.border,
    width: 140,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonContainerDisabled: {
    backgroundColor: '#00000026',
    width: 140,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 16,
    marginRight: 5,
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  labelDisabled: {
    color: '#00000066',
    fontSize: 20,
    fontWeight: '500',
  },
});
