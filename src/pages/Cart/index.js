import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import './styles.css';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
                alt='tênis'
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color='#7159c1' />
                </button>
                <input type='number' readOnly value={2} />
                <button>
                  <MdAddCircleOutline size={20} color='#7159c1' />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button>
                <MdDelete size={20} color='#7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <footer>
        <button>Finalizar pedido</button>
        <div className='total'>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </div>
      </footer>
    </div>
  );
}
