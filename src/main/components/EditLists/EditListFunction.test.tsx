import {blankList} from "../../../dtos/ToDoList";
import {testItems} from "../../../dtos/ToDoItem";
import React from "react";
import {handleSubmit} from "./EditListFunctions";

describe('EditItem', () => {
  const refresh = "false";
  const setEditedList = jest.fn();
  const setRefresh = jest.fn();
  // test('runs handleSubmit', () => {
  //   handleSubmit(
  //     {...testList, items: testItems},
  //     testItems,
  //     setEditedList,
  //     setRefresh);
  //   expect(setEditedList).toHaveBeenCalledWith(blankList);
  //   expect(setRefresh).toHaveBeenCalledWith(true);
  // });
  test('runs handleSubmit w blank list', () => {
    handleSubmit(
      blankList,
      testItems,
      setEditedList,
      refresh,
      setRefresh);
    expect(setEditedList).not.toHaveBeenCalledWith(blankList);
    expect(setRefresh).not.toHaveBeenCalledWith(true);
  });
});