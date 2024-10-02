import React from "react";

class ComponentBasic extends React.Component {
    state = {
        name: 'Hung',
        address: 'HCM'
    }

    onChangeClick = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => alert('save success');
    // JSX sài react phải trả về một khối bọc ngoài, khối cha
    render() {
        return (
            // đây là div cha bọc ngoài 2 div con
            // <div>
            //     <div>
            //         hello {name}
            //     </div>
            //     <div>
            //         Ha ha ha ha
            //     </div>
            // </div>
            // còn 1 cách khác để chỉ đọc 2 khối div mà ko cần khối cha
            // <React.Fragment>
            //     <div>
            //         hello {this.state.name}
            //     </div>
            //     <div>
            //         Ha ha ha ha
            //     </div>
            // </React.Fragment>
            <div className="click">
                <div>
                    <input type="text" value={this.state.name} onChange={(event) => this.onChangeClick(event)} />
                    My name is {(this.state.name)}
                </div>
                <button onClick={() => this.handleClickButton()}>
                    save
                </button>
            </div>
        )
    }
}

export default ComponentBasic;