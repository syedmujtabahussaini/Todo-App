import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { todo: [], textvalue: "" };

  addtodo = () => {
    this.setState({
      todo: this.state.todo.concat(this.state.textvalue),
      textvalue: ""
    });
  };

  textitem = e => {
    this.setState({ textvalue: e.target.value });
  };

  tododel = i => {
    const filtered = this.state.todo.filter(item => {
      return item.indexOf(i) === -1;
    });
    this.setState({ todo: filtered });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textvalue}
          onChange={this.textitem}
        />
        <button onClick={this.addtodo}>Add item</button>
        <h3>
          <ul>
            {this.state.todo.map((item, index) => {
              return (
                <li key={item}>
                  {item} <button onClick={() => this.tododel(item)}>X</button>
                </li>
              );
            })}
          </ul>
        </h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
