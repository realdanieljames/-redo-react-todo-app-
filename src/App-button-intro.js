import React, { Component }from "react";

import "./App.css";

class App extends Component {
    state = {
        name:  "",
        count:  0,
    };

    ComponentDidMount() {
        this.setState({
            name: "Mr.Robot",
        });
    }
    AddOne() {
        let newCount = this.state.count + 1;
        this.setState({
            count: newCount,
        });
    }
//===========================================================================================//
//===========================================================================================//
    MinusOne = ()=> {
        let countDown = this.state.count - 1;
        this.setState({
            count: countDown,
        });
    };
//===========================================================================================//
//===========================================================================================//
    Reset = ()=> {
        this.setState({
            count:0,
        });
    };
//===========================================================================================//
//===========================================================================================//
    render() {
        return (
            <div style={{ textAlign:"center",  marginTop:5 }}>
                Good Afternoon {this.state.name}
                <div style={styles.buttonDivStyle}>
                    <span>{this.state.count}</span>
                    <button
                        onClick={()=>
                            this.setState({
                                count: this.state.count +  1,
                            })}
                            className="plus-button-style"
                    >
                        +
                    </button>{" "}
                    <button onClick={this.MinusOne}>-</button>
                    <button onClick={this.Reset} className="plus-button-style">Reset</button>
                </div>
            </div>
        );
    }
}

//===========================================================================================//
//===========================================================================================//

const styles = {
    buttonDivStyle: {
        marginTop: 10,
    },
};

export default App;
//===========================================================================================//
//===========================================================================================//
