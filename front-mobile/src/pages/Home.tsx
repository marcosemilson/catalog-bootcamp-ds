import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { theme, text } from '../styles';

import arrow from "../assets/arrow.png"
import draw from "../assets/draw.png"
import { useNavigation } from '@react-navigation/core';


const Home: React.FC = () => {
  const navigation=useNavigation();
    return(
        <View style = {theme.container}>
          <View style = {theme.card}>
            <Image source={draw} />
            <View style={theme.textContainer}>
              <Text style={text.bold}>Conheça o Melhor Catálogo de Produtos</Text>
              <Text style={text.regular}>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</Text>
            </View>
              <TouchableOpacity 
              style={theme.primaryButton} 
              activeOpacity={0.8}
              onPress={()=>navigation.navigate('Catalog')}
              >
                <Text style={text.primaryText}>INICIAE AGORA A SUA BUSCA</Text>
                <View style={theme.arrowContainer}>
                  <Image source={arrow} />
                </View>
              </TouchableOpacity>
          </View>
        </View>
    )
};

export default Home;