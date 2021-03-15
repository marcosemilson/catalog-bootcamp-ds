import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import menu from "../assets/menu.png"
import { doLogaout, isAuthenticated } from '../services/auth';
import { nav, text } from '../styles';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  const navigation = useNavigation();
  const route = useRoute();

  function navigate(path: any) {
    if (path) {
      setShow(false);
      navigation.navigate(path);
    }
    setShow(false)
  }

  async function logged() {
    const result = await isAuthenticated();

    result ? setAuthenticated(true) : setAuthenticated(false)
  }

  function logout() {
    doLogaout();
    navigation.navigate('Login')
  }
  useEffect(() => {
    logged();
  }, [])

  return (
    <>
      {authenticated ? (
        <TouchableOpacity style={nav.logoutBtn} onPress={() => logout()}>
          <Text style={text.logouText}>Sair</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          style={nav.drawer}
          onPress={() => setShow(!show)}
        >
          <Image source={menu} />
          {
            show ? (
              <View style={nav.options}>
                <TouchableNativeFeedback
                  style={nav.option}
                  onPress={() => navigate("Home")}>
                  <Text
                    style={[text.option,
                    route.name === "Home" ? nav.textActive : null,
                    ]}
                  >
                    Home
              </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  style={nav.option}
                  onPress={() => navigate("Catalog")}>
                  <Text
                    style={[text.option,
                    route.name === "Catalog" ? nav.textActive : null,
                    ]}>
                    Catálogo
              </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  style={nav.option}
                  onPress={() => navigate("Dashboard")}
                >
                  <Text
                    style={[text.option,
                    route.name === "DashBoard" ? nav.textActive : null,
                    ]}>
                    Adm
              </Text>
                </TouchableNativeFeedback>
              </View>
            ) : (null)
          }
        </TouchableOpacity>
      )
      }
    </>
  )

}

export default Navbar;