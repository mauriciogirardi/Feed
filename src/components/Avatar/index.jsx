import s from './styles.module.css'

export function Avatar({ src, alt, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? s.avatarWithBorder : s.avatar}
      src={src}
      alt={alt}
    />
  )
}
