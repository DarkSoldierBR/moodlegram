import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./pages/Home.js";
import { DrawerContent } from "./pages/common/drawer.js";

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Drawer.Navigator
					drawerContent={(props) => <DrawerContent {...props} />}
				>
					<Drawer.Screen name="Home" component={Home} />
				</Drawer.Navigator>
			</NavigationContainer>
		);
	}
}
