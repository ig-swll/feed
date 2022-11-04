import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

import { posts } from './assets/mocks';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
