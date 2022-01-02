import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colour from "./components/Colour";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>hello</Text>
			<ScrollView>
				<View style={styles.colours}>
					<Colour name="red" hex="red" />
					<Colour name="red" hex="blue" />
					<Colour name="red" hex="yellow" />
					<Colour name="red" hex="green" />
					<Colour name="red" hex="red" />
					<Colour name="red" hex="blue" />
					<Colour name="red" hex="yellow" />
					<Colour name="red" hex="green" />
					<Colour name="red" hex="red" />
					<Colour name="red" hex="blue" />
					<Colour name="red" hex="yellow" />
					<Colour name="red" hex="green" />
					<Colour name="red" hex="red" />
					<Colour name="red" hex="blue" />
					<Colour name="red" hex="yellow" />
					<Colour name="red" hex="green" />
					<Colour name="red" hex="red" />
					<Colour name="red" hex="blue" />
					<Colour name="red" hex="yellow" />
				</View>
			</ScrollView>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 20,
	},
	colours: {
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
	},
});
