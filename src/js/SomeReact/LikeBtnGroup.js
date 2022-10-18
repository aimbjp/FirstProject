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
                'p',
                { onClick : () => this.setState({ saved: false }) },
                'Лайнуто'
                )
            );
        }
        return e(
            'p',
            { onClick:  () => this.setState({ saved: true })},
            'Лайк'
        );
    }
}


ReactDOM.render(e(LikeButton),document.querySelector('.like'))