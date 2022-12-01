import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>MOPAMA</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Сотруднечиство</li>
                <li>Корзина</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
