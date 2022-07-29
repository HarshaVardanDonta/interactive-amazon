export default function Product(props){
    return(
        <>
            <div className="Product2">
                <img src={props.img} alt="product"/>
                <div className="text">
                    {props.name}    
                </div>
            </div>
        </>
    );
}