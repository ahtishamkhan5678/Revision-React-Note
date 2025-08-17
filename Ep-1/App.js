


// const heading = React.createElement("h1", {
//     id: "heading",
//     test: "testing user"
// }, "I m from React");

// console.log("heading", heading)


/*
  <div id="parent">  
        <div id = "child"> 
            <h1>Hell Adil</h1>
            <h2> Hell Ahtisham</h2>
        </div>
  </div>
    

*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",
    {
        id: "parent"
    },
    [
        React.createElement("div", {
            id: "child"
        },
            [
                React.createElement("h1", {}, "Hi im h1"),
                React.createElement("h2", {}, "Hi im h2")
            ]
        ),
        React.createElement("div", {
            id: "child"
        },
            [
                React.createElement("h1", {}, "Hi Ahtisham How are u"),
                React.createElement("h2", {}, "Hi im h2")
            ]
        )
    ]

)

const root = ReactDOM.createRoot(document.getElementById("adil"));
root.render(parent);