import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Colour from "./components/Colour";

export default function App() {
	const [colourPalletes, setColourPalletes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPallete = async () => {
			setLoading(true);
			const res = await fetch(
				"https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5"
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
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Text>hello</Text>
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
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
	},
});
