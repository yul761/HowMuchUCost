import React from "react";
import { Card, ListItem } from "react-native-elements";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import store from "../store/store";

const history = [
  { type: "spend", amount: "53", description: "AirPods Pro" },
  { type: "spend", amount: "90", description: "MacBook Pro" },
  { type: "earn", amount: "530", description: "Stock" },
  { type: "earn", amount: "89", description: "Tax return" },
];

export default function totalEarn() {
  const curState = store.getState();
  return (
    <Card
      title="Total Income"
      titleStyle={{ textAlign: "left" }}
      containerStyle={styles.container}
    >
      <View>
        <Text style={styles.number}>+${curState.total_earn}</Text>
      </View>
      <ScrollView>
        {curState.history.map((element, index) => {
          if (element.type === "earn") {
            return (
              <View key={index} style={styles.listItem}>
                <ListItem
                  title={element.description}
                  subtitle={element.date}
                  titleStyle={{ fontWeight: "700" }}
                  style={{
                    flex: 4,
                  }}
                />
                <ListItem
                  title={`$ ${element.amount}`}
                  titleStyle={{ fontWeight: "700" }}
                  style={{
                    flex: 3,
                    textAlign: "right",
                  }}
                />
              </View>
            );
          }
        })}
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    height: "20%",
    marginBottom: 15,
  },
  number: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "600",
    // paddingRight: 50,
    color: "#1dde63",
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
