import React from 'react';

const Categories = ({categories,menu}) => {
  return <div className="btn-container">
    {categories.map((category,index)=>{
      console.log(category,index);
      return(
        <button
        type="button"
        className="filter-btn"
        key={index}
        onClick={() => menu(category)}
      >
        {category}
      </button>
      )
    })}
  </div>
}

export default Categories;
