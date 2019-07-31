import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import OptionsHeader from './components/OptionsHeader/OptionsHeader';
import OptionsList from './components/OptionsList/OptionsList';
import CartHeader from './components/CartHeader/CartHeader';
import Cart from './components/Cart/Cart';
import CartTotal from './components/CartTotal/CartTotal';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }

  updateFeature = (feature, value) => {

    this.setState({
      [feature]: value
    })
  }

  render() {
    const options = this.props.features
    const state = this.state

    return (
      <div className="App">
        <AppHeader />
        <OptionsHeader />
        <OptionsList features={options} updateFeature={this.updateFeature}/>
        <CartHeader />
        <Cart state={state} />
        <CartTotal state={state} />
      </div>
    );
  }
}

export default App;  