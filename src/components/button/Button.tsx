import { Text, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
  label: string;
};

export default function Button({ onPress, label }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#081A66",
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
