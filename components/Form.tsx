import { useState } from "react";
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { FormProps } from "../utils/interfaces";

const Form: React.FC<FormProps> = ({ setCurrColour, setCurrMode }) => {
	const [colour, setColour] = useState("");
	const [mode, setMode] = useState("");

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
		setCurrColour(colour.substring(1));
	};
	return (
		<View style={styles.inputContainer}>
			<View>
				<TextInput
					style={styles.input}
					value={colour}
					onChangeText={(val) => setColour(val)}
					placeholder="Enter your colour e.g #f2f2f2"
				/>
				<Picker selectedValue={mode} onValueChange={(value) => setMode(value)}>
					<Picker.Item label="Java" value="java" />
					<Picker.Item label="JavaScript" value="js" />
				</Picker>
			</View>
			<TouchableOpacity style={styles.button} onPress={pressHandler}>
				<Text style={styles.buttonText}>Get your palette</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
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
