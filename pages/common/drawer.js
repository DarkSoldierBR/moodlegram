import React from "react";
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Image,
	Platform,
} from "react-native";
import { profileData } from "../../data/post.js/postdata.js";

import ImageBackground from "react-native/Libraries/Image/ImageBackground";

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "white",
		// paddingTop: 15
		// paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	drawerHeader: {
		flex: 1,
		flexDirection: "row",
		maxHeight: 150,
		paddingTop: 60,
		paddingLeft: 10,

		// justifyContent:'center'
	},
	profileImage: {
		height: 80,
		width: 80,
		borderRadius: 40,
		// marginTop:35,
		// marginLeft: 10
		borderColor: "#FFFFFF",
		borderWidth: 2,
	},
	drawerProfileName: {
		fontFamily: "sans-serif-light",
		fontSize: 25,
		color: "#FFFFFF",
		textAlignVertical: "center",
		height: 80,
		marginLeft: 10,
		textShadowColor: "#000000",
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 5,
	},
	drawerBackgroundImage: {
		flex: 1,
		maxHeight: 150,
	},
});
export function DrawerContent() {
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<ImageBackground
				style={styles.drawerBackgroundImage}
				source={require("../../src/img/logo/banner.png")}
			>
				<View style={styles.drawerHeader}>
					<View>
						<Image
							style={styles.profileImage}
							source={profileData[0].postProfileImageSrc}
						/>
					</View>
					<View>
						<Text style={styles.drawerProfileName}>Beatriz Arue</Text>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}
