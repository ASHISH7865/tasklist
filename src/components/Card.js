import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      secondaryColor: "#81b214",
      primaryColor: "#ffffff",
    },
    {
      primaryColor: "#ffffff",
      secondaryColor: "#e1701a",
    },
    {
      primaryColor: "#ffffff",
      secondaryColor: "#206a5d",
    },
    {
      primaryColor: "#ffffff",
      secondaryColor: "#ffcc29",
    },
    {
      primaryColor: "#ffffff",
      secondaryColor: "#c06014",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].secondaryColor }}
      ></div>
      <div class="task-holder" style={{
            "background-color": colors[index % 5].primaryColor,
        
          }}>
        
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.Task}
        </span>
        <p className="mt-3">{taskObj.subtask}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit "
            style={{ color: colors[index % 5].secondaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>
          <i
            class="fas fa-trash-alt m-3"
            style={{ color: colors[index % 5].secondaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].secondaryColor }}
      ></div>
    </div>
  );
};

export default Card;
