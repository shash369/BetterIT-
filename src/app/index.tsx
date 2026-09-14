import { Pressable, Text, View } from "react-native";
import '../../global.css'
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text className="text-xl font-bold text-blue-500">
        Welcome to <Text className="text-red-300">BetterIT</Text> 
      </Text>


      <Pressable onPress={() => router.push("/info")}>
        <Text>Go to Info</Text>
      </Pressable>
    </View>
  );
}
