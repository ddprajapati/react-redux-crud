import React, { Component } from "react";

import ListUsers from "./components/ListUsers";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import FormDialog from "./components/FormDialog";
import EditFormDialog from "./components/EditFormDialog";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ListUsers />
        <AddUser />
        <FormDialog />
        <EditFormDialog />

      </div>
    );
  }
}

export default App;
