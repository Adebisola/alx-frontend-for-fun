const List = () => {
    return (
        <div>
            <ol>
                <li>Mango</li>
                <li>Banana</li>
                <li>Orange</li>
            </ol>
    
        </div>
    )
};


const Fruits = (props) => {
    return (
        <div>
            <p>color of the fruit is {props.color}</p>
            <List />
        </div>
        
    )
    
};


class Money extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h1>currencies</h1>
                <Dollar />
                <Pounds />
            </div>
        )
    }
}

const test = (<div id='sample'>
    <h1>welcome to React!</h1>
</div>)
ReactDOM.render(<h1>welcome to React!</h1>, document.getElementById("sample"));

const sample = () => {
    return (
        <div id="id02">
            <p>Welcome to react!</p>
        </div>
    )
};
ReactDOM.render(<sample />, document.getElementById("id02"))