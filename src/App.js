import React, {useState} from 'react';
import './App.css';

function App() {

  const products = [
    {name: "Photoshop", price: "$90.67"},
    {name: "Illustrator", price: "$60.99"},
    {name: "PDF Reader", price: "$6.99"}
  ]

  return (
    <div className="App">
      <Person name = "Md. Sabbir Hosen" job = "Software Engineer" company = "Amazon" ></Person>
      <Counter></Counter>
      {
        products.map(product => <Products product = {product}></Products>)
      }
    </div>
  );
}

function Person(props) {
  let personStyle = {
    border: "2px solid green",
    padding: "5px",
    margin: "10px 25% 10px 25%",
    backgroundColor: "yellow",
    width: "50%",
  }

  return (
    <div className="person-box" style = {personStyle}>
      <h1 className="person-name"> {props.name} </h1>
      <h2 className="person-job"> {props.job} </h2>
      <h2 className="company-name"> {props.company} </h2>
    </div>
  );
}

function Products(props) {

  let productStyle = {
    border: "2px solid gray",
    margin: "10px",
    padding: "15px",
    height: "10%",
    width: "25%",
    float: "left",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#f0ebf2"
  }
  return (
    <div className="products-container" style = {productStyle}>
      <h2>{props.product.name}</h2>
      <h4>Price: {props.product.price}</h4>
      <button className= "product-button" style = {{backgroundColor: "#58aee0", height: "35px", width: "90px", border: "1px", borderRadius: "5px"}}>Buy Now</button>
    </div>
  )
}

function Counter () {
  const [count, setCount] = useState(10);
  let IncreaseButtonStyle = {
    height: "40px",
    width: "100px",
    backgroundColor: "#4cf5ae",
    color: "black",
    margin: "10px",
    padding: "5px",
    border: "1px solid black",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }

  let DecreaseButtonStyle = {
    height: "40px",
    width: "100px",
    backgroundColor: "#fc609c",
    color: "black",
    margin: "10px",
    padding: "5px",
    border: "1px solid black",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }
  return (
    <div className="counter-container">
      <h1>Count: {count} </h1>
      <button className="increase-button" style = {IncreaseButtonStyle} onClick = {() => setCount(count + 1)}>Increase</button>
      <button className="decrease-button" style = {DecreaseButtonStyle} onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
