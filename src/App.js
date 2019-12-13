import React from 'react';
import Gl from './gl/Gl';

class App extends React.Component {
  state = { 
    groceryList: [
      { id: 1, item: 'Appples', type: 'produce', price: '$0.89', complete: false},
      { id: 2, item: 'Turkey', type: 'meat', price: '$15.00', complete: false},
      { id: 3, item: 'Hat', type: 'clothes', price: '$6.99', complete: false}
    ]
  }

  renderGl() {
    const { groceryList } = this.state;
    return(
      groceryList.map (g => (
        < Gl key={g.id} id={g.id} item={g.item} type={g.type} price={g.price} />
        ))
    )
  }

  render() {
    return (
      <div>
        <h1> Welcome To Our Store</h1>
        {this.renderGl()}
      </div>
    );
  }







}


export default App;
