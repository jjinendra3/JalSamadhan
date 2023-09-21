import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Ionicons,MaterialIcons} from '@expo/vector-icons'
import Sos from './screens/Sos';
import HeatMap from './screens/Heatmap';
import Complaint from './screens/Complaint';
import Forum from './screens/Forum';
import Home from './screens/Home'
import Resource from './screens/Resource';
import Contribute from './screens/Contribute';
import Admin from './screens/Admin'
const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const Stacker=()=>{
  return(
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Resource" component={Resource} />
      <Stack.Screen name="Contribute" component={Contribute} />
      <Stack.Screen name="Admin" component={Admin} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto"/>
        <Tab.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* options={{ }} */}
          <Tab.Screen name="Stacker" component={Stacker} options={{headerShown: false ,
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="home" color={color} size={size} />
            );
          },
        }}/>
          <Tab.Screen name="SOS" component={Sos}  options={{
          title: "SOS",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="warning" color={color} size={size} />
            );
          },
        }}/>
          <Tab.Screen name="HeatMap" component={HeatMap} options={{
          title: "HeatMap",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="map" color={color} size={size} />
            );
          },
        }} />
          <Tab.Screen name="Complaint" component={Complaint} options={{
          title: "Complaint",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="report" color={color} size={size} />
            );
          },
        }} />
          <Tab.Screen name="CommunityForum" component={Forum} options={{
          title: "Forum",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="forum" color={color} size={size} />
            );
          },
        }} />
      </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
