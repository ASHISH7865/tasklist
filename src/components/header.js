import React, { useEffect, useState } from "react";
import TaskEntry from "../modals/taskEntry";
import Card from "./Card";
function Header() {
  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList"); //fetch data from localStorage

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);
  const deleteTask = (index) => {
    let tempTask = taskList;
    tempTask.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempTask));
    setTaskList(tempTask);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempTask = taskList;
    tempTask[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempTask));
    setTaskList(tempTask);
    window.location.reload();
  };

  function toggle() {
    setModal(!modal);
  }

  function saveTask(taskObject) {
    let tempTask = taskList;
    tempTask.push(taskObject);
    localStorage.setItem("taskList", JSON.stringify(tempTask));
    setTaskList(tempTask);
    setModal(false);
  }
  return (
    <>
      <div className="header text-center">
        <h2>Task List</h2>
        <button className="btn btn-primary mt-3 rounded-circle" onClick={() => setModal(true)}>
             +
            </button>
      </div>
      
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <TaskEntry toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
}

export default Header;
