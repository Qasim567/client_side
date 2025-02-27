import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ProfileDetail = ({ route }) => {
  const navigation = useNavigation();
  const { name, username = '@alex_marshall', profileImage } = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icons name="arrow-back" size={22} color="#000" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image 
          source={profileImage || require('../assets/logo.png')} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton} onPress={()=> navigation.goBack()}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      {/* Options List */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="cog" size={20} color="#0B468C" />
          <Text style={styles.optionText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="share-alt" size={20} color="#0B468C" />
          <Text style={styles.optionText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <SimpleLineIcons name="question" size={20} color="#0B468C" />
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  username: {
    fontSize: 14,
    color: 'gray',
  },
  editButton: {
    backgroundColor: '#0B468C',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  editText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default ProfileDetail;