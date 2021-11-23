import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addButtonContainer: {
    backgroundColor: '#f0438b',
    width: '80%',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',
    justifyContent: 'center',
  },
  quantityButtonContainer: {
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  quantityDisabledButton: {
    backgroundColor: 'grey',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  quantityInput: {
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    width: '15%',
    marginHorizontal: 10,
  },
});

export default styles;
