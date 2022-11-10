import React, { Component } from 'react'

export class List extends Component {
  render() {
    return (
      <>
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Type
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/">Resturants</a></li>
        <li><a className="dropdown-item" href="/">Hotels</a></li>
        <li><a className="dropdown-item" href="/">Attractions</a></li>
      </ul>
    </div>
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Rating
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/">All</a></li>
      <li><a className="dropdown-item" href="/">Above 3.0</a></li>
      <li><a className="dropdown-item" href="/">Above 4.0</a></li>
      <li><a className="dropdown-item" href="/">Above 4.5</a></li>
    </ul>
  </div>
  </>
    )
  }
}

export default List