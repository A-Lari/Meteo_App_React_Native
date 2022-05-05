import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  container1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
  },

  titleApp: {
    flex: 0.2,
    marginLeft: "auto",
    marginRight: "auto",
    margin: 30,
  },

  title: {
    fontSize: 20,
    fontStyle: "italic",
    color: "orange",
    textDecorationLine: "underline",
  },

  dailyCity: {
    flex: 1,
    alignItems: "center",
  },

  city: {
    fontSize: 40,
    fontWeight: "bold",
    color: "orange",
  },

  country: {
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
  },

  dailyContent: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
  },

  content: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  mainlogo: {
    flex: 1,
    height: 150,
    width: 150,
  },

  dailyCond: {
    flex: 1,
  },

  temp: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "orange",
  },

  wind: {
    flex: 1,
    fontSize: 15,
    fontStyle: "italic",
  },

  location: {
    flex: 1,
  },

  geoLoc: {
    flex: 1,
    fontSize: 15,
    fontStyle: "italic",
  },

  nextFiveDays: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  fiveDaystitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    textDecorationLine: "underline",
  },

  fiveDays: {
    flex: 1,
    fontSize: 20,
    fontStyle: "italic",
    alignItems: "center",
  },

  logo: {
    flex: 1,
    height: 120,
    width: 120,
  },

  day: {
    flex: 1,
  },

  dayName: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
});
