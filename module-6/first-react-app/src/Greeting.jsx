export function Greeting(props) {
    return (
    (<h2>Hello {props.name ? props.name : 'World'}</h2>)
    )
};