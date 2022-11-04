import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  outlined?: boolean;
}

export function Avatar({ src, outlined = false }: AvatarProps) {
  return (
    <img
      className={outlined ? styles.avatarOutlined : styles.avatar}
      src={src}
    />
  );
}
