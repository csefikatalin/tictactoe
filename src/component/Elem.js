export default function Elem(props) {
  
    function kivalaszt() {
        console.log(props.blocked);
        if (props.blocked) {
          
            console.log(props.blocked);
            console.log(props.index);
            console.log(props.adat);
            props.kivalaszt(props.index);
        }
    }
    return (
        <div className="elem" onClick={kivalaszt}>
            <p>{props.adat}</p>
        </div>
    );
}
