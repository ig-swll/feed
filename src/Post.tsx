interface PostProps {
  author: string;
  content: string;
}

export function Post(props: PostProps) {
  const { author, content } = props;

  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}
