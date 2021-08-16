import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  // change the state held in the TodoContainer component
  // clear the state held in this component
  // as long as the state in this component has more than just whitespace
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
          name="title" //must match the name in the state, this field updates that state
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo