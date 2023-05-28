import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
	const router = useRouter();

	return (
		<View className="flex flex-1 bg-[#25292e] justify-center items-center">
			<Text className="text-white">Hello SawasDee Krub</Text>
			<View className="p-4 border-2 border-pink-400 text-pink-400">
				<Text onPress={() => router.push("/something")}>go to something</Text>
			</View>
		</View>
	);
}
