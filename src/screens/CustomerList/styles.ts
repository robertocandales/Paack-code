import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/themeProvider';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 20,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 5,

    borderBottomWidth: 1,
  },
  card: {
    flex: 0.3,
    backgroundColor: Theme.colors.card,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 20,
    width: '100%',
    padding: 5,
    borderColor: Theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCurrent: {
    flex: 0.3,
    backgroundColor: Theme.colors.border,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 20,
    width: '100%',
    padding: 5,
    borderColor: Theme.colors.notification,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  textSelected: {
    fontSize: 20,
    color: Theme.colors.notification,
  },
  button: {
    alignItems: 'center',

    padding: 10,
  },
});
