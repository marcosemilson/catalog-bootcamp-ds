import { useImperativeHandle } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const deviceWhidth = Dimensions.get('window').width;

const colors = {
  white: "#ffffff",
  lightgray: "#f2f2f2",
  mediumgray: "#9e9e9e",
  bordergray: "#e1e1e1",
  darkgray: "#263238",
  black: "#000000",
  primary: "#407bee",
  secondary: "#33569b",
  bluepill: "#407bff61",
  red: "#df5753",
}

const text = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.mediumgray,
  },
  bold: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: colors.darkgray,

  },
  primaryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 20,
  },

  prodctName: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  productCurrency: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.mediumgray,
  },
  productPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
  },

  gobackText:{
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.darkgray,
    marginLeft: 16,
  },

  productDetailsName:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:  10,
    color: colors.darkgray,
  },

  productDescription:{
    fontSize: 16,
    fontWeight: "400",
    color: colors.mediumgray,
  },

  option:{
    color: colors.white,
    textTransform: 'uppercase',
  },

  loginTitle:{
    fontSize: 30,
    color: colors.darkgray,
    textTransform: 'uppercase',
    marginBottom: 50
  },

  logouText:{
    color:colors.white,
  },

  addButtonText:{
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  deleteTextBtn:{
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.red,
  },
  editTextBtn:{
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.mediumgray,
  },
})

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  card: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: 'space-around'
  },

  draw: {
    width: 313,
    height: 225,

  },

  textContainer: {},
  primaryButton: {
    backgroundColor: colors.primary,
    width: 290,
    height: 50,
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  arrowContainer: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollContainer: {
    padding: 10,
  },

  productCard: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  productDescription: {
    width: "100%",
    padding: 20,
    borderTopColor: colors.lightgray,
    borderTopWidth: 1
  },

  productImage:{
    width: 140,
    height: 140,
    margin: 16,

  },

  priceContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  serchContainer: {
    width: "100%",
    height: 60  ,
    backgroundColor: colors.white,
    borderRadius: 20,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    marginVertical: 12.5,
    paddingVertical: 10
  },

  serchInput: {
    width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bordergray,

  },

  detailsContainer:{
    backgroundColor: colors.white,
    padding: 20,
  },

  detailsCard:{
    width: "100%",
    height: "100%"  ,
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-around',
    marginVertical: 12.5,
    paddingVertical: 10
  },

  ProductImageContainer:{
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightgray,
    alignItems: 'center',
    borderRadius:20,
  },

  gobackContainer:{
    width: 290,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-start",
    marginVertical: 10,
  },

  scrollTextContainer:{
    marginVertical: 20,
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.lightgray,

  },

  loginCard:{
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: 'center'
  },
  form:{
    marginVertical: 10,
  },
  passwordGroup:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  textInput:{
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 10,
    padding: 10,
  }, 
  toggle:{
    margin: -40,

  },
  
});

const nav = StyleSheet.create({
  leftText:{
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  drawer:{
    marginRight: 20,

  },

  options:{
    width: deviceWhidth,
    height: 120,
    backgroundColor: colors.primary,
    marginTop: 125,
    marginRight: -20,
    padding: 20,
    justifyContent: 'space-between',
    
  },

  option:{
    paddingVertical: 5,
  },

  textActive:{
    fontWeight: 'bold',
  },

  logoutBtn:{
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,

  }

})

const tabbar = StyleSheet.create({
  container:{
    width: deviceWhidth,
    height: 80,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",

  },
  pill:{
    padding: 15,
    backgroundColor: colors.lightgray,
    borderRadius: 30,
  },

  pillActive:{
    backgroundColor: colors.bluepill,
  },

  pillText:{
    fontWeight: 'bold',
    color: colors.mediumgray,
  },
  pilltextActive:{
    color: colors.primary,
  },
})

const admin = StyleSheet.create({
  container:{
    padding: 10,
    alignItems: 'center',
  },

  addButton:{
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  deleteBtn:{
    height: 40,
    borderWidth: 1,
    borderColor: colors.red,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  editBtn:{
    height: 40,
    borderWidth: 1,
    borderColor: colors.mediumgray,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})

export { colors, theme, text, nav, tabbar, admin};