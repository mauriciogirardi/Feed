import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import './styles/global.css'
import s from './App.module.css'

const posts = [
  {
    id: 0,
    publishedAt: new Date('2022-06-02 22:00:00'),
    author: {
      avatarUrl: 'https://github.com/mauriciogirardi.png',
      name: 'Mauricio Girardi',
      role: 'Front-end Develop',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 linkedin/mauricio-girardi',
        href: 'https://www.linkedin.com/in/mauricio-girardi',
      },
      {
        type: 'listLink',
        links: [
          {
            id: 0,
            type: 'link',
            content: '#novoprojeto',
            href: 'https://www.github.com/mauriciogirardi',
          },
          {
            id: 1,
            type: 'link',
            content: '#nlw',
            href: 'https://www.github.com/mauriciogirardi',
          },
          {
            id: 2,
            type: 'link',
            content: '#github',
            href: 'https://www.github.com/mauriciogirardi',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    publishedAt: new Date('2022-04-02 18:00:00'),
    author: {
      avatarUrl: 'https://github.com/mauriciogirardi.png',
      name: 'Josiana C de Lima',
      role: 'UI',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 linkedin/mauricio-girardi',
        href: 'https://www.linkedin.com/in/mauricio-girardi',
      },
      {
        type: 'listLink',
        links: [
          {
            id: 0,
            content: '#novoprojeto',
            href: 'https://www.github.com/mauriciogirardi',
          },
          {
            id: 1,
            content: '#nlw',
            href: 'https://www.github.com/mauriciogirardi',
          },
          {
            id: 2,
            content: '#github',
            href: 'https://www.github.com/mauriciogirardi',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    publishedAt: new Date('2022-04-02 13:00:00'),
    author: {
      avatarUrl: 'https://github.com/mauriciogirardi.png',
      name: 'John Doe',
      role: 'Back-end Develop',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 linkedin/mauricio-girardi',
        href: 'https://www.linkedin.com/in/mauricio-girardi',
      },
      {
        type: 'listLink',
        links: [
          {
            id: 0,
            type: 'link',
            content: '#novoprojeto',
            href: 'https://www.github.com/mauriciogirardi',
          },
          {
            id: 1,
            type: 'link',
            content: '#nlw',
            href: 'https://www.github.com/mauriciogirardi',
          },
          {
            id: 2,
            type: 'link',
            content: '#github',
            href: 'https://www.github.com/mauriciogirardi',
          },
        ],
      },
    ],
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={s.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
