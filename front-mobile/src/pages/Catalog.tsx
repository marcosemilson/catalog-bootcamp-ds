import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { ProductCard } from '../components';
import SearchInput from '../components/SearchInput';
import { api } from '../services';
import { theme } from '../styles';


const Catalog: React.FC = () => {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)


  async function filterProducts() {
    setLoading(true)
    const res = await api.get(`/products?page=0&linesPerPage=12&direction=ASC&orderBy=name`);

    setProducts(res.data.content);
    setLoading(false)

  }

  useEffect(() => {
    filterProducts();

  },[])
  
  const data = search.length > 0 ?
    products.filter((product) => 
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
      : products;
    return(
        <ScrollView contentContainerStyle = {theme.scrollContainer}>
          <SearchInput 
            placeholder="Nome do Produto"
            search={search} setSearch = {setSearch}
          />
          {loading ? (
            <ActivityIndicator size = "large"/>
            ) : (
              data.map((product) => (
                <ProductCard {...product} key={product.id}/>)
            )
          )}
        </ScrollView>
    )
};

export default Catalog;