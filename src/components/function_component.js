import React from "react";

//dùng function component thì nên dùng vs hook
const FunctionComponent = (props) => {

    let { arrJobs } = props;

    return (
        <>
            <div>
                {
                    arrJobs.map((item, index) => {
                        if (item.salary > 300) {
                            return (
                                <>
                                    <div>
                                        {item.title} - {item.salary}
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default FunctionComponent;