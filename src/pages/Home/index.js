import React, { Component } from 'react';
import * as CartActions from '../../store/modules/cart/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import './styles.css';

class Home extends Component {
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

  handleAddProduct = (id) => {
    const { dispatch } = this.props;

    dispatch(CartActions.addToCartRequest(id));
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ul className='product-list'>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span className='price'>{product.priceFormatted}</span>
              <button onClick={() => this.handleAddProduct(product.id)}>
                <div>
                  <MdAddShoppingCart size={16} color='#fff' />{' '}
                  {/* {amount[product.id] || 0} */}
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

// const mapStateToProps = (state) => ({
//   amount: state.cart.reduce((amount, product) => {
//     return (amount[product.id] = product.amount);
//   }, {}),
// });
// const mapDispatchToProps = (dispatch) => {
//   bindActionCreators(CartActions, dispatch);
// };

export default connect()(Home);
