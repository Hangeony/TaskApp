import React, { useState, useCallback } from "react";
import type { ChangeEvent, FC } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type TSideFormProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TSideFormProps> = ({ setIsFormOpen }) => {
  const dispatch = useTypedDispatch();
  const [inputText, setInputText] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleOnBuler = () => {
    setIsFormOpen(false);
  };

  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: { boardId: uuidv4(), boardName: inputText, lists: [] },
        })
      );

      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록 :${inputText}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
    }
  };

  return (
    <div className={sideForm}>
      <input
        className={input}
        // ref={inputRef}
        autoFocus
        name="boardName" // (optional)
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBuler}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
