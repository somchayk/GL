import React from 'react';
import List from './gl/List';
import Listitem from './gl/Listitem';
import ItemForm from './gl/ItemForm';
import './App.css';

class App extends React.Component {
  state = { 
    groceryList: [
      { id: 1, item: 'Appples', type: 'produce', price: '$0.89', complete: false},
      { id: 2, item: 'Turkey', type: 'meat', price: '$15.00', complete: false},
      { id: 3, item: 'Hat', type: 'clothes', price: '$6.99', complete: false}
    ]
  }

  handleComplete = (id) => {
    const { groceryList } = this.state
    this.setState({
      groceryList: groceryList.map( groceryList => {
        if (groceryList.id === id) {
          return {
            ...groceryList, 
            complete: !groceryList.complete
          }
        }
        return groceryList 
      })
    })
  }



  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (incomingItem) => {
    const { groceryList }  = this.state;
    const newItem = { id: this.getUniqId(), ...incomingItem }
    this.setState({ groceryList: [newItem, ...groceryList] })
  }


  render() {
    return (
      <div>
        <h1 style={{color: "yellow", backgroundColor: "grey"}}> Welcome To Our Store</h1>
        <ItemForm addItem={this.addItem} />
        <List item = {this.state.groceryList} handleComplete = {this.handleComplete}/>
       

      </div>
    );
  }


  







}


export default App;
