import React from "react";
import Prop from "./props";
import AddComponent from "./add_component";
// import FunctionComponent from "./function_component";


class Form extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500 $' },
            { id: 'abcJob2', title: 'Testers', salary: '400 $' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000 $' }
        ],
    }


    // onHandleFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value,
    //     })
    // }

    // onHandleLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value,
    //     })
    // }

    // onHandleSubmit = (event) => {
    //     event.preventDefault();
    //     this.setState(this.state);
    // }

    addNewJob = (job) => {
        this.setState(
            {
                arrJobs: [...this.state.arrJobs, job],
            }
        )
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                {/* <div>
                    Form
                </div>
                <form>
                    <label htmlFor="fname">First name</label><br />
                    <input type="text" value={this.state.arrJobs.title} onChange={(event) => { this.onHandleFirstName(event) }} /><br />
                    <label htmlFor="lname">Last name</label><br />
                    <input type="text" value={this.state.arrJobs.salary} onChange={(event) => { this.onHandleLastName(event) }} /><br />
                    <input type="submit" value="Submit" onClick={(event) => { this.onHandleSubmit(event) }} />
                </form > */}
                <Prop arrJobs={this.state.arrJobs} />
                {/* <FunctionComponent arrJobs={this.state.arrJobs} /> */}
            </>
        );
    }

}
export default Form;