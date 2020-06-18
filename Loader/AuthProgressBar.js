import React from "react";
import { View } from "react-native";

import styles from "./style";
export const AuthProgressBar = ({ level = 0, Total = 7,style={} }) => {
  let progress = [];
  for (var i = 0; i < Total; i++) {
    if (i < level) progress.push(<View style={styles.childView} />);
    else progress.push(<View style={{ ...styles.childView, opacity: 0.2 }} />);
  }
  return <View style={[styles.ProgressContainer,style]}>{progress}</View>;
};
 
