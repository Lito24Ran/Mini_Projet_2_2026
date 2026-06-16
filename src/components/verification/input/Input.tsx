import { TextInput } from "react-native";
type Props = {
  value: string;
  onChange: (value: string) => void;
};
export function Input({ value, onChange }: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      maxLength={1}
      keyboardType="number-pad"
      placeholder="-"
      style={{
        width: 60,
        height: 60,
        textAlign: "center",
        fontSize: 24,
        borderRadius: 8,
        backgroundColor: "#EAEAEA",
      }}
    />
  );
}
