import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from 'core/types/Product';
import { makeRequest } from 'core/utils/request';
import ProductCard from './Components/ProductCard';
import ProductCardLoader from './Components/Loaders/ProductCardLoader';
import './styles.scss'
import Pagination from 'core/components/Pagination';
import ProductFilters, { filterForm } from 'core/components/ProductFilters';


function Catalog() {

  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0)

  const getProducts = useCallback((filter?: filterForm) => {
    const params = {
      page: activePage,
      linesPerPage: 12,
      name: filter?.name,
      categoryId: filter?.categoryId
    }
    setIsLoading(true)
    makeRequest({ url: '/products', params })
      .then(response => setProductsResponse(response.data))
      .finally(() => {
        setIsLoading(false)
      })
  }, [activePage])

  useEffect(() => {
    getProducts()
  }, [getProducts]);

  return (
    <div className="catalog-container">
      <div className="filter-container">
        <h1 className="catalog-title">
          Catálogo de Produtos
                </h1>
        <ProductFilters onSearch={filter => getProducts(filter)} />
      </div>
      <div className="catalog-products">
        {isLoading ? <ProductCardLoader /> : (
          productsResponse?.content.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))
        )}

      </div>
      {productsResponse && (
        <Pagination
          totalPages={productsResponse.totalPages}
          onChange={page => setActivePage(page)}
        />
      )}
    </div>
  )
};

export default Catalog;