import {blankList, ToDoList} from "../../../dtos/ToDoList";

export function deleteList(
  deleteToDoList: (listId: number) => Promise<string>,
  listId: number,
  list: ToDoList,
  lists: ToDoList[],
  setShowInput: (showInput: boolean) => void,
  setSelectedList: (list: ToDoList) => void,
  setLists: (lists: ToDoList[]) => void,
) {
  deleteToDoList(listId).then(()=>{
    let allLists = lists;
    allLists = allLists.filter(l => l.id!==list.id);
    setSelectedList(blankList);
    setShowInput(false);
    setLists(allLists);
  });
}