import './App.css';

function App() {

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  let personStyle = {
    border: "2px solid green",
    padding: "5px",
    margin: "10px",
    backgroundColor: "yellow",
    width: "40%"
  }
  const person = {
    name: "Md. Sabbir Hosen",
    job: "Software Engineer",
    company: "Amazon"
  }
  return (
    <div className="person-box" style = {personStyle}>
      <h1 className="person-name"> {person.name} </h1>
      <h2 className="person-job"> {person.job} </h2>
      <h2 className="company-name"> {person.company} </h2>
    </div>
  );
}

export default App;
