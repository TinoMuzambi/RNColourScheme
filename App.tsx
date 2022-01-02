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
import Form from "./components/Form";

export default function App() {
	const [currColour, setCurrColour] = useState("0047AB");
	const [currMode, setCurrMode] = useState("analogic");
	const [currNumColours, setCurrNumColours] = useState("5");
	const [colourPalletes, setColourPalletes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPallete = async () => {
			setLoading(true);
			const res = await fetch(
				`https://www.thecolorapi.com/scheme?hex=${currColour}&mode=${currMode}&count=${currNumColours}`
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
			setLoading(false);
		};
		getPallete();
	}, [currColour, currMode, currNumColours]);

	return (
		<SafeAreaView style={styles.container}>
			<Form
				setCurrColour={setCurrColour}
				setCurrMode={setCurrMode}
				setCurrNumColours={setCurrNumColours}
			/>
			<View style={styles.colours}>
				{!loading && (
					<FlatList
						data={colourPalletes}
						keyExtractor={(item: any) => item.hex}
						renderItem={({ item }) => (
							<Colour name={item.name} hex={item.hex} />
						)}
					/>
				)}
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 10,
	},
	colours: {
		flex: 1,
	},
});
