import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
 
class ProductSearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value="SearchText"
          name="searchProduct"/>
 
        <div className="searchCheckDiv">
          <input
            type="checkbox"
            checked="true"
            name="hasStock"
            style={{display: 'inline'}}/>
 
          &nbsp; &nbsp;
          <p style={{display: 'inline'}}>
            Only show products in stock.
          </p>
        </div>
        <br/>
      </div>
    )
  }
}
export default ProductSearchBar;