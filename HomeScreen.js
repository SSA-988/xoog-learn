import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);
  console.log("total votes", count);
  console.log("selected items", selected);
  const counts = {};
  const questions = [
    {
      option: "Python",
      id: "0",
    },
    {
      option: "javascript",
      id: "1",
    },
    {
      option: "Go",
      id: "2",
    },
  ];
  let pythonCount = 0;
  let javascriptCount = 0;
  let GoCount = 0;
  selected?.forEach((element) => {
    if (element === "Python") {
      pythonCount += 1;
    }
    if (element === "javascript") {
      javascriptCount += 1;
    }
    if (element === "Go") {
      GoCount += 1;
    }
  });
  console.log("python:", pythonCount);
  console.log("javascript:", javascriptCount);
  console.log("Go", GoCount);
  const pythonPercent = (pythonCount / count) * 100;
  const goPercent = (GoCount / count) * 100;
  const javascriptPercent = (javascriptCount / count) * 100;
  const [icon,setIcon] = useState("circle")
  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          What programming language do you use during the coding interview?
        </Text>
        <View>
          {questions.map((item, key) => (
            <Pressable
              key={key}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
                
              <Entypo
                onPress={() => {
                  setCount(count + 1);
                  selected.push(item.option);
                  console.warn("You selected " + item.option)
                }}
                name="circle"
                size={24}
                color="black"
              />
              <Text style={{ marginLeft: 10 }}>{item.option}</Text>
            </Pressable>
          ))}

          <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 18 }}>
            Total Votes: {count}
          </Text>

          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Vote to see the percentage
          </Text>

          <View style={{ marginTop: 20 }}>
            <Text>
              Python votes :{" "}
              {pythonPercent ? pythonPercent.toFixed(2) + "%" : null}
            </Text>

            <Text style={{ marginVertical: 10 }}>
              javascript votes:{" "}
              {javascriptPercent ? javascriptPercent.toFixed(2) + "%" : null}
            </Text>

            <Text>
              Go Votes: {goPercent ? goPercent.toFixed(2) + "%" : null}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
