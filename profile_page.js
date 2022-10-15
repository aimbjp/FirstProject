const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };

    }

    render() {
        if (this.state.liked) {

            return (e(
                'p',
                { onClick : () => this.setState({ liked: false }) },
                'Сохранилось (click)'
                )
            );
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Сохранить'
        );
    }
}

const domContainer = document.querySelector(
    '#save'
)
ReactDOM.render(e(LikeButton), domContainer)



// auto-resize textarea 

const textarea = document.querySelectorAll('textarea')

function inp (props) {
    props.addEventListener('input', () => {
        props.style.height = "auto";
        props.style.height = props.scrollHeight + 'px';
    });
}

textarea.forEach( item => inp(item));



