import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00796B',
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
