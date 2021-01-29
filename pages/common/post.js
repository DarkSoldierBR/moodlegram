import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
	post: {
		backgroundColor: "#FFFFFF",
		marginBottom: 15,
		marginHorizontal: 20,
		flex: 1,
		// height: 350,
		borderRadius: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.51,
		shadowRadius: 13.16,
	},
	postHeader: {
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		height: 70,
		flexDirection: "row",
		alignItems: "center",
	},
	postImageView: {
		height: 300,
		backgroundColor: "#B0B5C5",
		alignItems: "center",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	postProfileImage: {
		height: 55,
		width: 55,
		marginLeft: 15,
		borderRadius: 40,
		borderColor: "#f44336",
		borderWidth: 2,
	},
	postImage: {
		flex: 1,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		maxWidth: 320,
		maxHeight: 300,
		resizeMode: "cover",
	},
	postHeaderName: {
		flexDirection: "column",
		marginLeft: 10,
		justifyContent: "center",
	},
});

const Post = (props) => (
	<View style={styles.post}>
		{/* Cabeçalho post */}
		<View style={styles.postHeader}>
			<Image
				style={styles.postProfileImage}
				source={props.postProfileImageSrc}
			/>
			<View style={styles.postHeaderName}>
				<Text style={{ fontFamily: "sans-serif-light", fontSize: 25 }}>
					{props.profileName}
				</Text>
				<Text style={{ fontFamily: "sans-serif-thin", fontSize: 15 }}>
					{props.profileDesc}
				</Text>
			</View>
		</View>
		<View style={styles.postImageView}>
			<Image style={styles.postImage} source={props.postImageSrc} />
		</View>
	</View>
);

export default Post;
