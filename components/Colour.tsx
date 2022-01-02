import { StyleSheet, Text, View } from "react-native";
import { ColourProps } from "../utils/interfaces";

const Colour: React.FC<ColourProps> = ({ hex, name }) => {
	return (
		<View style={styles(hex).colour}>
			<Text style={styles().colourText}>{name}</Text>
		</View>
	);
};

export default Colour;

const styles = (hex?: string) =>
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
			color: "red",
		},
	});
