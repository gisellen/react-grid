import React from "react";
import "../App.css";
import Table from "./Table";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rowNum: 3,
      colNum: 3,
      color: "#FF2020",
    };
    this.onAddColumns = this.onAddColumns.bind(this);
    this.onAddRows = this.onAddRows.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({
      color: value,
    });
  }

  onAddColumns() {
    this.setState((prevState) => {
      return {
        colNum: prevState.colNum + 1,
      };
    });
    let table = document.querySelector(".table");
    table.style.gridTemplateColumns =
      "repeat(" + (this.state.colNum + 1) + ", 1fr)";
  }

  onAddRows() {
    this.setState((prevState) => {
      return {
        rowNum: prevState.rowNum + 1,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <button id="add columns" onClick={this.onAddColumns}>
          Add Columns
        </button>
        <button id="add rows" onClick={this.onAddRows}>
          Add Row
        </button>
        <form>
          <select
            class="custom-select my-1 mr-sm-2"
            id="colorSelect"
            onChange={this.handleChange}
          >
            <option id="red" value="#FF2020">
              red
            </option>
            <option id="green" value="#77B61E">
              green
            </option>
            <option id="blue" value="#1E56B6">
              blue
            </option>
          </select>
        </form>
        <Table
          colNum={this.state.colNum}
          rowNum={this.state.rowNum}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
