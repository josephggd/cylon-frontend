import './App.css';
import React, {useEffect} from "react";
import {blankList, ToDoList} from "../dtos/ToDoList";
import {ViewLists} from "./components/ViewLists/ViewLists";
import {EditList} from "./components/EditLists/EditList";
import {getAllToDoLists} from "./api/ApiRequests";
import {handleSubmit} from "./components/EditLists/EditListFunctions";

function App() {
  const [refresh, setRefresh] = React.useState(true);
  const [lists, setLists] = React.useState<ToDoList[]>([]);
  const [selectedList, setSelectedList] = React.useState<ToDoList>(blankList);
  const [showInput, setShowInput] = React.useState(false);

  useEffect(() => {
    getAllToDoLists().then((response) => {
      return response.toDoLists;
    }).then(setLists);
  }, [refresh]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={"cylon.gif"} alt={"missing"}/>
        <div className={"TwoColumnDiv"}>
          <ViewLists
            lists={lists}
            setLists={setLists}
            showInput={showInput}
            setShowInput={setShowInput}
            setSelectedList={setSelectedList}
            selectedList={selectedList}/>
          <EditList
            lists={lists}
            setLists={setLists}
            refresh={refresh}
            setRefresh={setRefresh}
            showInput={showInput}
            setShowInput={setShowInput}
            editedList={selectedList}
            setEditedList={setSelectedList}
            handleSubmit={handleSubmit}
          />
        </div>
      </header>
      <a className="GitLink" href={"https://github.com/josephggd/hello-cylon"}>Github</a>
    </div>
  );
}

export default App;
