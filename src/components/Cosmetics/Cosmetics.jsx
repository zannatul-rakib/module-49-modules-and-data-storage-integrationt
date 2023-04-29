import { useEffect, useState } from 'react';
import Items from '../Items/Items';
import { removeFromDb, storageDb } from '../../utilites/storage';
import { getTotal } from '../../utilites/info';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState({});

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=> setCosmetics(data))
    }, [])
    
    const addToCart = (id) => {
        storageDb(id)
    }

    const removeCart = id => {
        removeFromDb(id)
    }

    const total = getTotal(cosmetics);
    return (
        <div>
            <h2>Cosmetics: {cosmetics.length}</h2>
            <p>Total Price: { total}</p>
           <div className='grid'>
                {
                    cosmetics.map(cosmetic => <Items key={cosmetic.id} addToCart={addToCart} cosmetic={cosmetic}
                    removeCart={removeCart}
                    ></Items>)
               }
            </div>
        </div>
    );
};

export default Cosmetics;