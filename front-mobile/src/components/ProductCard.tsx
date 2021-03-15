import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, ImageSourcePropType, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme, admin } from '../styles';

interface ProductProps{
    id: number;
    name: string;
    imgUrl: ImageSourcePropType;
    price: number;
    role?: string 
}
const ProductCard: React.FC<ProductProps> = ({id, name, imgUrl, price, role}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style ={theme.productCard} onPress={() => navigation.navigate("ProductDetails", {id})}>
          <Image source={{uri:imgUrl}} style={theme.productImage}/>
          <View style={theme.productDescription}>
              <Text style={text.prodctName}>{name}</Text>
              <View style={theme.priceContainer}>
                <Text style={text.productCurrency}>R$</Text>
                <Text style={text.productPrice}>{price}</Text>
              </View>
              {role === "admin" && (
                  <View style={admin.buttonContainer}>
                    <TouchableOpacity>
                      <Text style={text.deleteTextBtn}>
                        Excluir
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={admin.editBtn}>
                      <Text style={text.editTextBtn}>
                        Editar
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              }         
          </View>
          
        </TouchableOpacity>

    )
}

export default ProductCard;