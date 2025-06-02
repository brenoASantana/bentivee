//React
import { useMemo } from "react";

//Owned
import Benti from "../components/Benti";
import TextInput from "../components/TextInput";
import { useIndex } from "../data/hooks/pages/useIndex.page";
import styles from "./Index.module.css";

export default function Index() {
  const { text, onTextChange, maxLength, sendBentis, sendBentiList } =
    useIndex();

  console.log("sendBentiList ->", sendBentiList);

  const sorted = useMemo(() => {
    return sendBentiList.sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
  }, [sendBentiList]);

 console.log("sorted ->", sorted);

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
          onClick={sendBentis}
          className={styles.postButton}
          disabled={text.length === 0}
        >
          Bentiar
        </button>
      </div>

      <ul className={styles.BentiList}>
        {sorted.map((benti,index) => {

          return (
            <li key={index} className={styles.BentiListItem}>
              <Benti benti={benti} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
