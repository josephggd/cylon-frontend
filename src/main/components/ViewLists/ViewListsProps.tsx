import {ToDoList} from "../../../dtos/ToDoList";

export interface ViewListsProps {
  lists: ToDoList[];
  setLists: (lists: ToDoList[]) => void;
  showInput: boolean;
  setShowInput: (showInput: boolean) => void;
  selectedList: ToDoList|null;
  setSelectedList: (list: ToDoList) => void;
}