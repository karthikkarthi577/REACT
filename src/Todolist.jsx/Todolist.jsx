import React, { useState } from "react";

const Todolist = () => {
  let [data, setData] = useState({
    id: "",
    content: "hello",
  });

  let [list, toDoList] = useState([]);

  let [editingItem, setEditingItem] = useState({
    id: "",
    enableEditing: "false",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleDelete = (id) => {
    let filterdData = list.filter((x) => {
      if (id !== x.id) {
        return x;
      }
    });
    toDoList(filterdData);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Math.floor(Math.random() * 10),
      content: data.content,
    };
    //****here we are taking one array and 1paramter is spread of lists which will contain previous lists and 2parameter is new data  which we will push to list which ;leads to multiple lists*****/

    toDoList([...list, newTodo]);
    setData({
      id: "",
      content: "",
    });
  };

  let handleEditContent = (id) => {
    setEditingItem({
      ...editingItem,
      id: id,
      enableEditing: true,
    });

    let EditData = list.find((x) => {
      if (x.id === id) {
        return x;
      }
    });
    setData(EditData);
  };

  let handleEdit = (e) => {
    e.preventDefault();
    let updatedlist = list.map((x) => {
      if (x.id === editingItem.id) {
        return data;
      } else {
        return x;
      }
    });
    console.log(updatedlist);
    toDoList(updatedlist);
  };

  return (
    <div>
      <h1>To DO List</h1>

      <input
        type="text"
        name="content"
        value={data.content}
        id=""
        onChange={handleChange}
      />
      {list.map((x) => {
        return (
          <div>
            {x.content}
            <button onClick={() => handleEditContent(x.id)}>edit</button>
            <button onClick={(e) => handleDelete(x.id, e)}>Delete</button>
          </div>
        );
      })}

      {editingItem.enableEditing === true ? (
        <button onClick={handleEdit}>Edit</button>
      ) : (
        <button onClick={handleSubmit}>submit</button>
      )}
    </div>
  );
};

export default Todolist;
