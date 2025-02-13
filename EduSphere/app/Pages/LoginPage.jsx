import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'; 

export default function LoginPage() {
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
            androidClientId: '742041144195-g991kk4a8avv7gpooi25einq6fqv2uq7.apps.googleusercontent.com',
            expoClientId:'742041144195-g6meh3s7j30e47vs1ivp6g35f9m045m2.apps.googleusercontent.com',
            redirectUri:'https://auth.expo.io/dhyan_mehta/EduSphere'
           
          });
  return (
    <View>
      <Image source={require('./../assets/images/login_image.png')}/>
      <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to EduSphere
      </Text>
      <Text style={{textAlign:'center' , marginTop:80 , fontSize:20}}> Login/Signup</Text>
      <TouchableOpacity style={styles.button} onPress={()=> promptAsync()}>
      <AntDesign name="google" size={24} color="white" style={{marginRight:10}}/>
        <Text style={{color:Colors.white}}>Sign in with Google</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold'
    },
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    button:{
      backgroundColor:Colors.primary,
      padding:10,
      margin:30,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    }


    
})
// import { View, Text, Image, StyleSheet } from 'react-native'
// import React, { useContext, useEffect, useState } from 'react'
// import Colors from '../Shared/Colors'
// import { Ionicons } from '@expo/vector-icons'; 
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { TouchableOpacity } from 'react-native';
// import { AuthContext } from '../Context/AuthContext';
// import Services from '../Shared/Services';
// export default function Login() {
//     WebBrowser.maybeCompleteAuthSession();
//     const [accessToken,setAccessToken]=useState();
//     const [userInfo,setUserInfo]=useState();
//     const {userData,setUserData}=useContext(AuthContext)
//     const [request, response, promptAsync] = Google.useAuthRequest({
//         androidClientId: '55959786226-e9frfu2d60hu3lt653blch82e4rhjsnp.apps.googleusercontent.com',
//         expoClientId:'55959786226-llk648p590tvtaoklnv4o89mtjtenecr.apps.googleusercontent.com'
       
//       });

//       useEffect(()=>{
//         if(response?.type=='success')
//         {
//             setAccessToken(response.authentication.accessToken);
           
//             getUserData();
//         }
//       },[response]);

//       const getUserData=async()=>{
//         try {
//             const resp = await fetch(
//               "https://www.googleapis.com/userinfo/v2/me",
//               {
//                 headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
//               }
//             );
      
//             const user = await resp.json();
//             console.log("user Details",user) 
//             setUserInfo(user); 
//             setUserData(user);
//             await Services.setUserAuth(user);
//           } catch (error) {
//             // Add your own error handler here
//           }
//       }
//   return (
//     <View>
//         <Image source={require('./../Assets/Images/login.png')} />
//         <View style={styles.container}>
//              <Text style={styles.welcomeText}>Welcome to EduSphere</Text>
//             <Text style={{textAlign:'center',
//         marginTop:80,fontSize:20}}>Login/Signup</Text>
//             <TouchableOpacity style={styles.button} 
//             onPress={()=>promptAsync()}>
//             <Ionicons name="logo-google" size={24}
//              color="white" style={{marginRight:10}} />
//                 <Text style={{color:Colors.white}}>Sign In with Google</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>setUserData({
//               name:'Rahul Sanap',
//               picture:'https://cdn3d.iconscout.com/3d/premium/thumb/male-customer-call-service-portrait-6760890-5600697.png?f=webp',
//               email:'rahul@gmail.com',
//               id:1
//            })}>
//             <Text>Skip</Text>
//             </TouchableOpacity>
        
//         </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         paddingTop:40,
//         marginTop:-25,
//         backgroundColor:'#fff',
//         borderTopRightRadius:30,
//         borderTopLeftRadius:30
//     },
//     welcomeText:{
//         fontSize:35,
//         textAlign:'center',
//         fontWeight:'bold' 
//     },
//     button:{
//         backgroundColor:Colors.primary,
//         padding:10,
//         margin:30,
//         display:'flex',
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:10
//     }
// })
