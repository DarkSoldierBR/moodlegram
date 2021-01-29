import React, { Component } from "react";
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Image,
	Platform,
	ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Post from "../pages/common/post.js";
import { profileData, state } from "../data/post.js/postdata.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { render } from "react-dom";

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "white",
		// paddingTop: 15
		// paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	logo: {
		alignSelf: "center",
		marginVertical: 5,
		width: 200,
		resizeMode: "contain",
	},
	search: {
		backgroundColor: "#EEEEEE",
		flex: 1,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginHorizontal: 10,
		flexDirection: "row",
	},
	topbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	profileImage: {
		height: 40,
		width: 40,
		borderRadius: 25,
	},
	welcomeView: {
		marginLeft: 20,
		marginVertical: 15,
		flexDirection: "row",
	},
	welcomeText: {
		fontFamily: "sans-serif-thin",
		fontSize: 30,
	},
	welcomeName: {
		fontFamily: "sans-serif-light",
		fontSize: 30,
	},
	scrollview: {
		backgroundColor: "#EEEEEE",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		paddingVertical: 15,
		marginTop: 15,
	},
	bottombar: {
		paddingHorizontal: 50,
		paddingVertical: 8,
		backgroundColor: "#FFFFFF",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
});

class PFD extends Component {
	
	render() {
		return (
			<ScrollView style={styles.scrollview}>
				{state.products.map((post, index) => (
					<View key={post.id} style={styles.item}>
						<Post
							profileName={post.name}
							profileDesc="teste"
							postProfileImageSrc={post.postProfileImageSrc}
							postImageSrc={post.postImageSrc}
						/>
					</View>
				))}
			</ScrollView>
		);
	}
}

export default function Home({ navigation }) {
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			{/* Logo  */}
			<Image
				style={styles.logo}
				source={require("../src/img/logo/moodlegramlogo.png")}
			/>
			{/* Barra superior */}
			<View style={styles.topbar}>
				<View style={styles.profileImage}>
					<TouchableOpacity onPress={navigation.openDrawer}>
						<Image
							style={styles.profileImage}
							source={profileData[0].postProfileImageSrc}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.search}>
					<View style={{ flexDirection: "row" }}>
						<Icon name="search" color="#f44336" size={20}></Icon>
						<Text style={{ marginLeft: 10 }}>Pesquisar</Text>
					</View>
					<Icon name="qrcode" size={20} />
				</View>
				<Icon name="comments" size={20} />
			</View>
			{/* Mensagem de bem vindo
		<View style={styles.welcomeView}>
			<Text style={styles.welcomeText}>Bom dia, </Text>
			<Text style={styles.welcomeName}>Alexandra</Text>
		</View> */}
			{/* <ScrollView style={styles.scrollview}>
				<Post
					profileName={postData[0].name}
					profileDesc="Influencer"
					postProfileImageSrc={postData[0].postProfileImageSrc}
					postImageSrc={postData[0].postImageSrc}
				/>
				<Post
					profileName={postData[1].name}
					profileDesc="Atriz"
					postProfileImageSrc={postData[1].postProfileImageSrc}
					postImageSrc={postData[1].postImageSrc}
				/>
			</ScrollView> */}
			<PFD></PFD>
			<View style={styles.bottombar}>
				<Icon name="building-o" color="#f44336" size={25}></Icon>
				<Icon name="home" color="#f44336" size={30}></Icon>
				<Icon name="bell-o" color="#f44336" size={25}></Icon>
			</View>
		</SafeAreaView>
	);
}
