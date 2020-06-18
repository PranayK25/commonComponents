import { StyleSheet } from "react-native";
import { colors,deviceDimensions } from "../../constants/appStyles";
const Heigth=deviceDimensions.HPTDP('0.5%')
export default styles = StyleSheet.create({
  ProgressContainer: {
    width: "100%",
    height: Heigth,
    flexDirection: "row",
    borderRadius: 5,
    marginVertical: "4%"
  },
  childView: {
    flex: 1,
    height: Heigth,
    backgroundColor: colors.primary
  }
});
