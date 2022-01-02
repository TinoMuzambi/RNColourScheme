import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Colour from "./components/Colour";

export default function App() {
	const [currColour, setCurrColour] = useState("0047AB");
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
	}, []);

	return (
		<SafeAreaView style={styles.container}>
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
});
