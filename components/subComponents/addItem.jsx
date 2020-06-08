import React, { useState } from "react";
import { Button, Overlay, Icon, Input } from "react-native-elements";
import { View, Text, Picker, StyleSheet } from "react-native";
import store from "../store/store";
import { addCost, addEarn } from "../actions";

export default function addItem({ visible, toggleOverlay }) {
  const [selectedPicker, setSelectedPicker] = useState("cost");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const onUpload = () => {
    if (amount !== "" && description !== "") {
      if (selectedPicker === "cost") {
        store.dispatch(addCost(amount, description));
      } else if (selectedPicker === "income") {
        store.dispatch(addEarn(amount, description));
      }
    }
    console.log(store.getState());
    toggleOverlay();
  };
  return (
    <View style={styles.container}>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}
      >
        <View>
          <Picker
            selectedValue={selectedPicker}
            onValueChange={(el) => setSelectedPicker(el)}
          >
            <Picker.Item label="Cost" value="cost" />
            <Picker.Item label="Income" value="income" />
          </Picker>
          <Input
            placeholder="Description"
            leftIcon={<Icon name="description" />}
            onChangeText={(text) => setDescription(text)}
          />
          <Input
            placeholder="Amount"
            leftIcon={<Icon name="attach-money" />}
            onChangeText={(text) => setAmount(text)}
          />
          <Button
            title="Upload"
            containerStyle={{ marginTop: 50, height: 55 }}
            onPress={onUpload}
          />
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "80%",
  },
  overlay: {
    // flex: 1,
    width: "80%",
    height: "55%",
  },
});
