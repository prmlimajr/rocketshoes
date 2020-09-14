import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/action';

import './styles.css';

function Cart({ cart, dispatch, updateAmountRequest, total }) {
  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <div className='cart-details'>
      <table>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color='#7159c1' />
                    </button>
                    <input type='number' readOnly value={product.amount} />
                    <button onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color='#7159c1' />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <MdDelete size={20} color='#7159c1' />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <footer>
        <button>Finalizar pedido</button>
        <div className='total'>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

// const mapDispatchToProps = (dispatch) => {
//   bindActionCreators(CartActions, dispatch);
// };

export default connect(mapStateToProps)(Cart);
