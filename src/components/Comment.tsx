import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
  };
  content: string;
  publishedAt: Date;
  onCommentDelete: (commentId: number) => void;
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const { id, author, content, publishedAt, onCommentDelete } = props;

  const distanceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const formattedDate = format(publishedAt, 'PPPppp', { locale: ptBR });

  function handleCommentDeletion() {
    onCommentDelete(id);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimestamp}>
              <strong>{author.name}</strong>
              <time dateTime={publishedAt.toISOString()} title={formattedDate}>
                {distanceToNow}
              </time>
            </div>

            <button
              title="Deletar comentário"
              onMouseDown={handleCommentDeletion}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onMouseDown={handleLikeComment}>
            <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
