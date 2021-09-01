import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
});
