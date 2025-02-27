import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import Entypo from "react-native-vector-icons/Entypo"
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';

const wishlistItems = [
  {
    id: "1",
    name: "Dainely™ Neck Stretcher",
    price: "$112.00",
    image: two,
  },
  {
    id: "2",
    name: "Dainely™ Belt",
    price: "$170.00",
    image: three,
  },
  {
    id: "3",
    name: "Dainely™ Belt",
    price: "$120.00",
    image: one,
  },
];

const FavouriteScreen = () => {
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Image
        source={ item.image }
        style={{ width: 110, height: 120, borderRadius: 5, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "400", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 18, color: "#333", fontWeight: 'bold' }}>{item.price}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
          <TouchableOpacity style={{ padding: 5 }}>
            <Entypo name="minus" size={16} color="black" />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10, fontSize: 16 }}>1</Text>
          <TouchableOpacity style={{ padding: 5 }}>
            <Entypo name="plus" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>My wishlist</Text>
      
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
        <Text style={{ color: "#777", marginBottom: 10, fontSize:15 }}>Saved for later.</Text>
        <TouchableOpacity style={{ backgroundColor: "#EAEAEA", padding: 10, borderRadius: 5 }}>
          <Text style={{ color: "#B0B0B0" }}>Add to cart all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#EAEAEA", padding: 10, borderRadius: 5 }}>
          <Text style={{ color: "#B0B0B0" }}>Clear all</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />

      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#004AAD",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavouriteScreen;
