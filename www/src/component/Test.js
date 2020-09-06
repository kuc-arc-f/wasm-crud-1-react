import React from 'react'
import * as wasm from "wasm-crud-1";
//
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''}
  }  
  componentDidMount(){
    wasm.greet();
  }
  render(){
    return(
      <div>
        <h1>test</h1>
        <h2>welcome, test2</h2>
      </div>
    )
  }
}

export default Test;

