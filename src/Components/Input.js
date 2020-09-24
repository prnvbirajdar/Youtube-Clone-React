import React from "react";

class Input extends React.Component {
  state = { searchInput: "" };

  handleForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleForm}>
          <div className="field">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => this.setState({ searchInput: e.target.value })}
              value={this.state.searchInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
