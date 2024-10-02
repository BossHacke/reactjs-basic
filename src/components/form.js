import React from "react";
import Prop from "./props";


class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500 $' },
            { id: 'abcJob2', title: 'Testers', salary: '400 $' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000 $' }
        ],
    }


    onHandleFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    onHandleLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.setState(this.state);
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div>
                    Form
                </div>
                <form>
                    <label htmlFor="fname">First name</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => { this.onHandleFirstName(event) }} /><br />
                    <label htmlFor="lname">Last name</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => { this.onHandleLastName(event) }} /><br />
                    <input type="submit" value="Submit" onClick={(event) => { this.onHandleSubmit(event) }} />
                </form >
                <Prop name={'Hung'} age={'23'} arrJobs={this.state.arrJobs} />
            </>
        );
    }

}
export default Form;