import { use, useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

const zero = Promise.resolve(0);

export default function Index() {
  const [count, setCount] = useState(zero);

  const countValue = use(count);

  useEffect(() => {
    console.log("countValue =", countValue, Date.now());
  }, [countValue]);

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
      onPress={() => {
        console.log("click", Date.now());
        setCount(getNumber(countValue + 1));
      }}
    >
      <Text>count is {countValue}</Text>
    </Pressable>
  );
}

function getNumber(num: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(num), 1000);
  });
}
