import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import './styles.css';

export default function Home() {
  return (
    <ul className='product-list'>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
          alt='tênis'
        />
        <strong>Tênis muito legal</strong>
        <span className='price'>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />
          </div>
          <span className='btn-text'>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
          alt='tênis'
        />
        <strong>Tênis muito legal</strong>
        <span className='price'>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />
          </div>
          <span className='btn-text'>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
          alt='tênis'
        />
        <strong>Tênis muito legal</strong>
        <span className='price'>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />
          </div>
          <span className='btn-text'>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
          alt='tênis'
        />
        <strong>Tênis muito legal</strong>
        <span className='price'>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />
          </div>
          <span className='btn-text'>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
          alt='tênis'
        />
        <strong>Tênis muito legal</strong>
        <span className='price'>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />
          </div>
          <span className='btn-text'>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&'
          alt='tênis'
        />
        <strong>Tênis muito legal</strong>
        <span className='price'>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />
          </div>
          <span className='btn-text'>Adicionar ao carrinho</span>
        </button>
      </li>
    </ul>
  );
}
