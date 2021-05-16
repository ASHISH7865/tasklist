import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function TaskEntry({ modal, toggle, save }) {
  const [task, setTask] = useState("");
  const [subTask, setSubTask] = useState("");

  function handleTaskChange(e) {
    const { name, value } = e.target;
    if (name === "task") {
      setTask(value);
    } else {
      setSubTask(value);
    }
  }
  function handleSave() {
    let taskObj = {};
    taskObj["Task"] = task;
    taskObj["subtask"] = subTask;
    save(taskObj);
  }

  return (
    <Modal  isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Tasklist</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task</label>
            <input
              type="text"
              name="task"
              className="form-control"
              value={task}
              onChange={handleTaskChange}
            />
          </div><br />
          <div className="form-group">
            <label>Subtask</label>
            <textarea
              rows="5"
              name="subtask"
              className="form-control"
              value={subTask}
              onChange={handleTaskChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default TaskEntry;
