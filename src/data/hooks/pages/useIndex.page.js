import { useMemo, useState } from "react";
import { mutate } from "swr";
import { ApiService } from "../../services/ApiService";
import { useApi } from "../useApi";
import sorted from "../../../pages/Index";

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
 console.log(Benti.data)
  return {
    text,
    onTextChange,
    maxLength,
    sendBentis,
    sendBentiList,
  };
}
