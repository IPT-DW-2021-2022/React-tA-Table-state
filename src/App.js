/**
 * App.js
 */

import React from "react";
import Table from "./Table03";

class App extends React.Component {
  // data is defined as 'state'
  // this means that data can be changed by app,
  // at real time 
  state = {
    students: [
      {
        name: "Ana",
        surname: "Lopes",
      },
      {
        name: "Mário",
        surname: "Silva",
      },
      {
        name: "Maria",
        surname: "Pereira",
      },
      {
        name: "Luís",
        surname: "Gomes",
      },
    ]
  }

  render() {
    const { students } = this.state // <=> const {students}=this.state.students

    return (
      <div className="container">
        <h1>Students</h1>
        <Table studentsDataIN={students} />
      </div>
    )
  }
}

export default App;
