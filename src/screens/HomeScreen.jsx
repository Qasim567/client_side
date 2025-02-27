import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import product from '../../product.json';

const imageMap = {
  '1.png': require('../assets/1.png'),
  '2.png': require('../assets/2.png'),
  '3.png': require('../assets/3.png'),
  '4.png': require('../assets/4.png'),
};

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(product);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.brandText}>Falcon Thought</Text>
        </View>
        <TouchableOpacity style={styles.cartIcon}>
          <Icon name="bag-outline" size={22} color="#174A93" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for..."
        />
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Shop wit us!</Text>
        <Text style={styles.bannerText}>Dainely™ Neck Stretcher</Text>
        <Text style={styles.shopNow}>Shop Now →</Text>
        <Image
          source={require('../assets/wepik-photo-mode.png')}
          style={styles.bannerImage}
        />
      </View>

      <ScrollView>
        <View style={styles.productsContainer}>
          {products.map(product => (
            <View key={product.id} style={styles.productCard}>
              <Image
                source={imageMap[product.image]}
                style={styles.productImage}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails', { 
                  image: product.image,
                  name: product.name,
                  price: product.price 
                })}
                style={styles.bagIcon}>
                <Icon name="bag-outline" size={22} color="white" />
              </TouchableOpacity>
              <Text style={styles.productTitle}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.wishlistIcon}>
                <Icon name="heart-outline" size={20} color="#3A5BA0" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F9F9F9', 
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 14, 
    color: 'gray'
  },
  brandText: {
    fontSize: 16, 
    fontWeight: '400', 
    color: '#44C9F5'
  },
  cartIcon: {
    padding: 10
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10
  },
  searchInput: {
    flex: 1, 
    fontSize: 14
  },
  banner: {
    backgroundColor: '#44C9F5',
    borderRadius: 15,
    padding: 20,
    height: 150,
    marginTop: 15,
    position: 'relative',
  },
  bannerTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 400,
    lineHeight: 21,
  },
  bannerText: {
    fontSize: 27,
    fontWeight: '700',
    color: '#000',
    lineHeight: 35,
  },
  shopNow: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  bannerImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  productsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%', 
    marginBottom: 15
  },
  productImage: {
    width: '100%', 
    height: 170, 
    borderRadius: 10
  },
  bagIcon: {
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 60,
    borderRadius: 20,
    backgroundColor: '#174A93',
    padding: 5,
  },
  productTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
  },
  productPrice: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  wishlistIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
  },
});
export default HomeScreen;