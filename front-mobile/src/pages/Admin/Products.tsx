import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ProductCard } from '../../components';
import SearchInput from '../../components/SearchInput';
import { getProducts } from '../../services';
import { theme, admin, text } from '../../styles';

const Products = () => {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function filterProducts() {
        setLoading(true)
        const res = await getProducts();
        setProducts(res.data.content);
        setLoading(false)

    }

    useEffect(() => {
        filterProducts();

    }, [])

    const data = search.length > 0 ?
        products.filter((product) =>
            product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        : products;

    return (

        <ScrollView>
            <TouchableOpacity style={admin.addButton}>
                <View style={admin.buttonContainer}>
                    <Text style={text.addButtonText}>
                        Adicionar
                    </Text>
                </View>
            </TouchableOpacity>
            <SearchInput 
            placeholder="Nome do Produto"
            search={search} setSearch = {setSearch}
          />
          <View>
          {loading ? (
            <ActivityIndicator size = "large"/>
            ) : (
              data.map((product) => (
                <ProductCard {...product} key={product.id} role="admin"/>)
            )
          )}
          </View>
        </ScrollView>
    )
}
export default Products;