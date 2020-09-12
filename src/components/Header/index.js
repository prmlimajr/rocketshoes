import React from 'react';
import logo from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import './styles.css';

export default function index() {
  return (
    <header className='container'>
      <Link to='/'>
        <img src={logo} alt='rocketshoes' />
      </Link>

      <Link to='/cart' className='cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color='#fff' />
      </Link>
    </header>
  );
}
