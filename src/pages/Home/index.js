import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import './styles.css';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ul className='product-list'>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span className='price'>{product.priceFormatted}</span>
              <button>
                <div>
                  <MdAddShoppingCart size={16} color='#fff' />
                </div>
                <span className='btn-text'>Adicionar ao carrinho</span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
