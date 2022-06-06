/**
 * App.js
 */

import React from "react";
import Table from "./Table03";
import Form from "./Form";

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


  removeStudent = (student) => {
    // read the state
    const { students } = this.state;

    this.setState({
      students: students.filter((st, i) => {
        return i !== student
      })
      /**
       * "2" == 2  --->  True
       * "2" === 2  -->  False
       */
    })
  }

  handleNewStudent = (student) => {
    this.setState({students:[...this.state.students, student]})
  }

  render() {
    const { students } = this.state // <=> const {students}=this.state.students

    return (
      <div className="container">
        <h1>Students</h1>
        <Form newStudentOUT={this.handleNewStudent} />

        <br />
        <Table studentsDataIN={students} studentToRemoveOUT={this.removeStudent} />
      </div>
    )
  }
}

export default App;
