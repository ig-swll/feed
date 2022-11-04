import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useMemo } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
  const randomDate = useMemo(() => {
    return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
  }, []);

  const distanceToNow = formatDistanceToNow(randomDate, { locale: ptBR });
  const dateTime = randomDate.toISOString();
  const formattedDate = format(randomDate, 'PPPppp', { locale: ptBR });

  return (
    <div className={styles.comment}>
      <Avatar src="https://i.pravatar.cc/64" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimestamp}>
              <strong>User Name</strong>
              <time dateTime={dateTime} title={formattedDate}>
                Há {distanceToNow}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
