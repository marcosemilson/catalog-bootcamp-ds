import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View, TouchableOpacity } from 'react-native';
import { api } from '../services';
import { text, theme } from '../styles';
import arrow from "../assets/leftarrow.png"
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const ProductDetails = ({
  route: {
    params: { id },
  },
}) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState({
    id: null,
    name: null,
    description: null,
    price: null,
    imgUrl: null,
    date: null,
    categories: [],

  })

  const [loading, setLoading] = useState(false);

  async function loadProductData() {
    const res = await api.get(`products/${id}`);
    setProduct(res.data);
  }

  useEffect(() => {
    loadProductData();
  })
  
  return (
    <View style={theme.detailsContainer}>
      {
        loading ? <ActivityIndicator size="large" /> : (
          <View style={theme.detailsCard}>
            <TouchableOpacity  style={theme.gobackContainer} onPress={() => navigation.goBack()}>
              <Image source={arrow} />
              <Text style={text.gobackText}>VOLTAR </Text>
            </TouchableOpacity>
            <View  style={theme.ProductImageContainer}>
              <Image
                source={{ uri: product.imgUrl }}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <Text style={text.productDetailsName}>{product.name}</Text>
            <View style={theme.priceContainer}>
              <Text>R$</Text>
              <Text style={text.productPrice}>{product.price}</Text>
            </View>
            <ScrollView style={theme.scrollTextContainer}>
              <Text style={text.productDescription}>{product.description}</Text>
            </ScrollView>
          </View>
        )
      }
    </View>
  )
};

export default ProductDetails;