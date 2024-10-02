import React from "react";

const FunctionComponent = (props) => {

    let { arrJobs } = props;

    return (
        <>
            <div>
                {
                    arrJobs.map((item, index) => {
                        return (
                            <>
                                <div>
                                    {item.title} - {item.salary}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FunctionComponent;