import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import s from './styles.module.css'

export function Post({ post }) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleNewCommentValid = (event) => {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const handleCreateNewComment = (event) => {
    event.preventDefault()
    setComments((prevState) => [...prevState, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const deleteComment = (comment) => {
    const commentsWithoutDeletedOne = comments.filter((c) => c !== comment)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = !newCommentText.trim()

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

      <form className={s.content_form} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          value={newCommentText}
          name="comment"
          onInvalid={handleNewCommentValid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={s.comment_list}>
        {comments.map((content) => (
          <Comment
            key={content}
            content={content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
