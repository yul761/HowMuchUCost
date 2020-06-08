import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import store from "./components/store/store";
import * as actions from "./components/actionTypes";
import { addCost } from "./components/actions";
import Header from "./components/subComponents/header";
import TotalSpend from "./components/subComponents/totalSpend";
import TotalEarn from "./components/subComponents/totalEarn";
import AddItem from "./components/subComponents/addItem";

export default function App() {
  // control add Item menu
  const [visible, setVisible] = useState(false);
  const [visibleDate, setVisibleDate] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleOverlayDate = () => {
    setVisibleDate(!visibleDate);
  };

  console.log(store.getState());
  return (
    <View style={styles.container}>
      <Header toggleOverlay={toggleOverlay} />
      {/* <CurMonth
        visibleDate={visibleDate}
        toggleOverlayDate={toggleOverlayDate}
      /> */}
      <TotalSpend />
      <TotalEarn />
      <AddItem visible={visible} toggleOverlay={toggleOverlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "scroll",
  },
});
