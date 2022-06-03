import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import s from './styles.module.css'

export function Comment() {
  return (
    <div className={s.comment}>
      <Avatar
        src={'https://github.com/mauriciogirardi.png'}
        alt={'Mauricio Girardi'}
        hasBorder={false}
      />

      <div className={s.comment_box}>
        <div className={s.comment_content}>
          <header>
            <div className={s.author_time}>
              <strong>
                Josiana <span>(Você)</span>
              </strong>
              <time
                title="02 de Junho ás 19:00h "
                dateTime="2022-06-02 19:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
