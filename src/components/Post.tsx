import { useMemo } from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

interface PostProps {
  author: string;
  content: string;
}

export function Post(props: PostProps) {
  const randomDate = useMemo(() => {
    return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
  }, []);

  const distanceToNow = formatDistanceToNow(randomDate, { locale: ptBR });
  const dateTime = randomDate.toISOString();
  const formattedDate = format(randomDate, 'PPPppp', { locale: ptBR });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://i.pravatar.cc/64" outlined />
          <div className={styles.authorInfo}>
            <strong>User name</strong>
            <span>User Role</span>
          </div>
        </div>
        <time dateTime={dateTime} title={formattedDate}>
          Há {distanceToNow}
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem Ipsum Dolor</p>
        <p>Sit amet consectetur</p>
        <p>
          <a href="#">Adipiscing elit</a>{' '}
        </p>
        <p>
          <a href="#">#loremipsum</a> <a href="#">#hashtag</a>{' '}
          <a href="#">#dev</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
