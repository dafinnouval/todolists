import React from "react";
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";

const List = ({ todoList, deleteTodo, editTodo, selectedTodo, handleChangeEditTodoName, finishEditTodo, finishTodo }) => {
    return todoList.map((value, index) => {
        return (
            <Card className="mt-3" border={value.status ? "secondary" : "primary"}>
                <Card.Body>
                    <Row>
                        <Col>{selectedTodo.index === index ? <Form.Control type="text" placeholder="Masukan Todo.." onChange={handleChangeEditTodoName} value={selectedTodo.name}></Form.Control> : <h3>{value.todoName}</h3>}</Col>
                        <Col xl="1" md="2">
                            <Button onClick={() => finishTodo(index)} variant={value.status ? "secondary" : "primary"}>
                                {value.status ? <FaTimes /> : <FaCheck />}
                            </Button>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        {selectedTodo.index === index ? (
                            <Button onClick={finishEditTodo}>Simpan</Button>
                        ) : (
                            <div>
                                <Button variant="warning" className="me-2" onClick={() => editTodo(index, value.todoName)}>
                                    Edit
                                </Button>
                                <Button variant="danger" className="" onClick={() => deleteTodo(index)}>
                                    Hapus
                                </Button>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        );
    });
};

export default List;
