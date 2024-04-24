import React, { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createToDoList, getToDoListById, updateToDoListById } from "../Service/todoservice";
import { Button, Container, Form } from "react-bootstrap";


type RouteParam = {
  id: string;
}

const ListCrud: React.FC = () => {
  const { id } = useParams<RouteParam>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<string>("");
  const history = useHistory();

  const saveOrUpdate = (e: FormEvent) => {
    e.preventDefault();


    const task = { title, description, completed };
    if (id) {
      updateToDoListById(task, Number(id))
        .then(() => history.push("/task"))
        .catch((error) => console.log(error));
    } else {
      createToDoList(task)
        .then(() => history.push("/task"))
        .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    if (id) {
      getToDoListById(Number(id))
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCompleted(response.data.completed);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  
    

  return (
    <>
    <Container>
   
    <Form>
      <Form.Label>Title of Task</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter title of task" value={title} onChange={(e) => setTitle(e.target.value)}
      />

      <Form.Label>Description of task</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Description of task" value={description} onChange={(e) => setDescription(e.target.value)}
      />

      <Form.Label>Status of task</Form.Label>
      <Form.Control
        type="text"
        placeholder="If yes type 'true' or else 'false'" value={completed} onChange={(e) => setCompleted(e.target.value)}
      />

      <br />
    </Form>
    <Button onClick={(e) => saveOrUpdate(e)} variant="primary">Submit</Button>
  </Container>
  </>
  );
}

export default ListCrud;