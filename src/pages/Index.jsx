//index.jsx como estáva
import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import { useIndex } from "../data/hooks/pages/useIndex.page";
import styles from "./Index.module.css";

export default function Index() {
  const { text, onTextChange, maxLength, sendTweet, sortedTweetList } =
    useIndex();

  return (
    <div>
      <h1 className={styles.pageTitle}>Bentivee</h1>
      <div className={styles.tweetContainer}>
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
          onClick={sendTweet}
          className={styles.postButton}
          disabled={text.length === 0}
        >
          Tweetar
        </button>
      </div>

      <ul className={styles.tweetList}>
        {sortedTweetList.map((tweet) => {
          return (
            <li key={tweet.id} className={styles.tweetListItem}>
              <Tweet tweet={tweet.data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
