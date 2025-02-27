import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
          color="#1D4ED8"
        />
        <Text style={styles.checkboxText}>Keep me logged in</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('MainTabs')}>
        <Text style={styles.loginText}>Login</Text>
        <Icon name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3, marginBottom: 10}}>
          <Text>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <Text style={{color: '#1D4ED8', fontWeight: '600'}}>Sign Up</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        By clicking 'Log In' you agree to our website{" "}
        <Text style={styles.termsLink}>Terms & Conditions</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1D4ED8",
    marginBottom: 10,
  },
  forgotPassword: {
    color: "gray",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#1D4ED8",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D4ED8",
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
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
  termsText: {
    color: "gray",
  },
  termsLink: {
    textDecorationLine: "underline",
  },
});
export default Login;