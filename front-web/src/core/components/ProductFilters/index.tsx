import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from 'core/assets/Images/search-icon.svg'
import './styles.scss'
import Select from 'react-select';
import { Category } from 'core/types/Product';
import { makeRequest } from 'core/utils/request';

export type filterForm = {
    name?: string;
    categoryId?: number;
}

type Props = {
    onSearch: (filter: filterForm)=>void;
}
function ProductFilters({onSearch}: Props) {
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [categories, setCategories]=useState<Category[]>([])
    const [name, setName] = useState('')
    const [category, setCategory] = useState<Category>();

    useEffect(()=>{
        setIsLoadingCategories(true)
        makeRequest({url:'/categories'})
          .then(response => setCategories(response.data.content))
          .finally(()=> setIsLoadingCategories(false))
      }, [])

      const  handleChangeName = (name: string) =>{
        setName(name)

        onSearch({name, categoryId: category?.id})
      }

      const  handleChangeCategory = (category: Category) => {
          setCategory(category);

          onSearch({name, categoryId: category?.id})
      }

      const clearFilters = () =>{
          setCategory(undefined);
          setName('');

          onSearch({name, categoryId: category?.id})
      }
  
    return (
        <div className="card-base product-filters-container">
            <div className="input-search">
                <input
                    type="text"
                    value = {name}
                    className="form-control"
                    placeholder="Pesquisar Produto"
                    onChange={event => handleChangeName(event.target.value)}
                />
                <SearchIcon />
            </div>
            <Select
                    name="categories"
                    isLoading={isLoadingCategories}
                    key={`select-${category?.id}`}
                    value={category}
                    options={categories}
                    getOptionLabel={(option: Category) => option.name}
                    getOptionValue={(option: Category) => String(option.id)}
                    className="filter-select-container"
                    classNamePrefix="product-categories-select"
                    placeholder='Filtrar por Categoria'
                    inputId="categories"
                    onChange={value=> handleChangeCategory(value as Category)}
                    isClearable
                />
                <button 
                    className="btn btn-outline-secondary border-radius-10"
                    onClick={clearFilters}
                    >
                    LIMPAR FILTRO
                </button>
        </div>
    )
}

export default ProductFilters;