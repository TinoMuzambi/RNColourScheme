import { useState } from "react";
import {
	Alert,
	Button,
	Modal,
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
	const [mode, setMode] = useState("analogic");
	const [numColours, setNumColours] = useState(5);
	const [modalOpen, setModalOpen] = useState(false);

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
		setCurrMode(mode);
	};
	return (
		<View style={styles.inputContainer}>
			<View style={styles.row}>
				<TextInput
					style={styles.input}
					value={colour}
					onChangeText={(val) => setColour(val)}
					placeholder="Enter your colour e.g #f2f2f2"
				/>
				<Button title="select mode" onPress={() => setModalOpen(true)} />
			</View>
			<TouchableOpacity style={styles.button} onPress={pressHandler}>
				<Text style={styles.buttonText}>Get your palette</Text>
			</TouchableOpacity>
			<Modal visible={modalOpen}>
				<View style={styles.modal}>
					<Picker
						selectedValue={mode}
						onValueChange={(value) => setMode(value)}
						numberOfLines={2}
					>
						<Picker.Item label="monochrome" value="monochrome" />
						<Picker.Item label="monochrome-dark" value="monochrome-dark" />
						<Picker.Item label="monochrome-light" value="monochrome-light" />
						<Picker.Item label="analogic" value="analogic" />
						<Picker.Item label="complement" value="complement" />
						<Picker.Item
							label="analogic-complement"
							value="analogic-complement"
						/>
						<Picker.Item label="triad" value="triad" />
						<Picker.Item label="quad" value="quad" />
					</Picker>
					<TextInput
						style={styles.numInput}
						keyboardType="numeric"
						placeholder="Enter the number of colours"
					/>
					<Button
						title="Close"
						color="coral"
						onPress={() => setModalOpen(false)}
					/>
				</View>
			</Modal>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		paddingVertical: 10,
	},
	row: {
		flexDirection: "row",
		width: "100%",
		paddingHorizontal: "5%",
	},
	input: {
		flex: 1,
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
		marginBottom: 10,
		width: "90%",
		marginRight: 15,
		padding: 5,
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
	modal: {
		justifyContent: "center",
		paddingTop: 30,
	},
	numInput: {
		alignSelf: "center",
		marginVertical: 20,
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
		padding: 5,
	},
});
