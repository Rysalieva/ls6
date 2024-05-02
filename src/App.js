import React, { useState } from 'react';
import UserForm from "./components/UserForm/UserForm";
import UserTable from "./components/UserTable/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    setUsers([...users, data]);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };

  const clearTable = () => {
    setUsers([]);
  };

  return (
      <div>
        <h1>User Form</h1>
        <UserForm onSubmit={addUser} />
        <h1>User Table</h1>
        <UserTable users={users} onDelete={deleteUser} onClear={clearTable} />
      </div>
  );
};

export default App;
