import logo from '../../assets/svgs/favicon.svg'
import s from './styles.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img src={logo} alt="Logo ignite feed" />
        <h3>Feed</h3>
      </div>
    </header>
  )
}
