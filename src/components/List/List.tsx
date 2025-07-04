import { FiTrash } from "react-icons/fi";
import Task from "../Task/Task";
import ActionButton from "../ActionButton/ActionButton";
import type { IList, ITask } from "../../types";
import { useTypedDispatch } from "../../hooks/redux";
import { deleteList, setModalActive } from "../../store/slices/boardsSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 } from "uuid";
import { setModalData } from "../../store/slices/modalSlice";
import type { FC } from "react";
import { deleteButton, header, listWrapper, names } from "./List.css";
import { Droppable } from "react-beautiful-dnd";

type TListProps = {
  boardId: string;
  list: IList;
};

const List: FC<TListProps> = ({ list, boardId }) => {
  const dispatch = useTypedDispatch();

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({ boardId, listId }));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 삭제하기 : ${list.listName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  const handleTaskChange = (boardId: string, listId: string, task: ITask) => {
    dispatch(setModalData({ boardId, listId, task }));
    dispatch(setModalActive(true));
  };

  return (
    <Droppable droppableId={list.listId}>
      {(provided) => (
        <div className={listWrapper}
        {...provided.droppableProps}
        ref={provided.innerRef}
        >
          <div className={header}>
            <div className={names}>{list.listName}</div>
            <FiTrash
              className={deleteButton}
              onClick={() => handleListDelete(list.listId)}
            />
          </div>
          {list.tasks.map((task, index) => (
            <div
              onClick={() => handleTaskChange(boardId, list.listId, task)}
              key={task.taskId}
            >
              <Task
                id={task.taskId}
                taskName={task.taskName}
                taskDescription={task.taskDescription}
                boardId={boardId}
                index={index}
              />
            </div>
          ))}
          {provided.placeholder}
          <ActionButton boardId={boardId} listId={list.listId} />
        </div>
      )}
    </Droppable>
  );
};

export default List;
