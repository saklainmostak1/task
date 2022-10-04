import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Mac book pro', price: 145000},
        {id: 1, name: 'Mac book grow', price: 155000},
        {id: 1, name: 'Mac book crow', price: 165000}
    ]
    return (
        <div className="card-group">
  {
    products.map(product => <Card 
        product={product} 
        key={product.id}
        ></Card>)
  }
</div>
    );
};

export default CardGroup;