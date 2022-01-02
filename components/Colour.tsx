import { View, StyleSheet, Text } from "react-native";
import { ColourProps } from "../utils/interfaces";
import { invertHex } from "../utils";

const Colour: React.FC<ColourProps> = ({ hex, name }) => {
	const contrast = invertHex(hex);

	return (
		<View style={styles(hex).colour}>
			<Text style={styles(hex, contrast).colourText}>{name}</Text>
			<Text style={styles(hex, contrast).colourText}>{hex}</Text>
		</View>
	);
};

export default Colour;

const styles = (hex?: string, contrast?: string) =>
	StyleSheet.create({
		colour: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: hex,
			height: 300,
			padding: 10,
		},
		colourText: {
			color: contrast,
			marginVertical: 10,
		},
	});
