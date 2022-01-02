import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colour from "./components/Colour";

export default function App() {
	return (
		<View style={styles.container}>
			<Colour name="red" hex="red" />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
