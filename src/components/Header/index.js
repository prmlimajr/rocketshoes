import React from 'react';
import logo from '../../assets/img/logo.svg';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import './styles.css';

function Header({ cartSize }) {
  return (
    <header className='container'>
      <Link to='/'>
        <img src={logo} alt='rocketshoes' />
      </Link>

      <Link to='/cart' className='cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color='#fff' />
      </Link>
    </header>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
