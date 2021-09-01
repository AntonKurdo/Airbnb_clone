import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: "gray",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10
  },
  oldPrice: {
    color: "gray",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "gray",
    textDecorationLine: "underline",
  },
});
