import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class LeftNav extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: 'Kategori1' },
      { categoryId: 2, categoryName: 'Kategori2' },
      { categoryId: 3, categoryName: 'Kategori3' },
      { categoryId: 4, categoryName: 'Kategori4' },
    ],
    currentCategory: '',
  }

  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() =>
                this.setState({ currentCategory: category.categoryName })
              }
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    )
  }
}
