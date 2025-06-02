import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Benti.module.css";

export default function Benti({ benti }) {
  const publishedToNew = formatDistanceToNow(new Date(benti.date), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <div className={styles.BentiContainer}>
      <img className={styles.avatar} src={benti.user.picture} />
      <div className={styles.user}>
        <span className={styles.userName}>{benti.user.name}</span>
        <span className={styles.userUserName}>{benti.user.username}</span>
        <span className={styles.date}>- {publishedToNew}</span>
      </div>
      <div className={styles.BentiText}>{benti.text}</div>
    </div>
  );
}
