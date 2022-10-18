import AddList from './AddList.js';

export default function ListGr() {

  function f () {
    // return React.render(AddList, document.getElementById('cell_group1'));
  }
  return (
    React.createElement(React.Fragment, null, 
      React.createElement("li", {
        id: "0"
      }, 
        React.createElement("a", 
        {
          onClick: f,
          style: {
            display: "grid",
            alignItems: "center",
            justifyItems: "center"
          }
          // how to add styles
        }, 
          React.createElement("input",
        {
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
          type: "button",
          style: {
            background: "none",
            border: "none",
            cursor: "pointer"
          }
        },
        "Click to add"
        )), 
        ),
      React.createElement("li", {
      id: "1"
    }, 
      React.createElement("legend", {
          for: "1"
      }, "Спортсмены"), 
      React.createElement("a", {
          href: "../html/group.html"
      })), 
    React.createElement("li", {
      id: "2"
    }, 
      React.createElement("legend", {
          for: "2"
      }, "Одногруппники"), 
      React.createElement("a", {
          href: "../html/group.html"
      })), 
    React.createElement("li", {
      id: "3"
    }, 
      React.createElement("legend", {
          for: "3"
      }, "Мой любимый класс"), 
      React.createElement("a", {
          href: "../html/group.html"
      })), 
    React.createElement("li", {
      id: "4"
    }, 
      React.createElement("legend", {
          for: "4"
      }, "Коллеги"), 
      React.createElement("a", {
          href: "../html/group.html"
      })), 
    React.createElement("li", {
      id: "5"
    }, 
      React.createElement("legend", {
          for: "5"
      }, "Aplle's fan"), 
      React.createElement("a", {
          href: "../html/group.html"
      })),
    )
  )
}
