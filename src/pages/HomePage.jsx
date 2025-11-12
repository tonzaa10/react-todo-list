import {useState } from "react";
import NewTask from "../components/NewTask";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 300));
  };

  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    toast.success("Successfully Added !", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    toast.warning("Successfully Delete !", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  const updateTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    toast.info("Successfully Updated !", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };



  return (
    <>
      <h2 className="mt-10">Todo List: </h2>
      <NewTask addTask={addTask} />
      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((item, index) => (
              <TodoItem
                key={index}
                id={index}
                item={item}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default HomePage;
