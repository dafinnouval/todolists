import { useState } from "react";
import "./App.css";
import { Container, Toast } from "react-bootstrap";
import Add from "./Components/Add";
import List from "./Components/List";

function App() {
    const [todoName, setTodoName] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState([]);
    const [openNotificationSave, setOpenNotificationSave] = useState(false);
    const [openNotificationDelete, setOpenNotificationDelete] = useState(false);
    const [openNotificationEdit, setOpenNotificationEdit] = useState(false);

    const addTodo = () => {
        const dataTodo = { todoName, status: false };
        setTodoList([dataTodo, ...todoList]);
        setTodoName("");
        setOpenNotificationSave(true);
    };

    const deleteTodo = (index) => {
        setTodoList(todoList.filter((value, idx) => index !== idx));
        setOpenNotificationDelete(true);
    };

    const handleChangeTodoName = (e) => {
        const data = e.target.value;
        // console.log(data);
        setTodoName(data);
    };

    // console.log({ todoList });

    const editTodo = (index, name) => {
        // console.log(index, name);
        setSelectedTodo({ index, name });
    };
    // console.log({ selectedTodo });

    const handleChangeEditTodoName = (e) => {
        const name = e.target.value;
        setSelectedTodo({ ...selectedTodo, name });
    };

    const finishEditTodo = () => {
        const cloneTodoList = [...todoList];
        cloneTodoList[selectedTodo.index].todoName = selectedTodo.name;
        setTodoList(cloneTodoList);
        setSelectedTodo([]);
        console.log(cloneTodoList);
        setOpenNotificationEdit(true);
    };

    const finishTodo = (index) => {
        const cloneTodoList = [...todoList];
        cloneTodoList[index].status = !cloneTodoList[index].status;
        setTodoList(cloneTodoList);
    };

    return (
        <Container>
            <h1 className="text-center mt-5">Todo Web App</h1>

            {/* Notifikasi */}
            <div className="fixed-top mt-3 ms-3">
                <Toast show={openNotificationSave} bg="success" autohide delay={2000} onClose={() => setOpenNotificationSave(false)}>
                    <Toast.Body className="text-white">Berhasil menambahkan data</Toast.Body>
                </Toast>
            </div>

            <div className="fixed-top mt-3 ms-3">
                <Toast show={openNotificationDelete} bg="success" autohide delay={2000} onClose={() => setOpenNotificationDelete(false)}>
                    <Toast.Body className="text-white">Berhasil menghapus data</Toast.Body>
                </Toast>
            </div>

            <div className="fixed-top mt-3 ms-3">
                <Toast show={openNotificationEdit} bg="success" autohide delay={2000} onClose={() => setOpenNotificationEdit(false)}>
                    <Toast.Body className="text-white">Berhasil mengedit data</Toast.Body>
                </Toast>
            </div>

            {/* Input Todo */}
            <Add handleChangeTodoName={handleChangeTodoName} todoName={todoName} addTodo={addTodo} />

            {/* List Todo */}
            <div className="mt-5">
                <List todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo} selectedTodo={selectedTodo} handleChangeEditTodoName={handleChangeEditTodoName} finishEditTodo={finishEditTodo} finishTodo={finishTodo} />
            </div>
        </Container>
    );
}

export default App;
