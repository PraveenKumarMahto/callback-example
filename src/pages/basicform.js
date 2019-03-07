import React from 'react';
import BasicInputForm from '../studentInput'

class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {},
        };
    }

    callbackfunc = (newStudentValue) => {
        this.setState({
            student: newStudentValue,
        });
    }

    render() {
        return (
            <div>
                <center>Student Input Form </center>

                <BasicInputForm
                    callback={this.callbackfunc}
                />
                
                <center>Student Details </center>

                Name : <b>{this.state.student.name}</b><br />
                Roll Number : <b>{this.state.student.rollNumber}</b><br />
                email: <b>{this.state.student.email}</b><br />
                
            </div>
        );
    }
}

export default BasicForm;
