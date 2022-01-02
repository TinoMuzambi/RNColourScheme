import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colour from "./components/Colour";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.colours}>
				<Colour name="red" hex="red" />
				<Colour name="red" hex="blue" />
				<Colour name="red" hex="yellow" />
				<Colour name="red" hex="green" />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	colours: {
		flexDirection: "row",
		marginTop: "auto",
	},
});
