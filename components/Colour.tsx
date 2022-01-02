import { View, StyleSheet, Text } from "react-native";
import { ColourProps } from "../utils/interfaces";
import { invertHex } from "../utils";

const Colour: React.FC<ColourProps> = ({ hex, name }) => {
	const contrast = invertHex(hex);

	return (
		<View style={styles(hex).colour}>
			<Text style={styles(hex, contrast).colourText}>{name}</Text>
		</View>
	);
};

export default Colour;

const styles = (hex?: string, contrast?: string) =>
	StyleSheet.create({
		colour: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: hex,
			width: 50,
			height: 50,
			padding: 10,
		},
		colourText: {
			color: contrast,
		},
	});
