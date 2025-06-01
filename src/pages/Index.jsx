//index.jsx como estáva
import TextInput from "../components/TextInput";
import { useIndex } from "../data/hooks/pages/useIndex.page";
import styles from "./Index.module.css";

export default function Index() {
  const { text, onTextChange, maxLength, sendBenti, sortedBentiList } =
    useIndex();

  return (
    <div>
      <h1 className={styles.pageTitle}>Bentivee</h1>
      <div className={styles.BentiContainer}>
        <img
          src={"https://github.com/brenoasantana.png"}
          className={styles.avatar}
        />
        <TextInput
          placeholder={"O que está acontecendo?"}
          rows={3}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <div>
          {text.length} / {maxLength}
        </div>
        <button
          onClick={sendBenti}
          className={styles.postButton}
          disabled={text.length === 0}
        >
          Bentiar
        </button>
      </div>

      <ul className={styles.BentiList}>
        {sortedBentiList.map((Benti) => {
          return (
            <li key={Benti.id} className={styles.BentiListItem}>
              <Benti Benti={Benti.data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
