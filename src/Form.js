/**
 * Form.js
 */


import React from "react";

class Form extends React.Component {
    // define the data that form will collect
    student = {
        name: "",
        surname: "",
    }

    // specify that 'student' is a 'state' object
    state = this.student;


    /**
     * function to handle data provided by 'input' field
     * @param {*} event 
     */
    handleAdd = (event) => {
        // read the data available at 'event'
        const { name, value } = event.target
        // assign to the state identified by 'name' withe the 'value' writed by user
        this.setState({
            [name]: value,
        })
    }

    /**
     * send colected data to App component
     */
    submitForm = () => {
        this.props.newStudentOUT(this.state);
        this.setState(this.student);
    }

    render() {

        const { name, surname } = this.state;
        return (
            <form>
                <div className="input-group">
                    <span className="input-group-text">New Student:</span>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleAdd}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        value={surname}
                        onChange={this.handleAdd}
                    />
                    <input className="btn btn-primary"
                        type="button"
                        value="Save"
                        onClick={this.submitForm}
                    />
                </div>
            </form>
        )
    }
}

export default Form;