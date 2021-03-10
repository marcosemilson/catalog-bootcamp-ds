import React from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'core/assets/Images/arrow.svg'
import ReactPaginate from 'react-paginate';

type Props = {
    totalPages: number;
    onChange: (item: number) => void;        
}

function Pagination({totalPages, onChange}:Props){
    const renderIcon = (type: 'previous' | 'next') => (
        <ArrowIcon 
                className={`pagination-${type}`}
                data-testid ={`arrow-icon-${type}`}
            />
    );
    return(
        <div className="pagination-container">
            <ReactPaginate
            pageCount={totalPages} 
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={selecteditem => onChange(selecteditem.selected)}
            previousLabel = {renderIcon('previous')}
            nextLabel = {renderIcon('next')}
            containerClassName = "pagination"
            pageLinkClassName = "pagination-item"
            breakClassName = "pagination-item"
            activeLinkClassName = "active"
            previousClassName="page-active"
            nextClassName="page-active"
            disabledClassName = "page-inactive"
            />
        </div>

    );

    
}
export default Pagination;