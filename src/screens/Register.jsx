import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import { Checkbox } from "react-native-paper";

const Register = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Sign up with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-google" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-apple" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>OR</Text>

      <Text style={styles.sectionTitle}>Your Name</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />

      <Text style={styles.sectionTitle}>Login Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <Text style={styles.passwordInfo}>
        Minimum 8 characters with at least one uppercase, one lowercase, one
        special character, and a number
      </Text>

      <View style={styles.checkboxContainer}>
        <Checkbox
                  status={isChecked ? "checked" : "unchecked"}
                  onPress={() => setIsChecked(!isChecked)}
                  color="#1D4ED8"
        />
        <Text style={styles.checkboxText}>
          By clicking 'Log In' you agree to our website{' '}
          <Text style={styles.linkText}>Terms & Conditions.</Text>
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
      <Checkbox
                  status={keepLoggedIn ? "checked" : "unchecked"}
                  onPress={() => setKeepLoggedIn(!keepLoggedIn)}
                  color="#1D4ED8"
        />
        <Text style={styles.checkboxText}>Keep me logged in</Text>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.replace('MainTabs')}>
        <Text style={styles.registerText}>Register</Text>
        <Icons name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3}}>
        <Text>Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={{color: '#1D4ED8', fontWeight: '600'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#002D72',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  socialButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#002D72',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  orText: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002D72',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    borderColor: '#002D72',
  },
  passwordInfo: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 12,
    width: '85%'
  },
  linkText: {
    color: '#000',
    textDecorationLine: "underline",
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D4ED8',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
});
export default Register;
