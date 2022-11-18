import React, {useState, useEffect} from "react";
import {SafeAreaView, Text, StyleSheet, View, FlatList, TextInput} from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	itemStyle: {
		padding: 10,
	},
	textInputStyle: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 20,
		margin: 5,
		borderColor: "#009688",
		backgroundColor: "#FFFFFF",
	},
});

// axios.get("/bodypart/:bodyPart")
// axios.get("/muscle/:targetMuscle")
// axios.get("/equipment/:equipment")

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);

	useEffect(() => {
		const getAllExercises = async () => {
			const response = await axios.get("exercises/all-exercises");
			setFilteredDataSource(response.data);
			setMasterDataSource(response.data);
		};

		getAllExercises();
	}, []);

	const searchFilterFunction = (text) => {
		if (text) {
			// Filter the masterDataSource and update FilteredDataSource
			const newData = masterDataSource.filter(function (item) {
				// Applying filter for the inserted text in search bar
				//item is an exercise with the same naming convention in the db
				const itemData = item.targetMuscle
					? item.targetMuscle.toUpperCase()
					: "".toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredDataSource(newData);
			setSearch(text);
		} else {
			// Inserted text is blank
			// Update FilteredDataSource with masterDataSource
			setFilteredDataSource(masterDataSource);
			setSearch(text);
		}
	};

	const ItemView = ({item}) => {
		return (
			// Flat List Item
			<Text style={styles.itemStyle} onPress={() => getItem(item)}>
				{item.workoutName.toUpperCase()}
			</Text>
		);
	};

	const getItem = (item) => {
		// Function for click on an item
		alert("clicked");
	};

	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={styles.container}>
				<TextInput
					style={styles.textInputStyle}
					onChangeText={(text) => searchFilterFunction(text)}
					value={search}
					underlineColorAndroid="transparent"
					placeholder="Search Here"
				/>
				<FlatList
					data={filteredDataSource}
					keyExtractor={(item, index) => index.toString()}
					renderItem={ItemView}
				/>
			</View>
		</SafeAreaView>
	);
};

export default SearchBar;
