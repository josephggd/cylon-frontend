import {ToDoList} from "../../../dtos/ToDoList";
import {ToDoItem} from "../../../dtos/ToDoItem";

export interface EditListProps {
  lists: ToDoList[];
  setLists: (lists: ToDoList[]) => void;
  refresh: string;
  setRefresh: (showInput: string) => void;
  showInput: boolean;
  setShowInput: (showInput: boolean) => void;
  editedList: ToDoList;
  setEditedList: (list: ToDoList) => void;
  handleSubmit: (
    toDoList:ToDoList,
    toDoItems:ToDoItem[],
    setEditedList:(toDoList:ToDoList) => void,
    refresh:string,
    setRefresh:(refresh:string) => void
  ) => void;
}