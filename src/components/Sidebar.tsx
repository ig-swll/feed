import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://picsum.photos/300/180/?blur" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://i.pravatar.cc/64" />
        <strong>User Name</strong>
        <span>Job/Role</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  );
}
