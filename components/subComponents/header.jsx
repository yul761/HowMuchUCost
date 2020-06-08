import React from "react";
import { Header, Text, View, Image, Icon } from "react-native-elements";

export default function header({ toggleOverlay }) {
  return (
    <Header
      placement="left"
      centerComponent={{
        text: "HowMuch U Cost",
        style: { color: "#fff", fontWeight: "800" },
      }}
      rightComponent={<Icon name="add" color="#fff" onPress={toggleOverlay} />}
    />
  );
}
