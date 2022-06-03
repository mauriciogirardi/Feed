import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

import s from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <img
        className={s.cover}
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
      />
      <div className={s.profile}>
        <Avatar
          src={'https://github.com/mauriciogirardi.png'}
          alt={'Mauricio Girardi'}
        />
        <strong>Mauricio Girardi</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
