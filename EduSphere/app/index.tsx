import { View,Text } from "react-native"
import LoginPage from "./Pages/LoginPage"

const index =  ()=>{

  return(
    <View>
      <LoginPage/>;
    </View>
      
  )

}
export default index
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import LoginPage from './Pages/LoginPage';
// import SignUp from './Pages/SignUp';
// import Home from './Pages/Home';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginPage">
//         <Stack.Screen name="LoginPage" component={LoginPage} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


