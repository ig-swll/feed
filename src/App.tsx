import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lorem Ipsum"
            content="Dolor Sit Amet Consectetur Adipiscing Elit"
          />
          <Post
            author="Lorem Ipsum"
            content="Dolor Sit Amet Consectetur Adipiscing Elit"
          />
        </main>
      </div>
    </div>
  );
}
