import './ViewLists.css';
import React from "react";
import {ViewListsProps} from "./ViewListsProps";
import Button from '@mui/material/Button';
import {deleteList} from "./ViewListsFunctions";
import {deleteToDoList} from "../../api/ApiRequests";

export function ViewLists(props:ViewListsProps) {
  return (
    <div className="ContainerCol">
      <h3 data-testid={"view-lists-header"}>View Lists</h3>
      <ul>
        {props.lists.length>0 && props.lists.map((list, index) => (
          <li
            className={"ViewList"}
            key={index}
            data-testid={"view-list-"+index}
            onClick={() => {
              props.setSelectedList(list);
              if (!props.showInput) {
                props.setShowInput(true);
              }
            }}
          >
            {list.title} : {list.description}
            <Button
              data-testid={"delete-list-"+index}
              variant="contained"
              color="error" onClick={()=>{
              deleteList(deleteToDoList, list, props.lists, props.setShowInput, props.setSelectedList, props.setLists);
            }
            }>DELETE</Button>
          </li>
        ))}
        {props.lists.length === 0 && <p data-testid={"no-lists"}>No lists to show</p>}
      </ul>
    </div>
  );
}