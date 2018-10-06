import {StyleSheet, Dimensions} from 'react-native'

const { heigh, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7a77fb',
    // justifyContent: 'center'
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center'
  },
  tacCode: {
    color: '#fff',
    fontSize: 60,
    
    marginTop: 1,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center'
  },
  withdrawalOK:{
    color:'black',
    fontSize:30
  },
  card: {
    backgroundColor: '#fff',
    margin: 4,
    width: width - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  input: {
    textAlignVertical: 'top',
    padding: 20,
    fontSize: 24
  },
  inputDesc: {
    textAlignVertical: 'top',
    paddingTop: 20,
    padding: 20,
    fontSize: 18,
    color: "#505051"
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
    fontSize: 25,
    paddingLeft: 10
  },
  button: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    color: '#fff'
  },
  cardButton: {
    backgroundColor: '#4b49b2',
    margin: 6,
    width: 100,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  cardButtonMain: {
    backgroundColor: '#4b49b2',
    margin: 6,
    width: (width/2) - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  cardButtonMainDelete: {
    backgroundColor: '#f44259',
    margin: 6,
    width: (width/2) - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  tabBar: {
    flexDirection: 'row',
    height: 50
  },
bar1: {
    flexDirection: '2',
    height: 50
  },
  textfonts:{
    padding: 20,
    fontSize: 24
  },

})