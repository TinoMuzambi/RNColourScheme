import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Alert,
} from "react-native";
import Colour from "./components/Colour";

export default function App() {
	const [currColour, setCurrColour] = useState("0047AB");
	const [colour, setColour] = useState("");
	const [colourPalletes, setColourPalletes] = useState([]);

	useEffect(() => {
		const getPallete = async () => {
			const res = await fetch(
				`https://www.thecolorapi.com/scheme?hex=${currColour}&mode=analogic&count=5`
			);
			const data = await res.json();
			const prettyData = data.colors.map((colour: any) => {
				return {
					hex: colour.hex.value,
					name: colour.name.value,
					bareImage: colour.image.bare,
					contrast: colour.contrast.value,
				};
			});
			setColourPalletes(prettyData);
		};
		getPallete();
	}, [currColour]);

	const pressHandler = () => {
		if (!colour)
			return Alert.alert(
				"No colour",
				"Please enter a colour in the box and try again",
				[
					{
						text: "Understood",
					},
				]
			);
		if (!colour.includes("#"))
			return Alert.alert(
				"Incorrect colour format",
				"Please make sure your colour contains a # symbol and try again",
				[
					{
						text: "Understood",
					},
				]
			);
		if (colour.length > 9)
			return Alert.alert(
				"Incorrect colour format",
				"Please make sure your colour is in the format #f2f2f2 and try again",
				[
					{
						text: "Understood",
					},
				]
			);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={colour}
					onChangeText={(val) => setColour(val)}
					placeholder="Enter your colour e.g #f2f2f2"
				/>
				<TouchableOpacity style={styles.button} onPress={pressHandler}>
					<Text style={styles.buttonText}>Get your palette</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.colours}>
				<FlatList
					data={colourPalletes}
					keyExtractor={(item: any) => item.hex}
					renderItem={({ item }) => <Colour name={item.name} hex={item.hex} />}
				/>
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	colours: {
		flex: 1,
	},
	inputContainer: {
		alignItems: "center",
		paddingVertical: 10,
	},
	input: {
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
		marginBottom: 10,
		width: "90%",
	},
	button: {
		backgroundColor: "coral",
		padding: 10,
		width: "90%",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
