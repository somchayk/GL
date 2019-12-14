import React, { Component} from 'react';

class ItemForm extends Component {
  state = { item: '' }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item)
    this.setState({ item: '' })
  }

  render(){
    const { item } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.item}
          name='item'
          onChange={this.handleChange}
          required 
          placeholder="Add An Item"
         />
      </form>
    )
  }
}

export default ItemForm;
