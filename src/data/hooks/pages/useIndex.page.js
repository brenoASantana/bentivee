import { useMemo, useState } from "react";
import { mutate } from "swr";
import { ApiService } from "../../services/ApiService";
import { useApi } from "../useApi";

export function useIndex() {
  const maxLength = 125;
  const [text, setText] = useState("");
  const BentiList = useApi("Bentis").data;
  const sortedBentiList = useMemo(() => {
    return (BentiList || []).sort((a, b) =>
      a.data.date < b.data.date ? 1 : -1
    );
  }, [BentiList]);

  const user = {
    name: "Breno Santana",
    username: "@brenoasantana",
    picture: "https://github.com/brenoasantana.png",
  };

  const Benti = {
    date: new Date(),
    text: text,
    user,
  };

  function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  async function sendBenti() {
    await ApiService.post("bentis", {
      data: {
        date: new Date().toISOString(),
        text: text,
        user,
      },
    });
    setText("");
    mutate("bentis");
  }

  console.log(sortedBentiList);

  return {
    text,
    onTextChange,
    maxLength,
    sendBenti,
    sortedBentiList,
  };
}
