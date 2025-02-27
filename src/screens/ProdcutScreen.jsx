import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'

const imageMap = {
  '1.png': require('../assets/1.png'),
  '2.png': require('../assets/2.png'),
  '3.png': require('../assets/3.png'),
  '4.png': require('../assets/4.png'),
};

const {width, height} = Dimensions.get('window');

export default function ProductScreen({navigation, route}) {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = new Animated.Value(
    expanded ? height * 0.4 : height * 0.88,
  );
  const {image, name, price} = route.params;

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? height * 0.88 : height * 0.4,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Animated.Image
        source={imageMap[image]}
        style={[styles.image, {height: animatedHeight, width: '100%', aspectRatio: 1 }]}
        resizeMode="cover"
      />

      {/* Overlay Icons */}
      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-back-outline" size={28} color="black" />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="bag-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Swipe Button: Shows Up or Down based on state */}
      {!expanded && (
        <TouchableOpacity style={styles.swipeContainer} onPress={toggleExpand}>
          <Feather name="chevrons-up" size={30} color="#002D72" />
          <Text style={{color: '#002D72'}}>Swipe up for details</Text>
        </TouchableOpacity>
      )}

      {/* Expanded Product Details */}
      {expanded && (
        <View style={styles.detailsContainer}>
          <ScrollView>
            {/* Product Title with Swipe Down Icon */}
            <View style={styles.titleRow}>
              <Text style={styles.productTitle}>{name}</Text>
              <TouchableOpacity onPress={toggleExpand}>
                <Icon name="chevron-down-outline" size={30} color="#002D72" />
              </TouchableOpacity>
            </View>

            <Text style={styles.reviewText}>⭐ 4.5 • 123 Reviews</Text>

            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Struggling with neck pain, TMJ, and tension headaches? The FDA
              Cleared Dainely™ Stretcher will eliminate your neck pain in just
              10 minutes a day, or your money back!
            </Text>

            {/* Key Benefits */}
            <View style={styles.benefitsContainer}>
              <View style={styles.benefitItem}>
                <Icon name="checkmark-circle" size={20} color="#2DA44E" />
                <Text style={styles.benefitText}>
                  Natural pain relief (no harsh painkillers)
                </Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="checkmark-circle" size={20} color="#2DA44E" />
                <Text style={styles.benefitText}>
                  Corrects postural imbalances
                </Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="checkmark-circle" size={20} color="#2DA44E" />
                <Text style={styles.benefitText}>
                  Stress relieving (sleep, feel, and live better)
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}

      {/* Bottom Section (Remains Unchanged) */}
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.subtotalText}>Sub total</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    position: 'absolute',
  },
  overlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    borderRadius: 25,
  },
  swipeContainer: {
    position: 'absolute',
    bottom: height * 0.15,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: height * 0.1,
    width: '100%',
    height: height * 0.5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002D72',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  benefitsContainer: {
    marginTop: 15,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  bottomContainer: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  subtotalText: {
    fontSize: 14,
    color: '#777',
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#174A93',
  },
  continueButton: {
    backgroundColor: '#174A93',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});