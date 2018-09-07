import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        name: 'Mercy'
    };

    nameChange = (newName) => {
        this.setState({
            name: newName
        })
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    render() {
        return (
            <div className="App">
                <br/>
                <button onClick={() => this.nameChange('Lord Has Mercy')}>
                    Change State using anno func
                </button>
                <button onClick={this.nameChange.bind(this, 'Counter Strike')}>
                    change name using bind func
                </button>
                <br/>
                <input type="text" onChange={this.changeName} value={this.state.name}/>
                <br/><br/>
                <div className="App-title">{this.state.name}</div>
            </div>
        );
    }
}
export default App;
