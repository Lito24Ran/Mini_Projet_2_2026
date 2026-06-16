import { View } from "react-native";
import { Input } from "./input/Input";

type Props = {
  code: string[];
  setCode: (code: string[]) => void;
};

export default function InputCode({ code, setCode }: Props) {
  const updateCode = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Input value={"dsds"} onChange={() => {}} />
      <Input value={"dsds"} onChange={() => {}} />
      <Input value={"dsds"} onChange={() => {}} />
      <Input value={"dsds"} onChange={() => {}} />
    </View>
  );
}
