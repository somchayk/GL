import React, { Component } from 'react';

class ItemForm extends Component {
  state = { item: '', price: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state)
    this.setState({ item: '', price: '' })
  }

  render(){
    const { item, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.item}
          name='item'
          onChange={this.handleChange}
          required 
          placeholder="Add An Item"
          />
        <input
          value={this.state.price}
          name='price'
          onChange={this.handleChange}
          required 
          placeholder="How much did it cost?"
          />
          <button>Submit</button>
      </form>
    )
  }
}

export default ItemForm;
