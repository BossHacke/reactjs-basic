import React from "react";


class Form extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
            </>
        );
    }

}
export default Form;