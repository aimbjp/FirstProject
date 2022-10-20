// import React from 'react';
// import ReactDOM from 'react-dom';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { saved: false };
    }

    render() {
        if (this.state.saved) {
            return (e(
                'span',
                { 
                    onClick : () => this.setState({ saved: false }),
                    style: {
                        cursor: 'pointer',
                        fontSize: '30px',
                        textAlign: 'end',
                        color: 'red'
                    }
                },
                '\u2665'
                )
            );
        }
        return e(
            'span',
            { 
                onClick:  () => this.setState({ saved: true }),
                style: {
                    cursor: 'pointer',
                    fontSize: '25px',
                    color: 'white'
                }
            },
            '\u2661'
        );
    }
}


ReactDOM.render(e(LikeButton),document.querySelector('.like'))