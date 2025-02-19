import { View, Text } from 'react-native';
import React from 'react';

const SignUp = ({ route }) => {
  const { role } = route.params || {}; // Get role from navigation params

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        Sign Up as {role ? role : 'User'}
      </Text>
    </View>
  );
};

export default SignUp;
