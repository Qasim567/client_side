import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import {launchCamera} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [relative, setRelative] = useState('Me');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [medicalIssue, setMedicalIssue] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        setProfileImage(source);
      }
    });
  };

  const handleConfirm = selectedDate => {
    setDob(selectedDate);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image
          source={profileImage || require('../assets/Oval.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
          <Icons name="camera-outline" size={20} color="#0B468C" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>First name & Last name</Text>
        <TextInput
          placeholder="Jessica Jung"
          placeholderTextColor="#000"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Relative</Text>
            <RNPickerSelect
              onValueChange={value => setRelative(value)}
              items={[
                {label: 'Me', value: 'Me'},
                {label: 'Sibling', value: 'Sibling'},
                {label: 'Parent', value: 'Parent'},
              ]}
              value={relative}
              style={pickerSelectStyles}
            />
          </View>

          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Gender</Text>
            <RNPickerSelect
              onValueChange={value => setGender(value)}
              items={[
                {label: 'Male', value: 'Male'},
                {label: 'Female', value: 'Female'},
              ]}
              value={gender}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        <Text style={styles.label}>Date of birth</Text>
        <View style={styles.dateInputContainer}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.dateInput}>
            <Text style={styles.dateText}>
              {dob.toISOString().split('T')[0]} {/* Format as YYYY-MM-DD */}
            </Text>
            <Icon
              name="calendar"
              size={20}
              color="#666"
              style={styles.calendarIcon}
            />
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={dob}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setOpen(false)}
        />

        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="1.65"
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="48"
              placeholderTextColor="#000"
            />
          </View>
        </View>

        <Text style={styles.label}>Any medical issue</Text>
        <TextInput
          style={styles.input}
          value={medicalIssue}
          onChangeText={setMedicalIssue}
        />
      </View>
      <TouchableOpacity style={styles.saveButton}
      onPress={() =>
        navigation.navigate('ProfileDetail', {
          name: name || 'Unknown',
          profileImage: profileImage || require('../assets/Oval.png'),
        })
      }>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.47,
    backgroundColor: '#0B468C',
    paddingHorizontal: 20,
    paddingTop: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center', 
  },
  cancelButton: {
    alignSelf: 'flex-start',
  },
  cancelText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10
  },
  profileContainer: {
    position: 'absolute',
    top: 70, 
    alignItems: 'center',
    width: '100%',
    zIndex: 4,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  cameraButton: {
    position: 'absolute',
    bottom: -3,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 3, 
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 100, 
    width: '100%',
    zIndex: 0, 
  },
  label: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  dateInputContainer: {
    marginBottom: 15,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  calendarIcon: {
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  saveButton: {
    backgroundColor: '#0B468C',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 7,
    width: '100%'
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
};

export default Profile;
