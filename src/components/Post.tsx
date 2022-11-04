import {
  ChangeEvent,
  EventHandler,
  FormEvent,
  InvalidEvent,
  KeyboardEvent,
  useState,
} from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { defComments } from '../assets/mocks';

interface PostProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
    src?: string;
  }[];
  publishedAt: Date;
}

export function Post(props: PostProps) {
  const [comments, setComments] = useState(defComments);
  const [newCommentText, setNewCommentText] = useState('');

  const { author, content, publishedAt } = props;
  console.log(comments);

  const distanceToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });
  const formattedDate = format(publishedAt, 'PPPppp', { locale: ptBR });

  function publishComment(e: FormEvent) {
    e.preventDefault();

    const arrayCopy = [...comments];
    const lastID = arrayCopy.slice(-1)[0].id;

    setComments([
      ...comments,
      {
        id: comments.length > 0 ? lastID + 1 : 0,
        author: {
          name: 'User Name',
          avatarUrl: 'https://i.pravatar.cc/64?u=DEFUSER',
        },
        content: newCommentText.trim(),
        publishedAt: new Date(),
      },
    ]);

    setNewCommentText('');
  }

  function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!")
    setNewCommentText(e.target.value);
  }

  function deleteComment(commentId: number) {
    const filteredComments = comments.filter(({ id }) => id !== commentId);
    setComments(filteredComments);
  }

  function handleTextareaKeydown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey && !!newCommentText.trim()) {
      publishComment(e);
      e.currentTarget.value = '';
    }
    if (e.key == 'Enter' && e.shiftKey) {
      e.preventDefault();
      e.currentTarget.value += '\n';
    }
  }

  function handleInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!")
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} outlined />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()} title={formattedDate}>
          {distanceToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={line.src}>{line.content}</a>
              </p>
            );
          }
          return <p key={line.content}>{line.content}</p>;
        })}
      </div>

      <form onSubmit={publishComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleCommentChange}
          onKeyDown={handleTextareaKeydown}
          onInvalid={handleInvalidComment}
          required
        />

        <footer>
          <button type="submit" disabled={!newCommentText}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            author={comment.author}
            publishedAt={comment.publishedAt}
            onCommentDelete={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
