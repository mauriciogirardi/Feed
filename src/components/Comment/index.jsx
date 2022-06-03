import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import s from './styles.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => onDeleteComment(content)
  const handleLikeComment = () => setLikeCount((prevState) => prevState + 1)

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

            <button title="Deletar" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
