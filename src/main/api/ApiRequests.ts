import {ToDoList} from "../../dtos/ToDoList";

export const failedToPut = "PUT request failed";
export const failedToPost = "POST request failed";
export const failedToGet = "GET request failed";
export const failedToDelete = "DELETE request failed";
export const baseUrl = "https://dry-basin-54498.herokuapp.com/data/";
export const postNewListUrl = baseUrl + "save/list";
export const postNewItemUrl = baseUrl + "save/item";
export const getListsUrl = baseUrl + "all";
export const putListUrl = baseUrl + "update/list";
export const putItemUrl = baseUrl + "update/item";
export const deleteListUrl = baseUrl + "remove/list/";
export const deleteItemUrl = baseUrl + "remove/item/";

export async function postNewToDoList(newToDoList : ToDoList):Promise<string> {
  try {
    const response = await fetchRequest(postNewListUrl, newToDoList);
    if (response.status===200){
      return "SAVED";
    } else {
      throw new Error(failedToPost);
    }
  } catch {
    return failedToPost;
  }
}

export async function putUpdateToDoList(existingToDoList : ToDoList):Promise<string> {
  try {
    const response = await fetchRequest(putListUrl, existingToDoList, 'PUT');
    if (response.status===200){
      return "UPDATED";
    } else {
      throw new Error(failedToPut);
    }
  } catch {
    return failedToPut;
  }
}

export async function deleteToDoList(id : number):Promise<string> {
  try {
    const response = await fetchRequest(deleteListUrl+id,{}, 'DELETE');
    if (response.status===200){
      return "DELETED";
    } else {
      throw new Error(failedToDelete);
    }
  } catch {
    return failedToDelete;
  }
}

async function fetchRequest(url = '', data = {}, method= 'POST') {
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}