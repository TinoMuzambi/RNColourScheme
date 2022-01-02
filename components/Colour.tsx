import { StyleSheet, Text, View } from "react-native";
import { ColourProps } from "../utils/interfaces";

const Colour: React.FC<ColourProps> = ({ hex, name }) => {
	return (
		<View style={styles.colour}>
			<Text style={styles.colourText}>{name}</Text>
		</View>
	);
};

export default Colour;

const styles = StyleSheet.create({
	colour: {
		justifyContent: "center",
		alignItems: "center",
	},
	colourText: {
		color: "white",
	},
});
