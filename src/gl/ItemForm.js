import React, { Component} from 'react';

class ItemForm extends Component {
  state = { item: '', type: '', price: '' }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state)
    this.setState({ item: '',  type: '', price: ''})
  }

  render(){
    const { item, type, price } = this.state;
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
          value={this.state.type}
          name='type'
          onChange={this.handleChange}
          required 
          placeholder="What kind of item is this?"
         />
        <input
          value={this.state.price}
          name='price'
          onChange={this.handleChange}
          required 
          placeholder="How much did this cost?"
         />
         <input type='Submit' />
      </form>
    )
  }
}

export default ItemForm;
