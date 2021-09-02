import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between'
  },  
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  controlsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#676767",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    marginHorizontal: 10,
    fontSize: 17,
  },
  btnSearch: {
    width: "90%",
    marginBottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,  
    borderRadius: 10,
    backgroundColor: "#f15454"
  },
  btnSearchText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
