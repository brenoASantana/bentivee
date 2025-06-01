import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Benti.module.css";

export default function Benti({ Benti }) {
  const publishedToNew = formatDistanceToNow(new Date(Benti.date), {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <div className={styles.BentiContainer}>
      <img className={styles.avatar} src={Benti.user.picture} />
      <div className={styles.user}>
        <span className={styles.userName}>{Benti.user.name}</span>
        <span className={styles.userUserName}>{Benti.user.username}</span>
        <span className={styles.date}>- {publishedToNew}</span>
      </div>
      <div className={styles.BentiText}>{Benti.text}</div>
    </div>
  );
}
