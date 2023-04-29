import "./Items.css"


const Items = ({cosmetic, addToCart, removeCart}) => {
    const { price, picture, name, id } = cosmetic;

     
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h3>Name: {name }</h3>
            <p>Price: {price}</p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <br />
            <br />
            <button onClick={()=> removeCart(id)}>Remove</button>
        </div>
    );
};

export default Items;