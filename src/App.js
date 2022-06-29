import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import "./App.css"

const showDate = () => {
  const {format} = require('date-fns');
  //today's date
  const today =format(new Date(),'dd.MM.yyyy HH:mm');
  return (today);
}

function App() {
  return (
    <div id="general">
    <div id="header" style={{backgroundColor: "black", width: "100%", height: "50px", color: 'white', display: "flex", flexDirection: "row", alignItems: "center", justifyContent:'space-between'}}>
      <div style={{width: "100px", marginLeft: "10px"}}>
        <img style={{width: "40%", height: "90%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="logo"/>
      </div>
      <div id="date" style={{marginRight: "10px"}}>{showDate()}</div>
    </div>
    <div id="main">
      <div style={{
        width: "100%", 
        height: "100%",
        color: "black",
        display: "flex",
        fontSize: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundImage: `url("https://source.unsplash.com/gYl-UtwNg_I/1500x1500")`,
        }}><h1 style={{}}>hey</h1>
        </div>
        <div style={{
        width: "100%", 
        height: "100%",
        color: "black",
        display: "flex",
        fontSize: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundImage: `url("https://source.unsplash.com/rFKUFzjPYiQ/1500x1500")`
        }}><h1 style={{}}>let's</h1>
        </div>
        <div style={{
        width: "100%", 
        height: "100%",
        color: "black",
        display: "flex",
        fontSize: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundImage: `url("https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d")`
        }}><h1 style={{}}>give</h1>
        </div>
        <div style={{
        width: "100%", 
        height: "100%",
        color: "black",
        display: "flex",
        fontSize: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundImage: `url("https://source.unsplash.com/ITjiVXcwVng/1500x1500")`
        }}><h1 style={{}}>all</h1>
        </div>
        <div style={{
        width: "100%", 
        height: "100%",
        color: "black",
        display: "flex",
        fontSize: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundImage: `url("https://source.unsplash.com/3MNzGlQM7qs/1500x1500")`
        }}><h1 style={{}}>you can</h1>
        </div>
    </div>
    </div>
  );
}

export default App;
