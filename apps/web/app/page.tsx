"use client";
import classes from "./page.module.css";
import { useSocket } from "../context/SocketProvider";
import { useState } from "react";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  return (
    <div>
     
      <div className="">
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          onClick={(e) => sendMessage(message)}
          className={classes["button"]}
        >
          Send
        </button>
      </div>
      <div className="">
        {messages.map((e)=>{
          console.log("Message:", e);
          return <li key={e}>{e}</li>;
        })}
      </div>
    </div>
  );
}
