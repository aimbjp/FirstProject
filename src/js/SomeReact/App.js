
import ListGr from './ListGr.js';

function App() {

    return (
        React.createElement(React.Fragment, null, 
            React.createElement("li", {
                id: "6"
              }, 
                React.createElement("legend", {
                    for: "6"
                }, "add"), 
                
                React.createElement("input", {
                    type: "text"
                  })
                ),
            React.createElement(ListGr, null)
        ) 
    )
}

export default App;