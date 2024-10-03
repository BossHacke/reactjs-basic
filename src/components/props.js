import React from "react";

class Prop extends React.Component {

    state = {
        showJob: false
    }

    handleShowJob = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {

        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowJob()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="arrJobs">
                            {/* child component name : {name} - {age} */}
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => !this.handleShowJob()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default Prop;