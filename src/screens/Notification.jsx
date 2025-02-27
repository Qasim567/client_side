import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    id: '1',
    title: 'dainelylab App',
    message:
      'Lorem ipsum is a dummy or placeholder text commonly used in graphic',
    time: '3m ago',
  },
  {
    id: '2',
    title: 'dainelylab App',
    message:
      'Lorem ipsum is a dummy or placeholder text commonly used in graphic',
    time: '3m ago',
  },
  {
    id: '3',
    title: 'dainelylab App',
    message:
      'Lorem ipsum is a dummy or placeholder text commonly used in graphic',
    time: '3m ago',
  },
];

const Notification = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleLongPress = id => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onLongPress={() => handleLongPress(item.id)}
            style={[
              styles.notificationCard,
              selectedId === item.id && styles.selectedCard,
            ]}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View style={styles.textContainer}>
              {/* Title and Time in a row */}
              <View style={styles.titleRow}>
                <Text style={styles.appTitle}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              {/* Message Below */}
              <Text style={styles.message}>{item.message}</Text>

              {/* Show buttons on long press */}
              {selectedId === item.id && (
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSelectedId(null)}
                    style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#D3DEEE',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'flex-start',
  },
  selectedCard: {
    backgroundColor: '#BFD3F2',
  },
  logo: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  message: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#174A93',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteText: {
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  cancelText: {
    color: '#000',
  },
});

export default Notification;
