export default function Product(props){
    return(
        <>
            <div className="Product3">
                <img src={props.img} alt="product"/>
                <div className="text">
                    {props.name}    
                </div>
            </div>
        </>
    );
}