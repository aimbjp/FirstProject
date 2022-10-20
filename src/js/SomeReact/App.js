//import ListGr from './ListGr.js'
// import { useEffect, useRef, useState } from 'react'; 


function App() { 
    let arr = ['Спортсмены', 'Одногруппники', 'Мой любимый класс', 'Коллеги', 'Aplles fan']; 
    const [state, setState] = React.useState([...arr]); 
    const ref = React.useRef(); 
    React.useEffect(() => { 
      arr.forEach((el, index) => { 
        window.localStorage.setItem(index, el); 
      }) 
    }, []) 
    const addNewBlock = (index) => { 
      if (ref.current.value) { 
        setState([...state, ref.current.value]); 
        window.localStorage.setItem(index, ref.current.value); 
        ref.current.value = null;
      } 
   
    } 
    return React.createElement( React.Fragment, null,
        
        state.map((el, idx) => {
          return    React.createElement( React.Fragment, null,
            React.createElement(
              "li",
              {
                id: `${idx}`
              },
                React.createElement(
                "legend",
                {
                  className: "leg-lobby",
                  for: `${idx}`
                },
                el
              ),
                React.createElement("a", {
                href: "../html/group.html",
                className: "a-group"
              })
            )
          );
        }),
        React.createElement("li", {
            id: "-1"
          }, 
            React.createElement("a", 
            {
                style: {
                display: "grid",
                alignItems: "center",
                justifyItems: "center"
              }
              // how to add styles
            }, 
              React.createElement("input",
            {
                ref: ref,
                type: "text",
                style:{
                width: "50%",
                background: "none",
                height: "3vh",
                fontSize: "1.2em",
                width: "80%",
                borderRadius: "10px",
                color: "white"
              }
            }
            ),
            React.createElement("button",
            {
              onClick: () => {
                addNewBlock(state.length + 1);
              },
              type: "button",
              style: {
                background: "none",
                border: "none",
                cursor: "pointer"
              }
            },
            "Click to add"
            )), 
            )
        // React.createElement("input", {
        //   ref: ref
        // }),
        // React.createElement(
        //   "button",
        //   {
        //     onClick: () => {
        //       addNewBlock(state.length + 1);
        //     }
        //   },
        //   "click to add"
        // )
      );
  } 
   
  export default App;