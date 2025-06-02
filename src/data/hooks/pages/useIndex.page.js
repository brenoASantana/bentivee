import { useMemo, useState } from "react";

export function useIndex() {
  const maxLength = 125;
  const [text, setText] = useState("");
  const [sendBentiList, setSendBentiList] = useState([]);

  const Benti = {
    date: new Date(),
    text: text,
    user: {
      name: "Breno Santana",
      username: "@brenoasantana",
      picture: "https://github.com/brenoasantana.png",
    },
  };

  function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  async function sendBentis() {
    setSendBentiList([...sendBentiList, Benti]);
  }

  return {
    text,
    onTextChange,
    maxLength,
    sendBentis,
    sendBentiList,
  };
}
