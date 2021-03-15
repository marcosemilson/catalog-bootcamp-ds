import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Catalog, Dashboard, Home, Login, ProductDetails } from '../pages';
import { colors, nav} from '../styles';
import { Text } from 'react-native';
import { Navbar } from '../components';


const Stack = createStackNavigator();
const HeaderText: React.FC = () => <Text style={nav.leftText}>Ds Catalog</Text>;

const Routes: React.FC = () =>{
    return(
        <Stack.Navigator 
          screenOptions={{
          headerTitle: " ",
          headerStyle:{
          backgroundColor: colors.primary
        },
        headerLeft: () => <HeaderText />,
        headerRight:() => <Navbar />

      }}>
            
            <Stack.Screen name = "Home" component={Home} />
            <Stack.Screen name = "Catalog" component={Catalog} />
            <Stack.Screen name = "ProductDetails" component={ProductDetails} />
            <Stack.Screen name = "Login" component={Login} />
            <Stack.Screen name = "Dashboard" component={Dashboard} />
        </Stack.Navigator> 
    )
};

export default Routes;