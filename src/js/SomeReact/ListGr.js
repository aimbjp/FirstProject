import AddList from './AddList.js';

export default function ListGr() {
  return (
    React.createElement(React.Fragment, null, 
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
      })))
  )
}
