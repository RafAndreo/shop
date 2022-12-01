import React, { Component } from 'react'
import Item from './Item'
export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.itmes.map(el =>(
           <Item item={el}></Item>
        ))}
      </main>
    )
  }
}

export default Items