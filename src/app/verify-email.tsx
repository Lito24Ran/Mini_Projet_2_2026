import Button from "@/components/button/Button";
import IllustrationPic from "@/components/verification/IllustrationPic";
import { Input } from "@/components/verification/input/Input";
import { useState } from "react";
import { Text, View } from "react-native";

export default function VerifyEmailScreen() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const handleConfirm = () => {
    const code = first + second + third + fourth;

    if (code.length < 4) {
      setFirst("");
      setSecond("");
      setThird("");
      setFourth("");

      console.log("Veuillez saisir les 4 chiffres");
      return;
    }

    console.log("Code VALIDE : ", code);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Verify Your Email
        </Text>

        <IllustrationPic />

        <Text
          style={{
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Please enter the 4 digit code sent to your email
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Input value={first} onChange={setFirst} />
          <Input value={second} onChange={setSecond} />
          <Input value={third} onChange={setThird} />
          <Input value={fourth} onChange={setFourth} />
        </View>
      </View>

      <Button onPress={handleConfirm} label={"Confirm code"} />
    </View>
  );
}
