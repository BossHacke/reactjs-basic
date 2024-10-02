import React from "react";

class Prop extends React.Component {

    render() {

        let { name, age, arrJobs } = this.props;
        return (
            <>
                <div className="arrJobs">
                    child component name : {name} - {age}
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
            </>
        )
    }
}

export default Prop;