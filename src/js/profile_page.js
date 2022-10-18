const e = React.createElement;

class SaveBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { saved: false };
    }

    render() {
        if (this.state.saved) {

            return (e(
                'p',
                { onClick : setTimeout( () => this.setState({ saved: false }), 1000 ) },
                'Сохранилось'
                )
            );
        }

        return e(
            'button',
            { onClick:  () => this.setState({ saved: true })},
            'Сохранить'
        );
    }
}

const domContainer = document.querySelector(
    '#save'
)
ReactDOM.render(e(SaveBtn), domContainer)



// auto-resize textarea 

const textarea = document.querySelectorAll('textarea')

function inp (props) {
    props.addEventListener('input', () => {
        props.style.height = "auto";
        props.style.height = props.scrollHeight + 'px';
    });
}

textarea.forEach( item => inp(item));



