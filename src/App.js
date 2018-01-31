import React, { Component } from 'react';
import './style/App.css';
import Categories from './components/Categories';
import * as SattuApi from './utils/api'

class App extends Component {
  state = {
    categories:[]
  }
  componentDidMount(){
    SattuApi.getCategories().then((categories) => {
      this.setState({categories})
      console.table(categories)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Sattu</h1>
        <Categories/>
        {/*Display the categories*/}
        {/*Display the posts*/}
        {/*Have an option to create new post*/}
      </div>
    );
  }
}
/*connect*/
/*mapSateToProps*/
/*mapDespatchToProps*/
export default App;
