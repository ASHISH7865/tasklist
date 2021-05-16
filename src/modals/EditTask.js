import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [task, setTask] = useState("");
  const [subTask, setSubTask] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      setTask(value);
    } else {
      setSubTask(value);
    }
  };

  useEffect(() => {
    setTask(taskObj.Task);
    setSubTask(taskObj.subtask);
  },[taskObj.Task, taskObj.subtask]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Task"] = task;
    taskObj["subtask"] = subTask;
    updateTask(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={handleChange}
            name="task"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Subtask</label>
          <textarea
            rows="5"
            className="form-control"
            value={subTask}
            onChange={handleChange}
            name="subTask"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
