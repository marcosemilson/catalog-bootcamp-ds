import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { tabbar } from '../styles';

interface TabProps{
  screen: string;
  setScreen: Function;
}

const TabBar: React.FC<TabProps> = (props) => {
  const {screen, setScreen} = props;
  
  function changeScreen(page: string){
    setScreen(page)
  }
  return (
    <View style={tabbar.container}>
      <TouchableOpacity
        style={[tabbar.pill, screen === "products" && tabbar.pillActive]}
        onPress = {()=> changeScreen("products")}
        activeOpacity={0.7}
      >
        <Text>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[tabbar.pill, screen === "categories" && tabbar.pillActive]}
      onPress = {()=> changeScreen("categories")}
        activeOpacity={0.7}
      >
        <Text>Categorias</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[tabbar.pill, screen === "users" && tabbar.pillActive]}
      onPress = {()=> changeScreen("users")}
        activeOpacity={0.7}
      >
        <Text>Usuarios</Text>
      </TouchableOpacity>

    </View>
  )
};

export default TabBar;