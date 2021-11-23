import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    width: '100%',
  },
  name: {
    maxWidth: '85%',
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 12,
    marginTop: 5,
  },
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
});

export default styles;
