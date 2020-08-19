import React from 'react'
import './Menu.scss'

export const Menu = ({change_scroll, scroll, Menu_, menu}) => {
  console.log('Menu', menu)
  return (
    <nav className="nav_title" >
      <ul className="nav_title_menu" onClick={(e) => {
          scroll(e.target.className)
          if(Menu_) menu(false)
        }}>
        <li className="biography">О себе</li>
        <li className="skill_list">Мои знания</li>
        <li className="works">Мои работы</li>
        <li className="footer">Контакты</li>
      </ul>
    </nav>
  )
}

