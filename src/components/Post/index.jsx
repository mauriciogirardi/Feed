import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import s from './styles.module.css'

export function Post({ post }) {
  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <Avatar src={post.author.avatarUrl} alt={post.author.name} />

          <div className={s.author_data}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={s.content}>
        {post.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>
          }

          if (item.type === 'link') {
            return (
              <p key={index}>
                <a href={item.href} target="_blank">
                  {item.content}
                </a>
              </p>
            )
          }

          if (item.type === 'listLink') {
            return (
              <p key={index}>
                {item.links.map((link) => (
                  <a key={link.id} href={link.href} target="_blank">
                    {link.content}{' '}
                  </a>
                ))}
              </p>
            )
          }
        })}
      </div>

      <form className={s.content_form}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={s.comment_list}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
