import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TabBar } from '../../components';
import Categories from './Categories';
import Products from './Products';
import Users from './Users';


const Dashboard: React.FC = () => {
    const [screen, setScreen] = useState("products")
    return(
        <View>
            <TabBar screen={screen} setScreen={setScreen}/>
                {screen === "products" && <Products setCreen = {setScreen} />}
                {screen === "categories" && <Categories />}
                {screen === "Users" && <Users />}

        </View>
    )
}
export default Dashboard;