import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
        //   source={require('../assets/images/home_image.png')}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Welcome to EduSphere</Text>
        <Text style={styles.subtitleText}>Your Learning Platform</Text>

        {/* Navigate to the profile page */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>

        {/* Navigate to the courses page */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Courses')}>
          <Text style={styles.buttonText}>Browse Courses</Text>
        </TouchableOpacity>
        
        {/* Navigate to the logout */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    paddingTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitleText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    width: '60%',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
});
