import { useEffect, useState } from 'react';
import Items from '../Items/Items';
import { removeFromDb, storageDb } from '../../utilites/storage';

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
    return (
        <div>
            <h2>Cosmetics: { cosmetics.length}</h2>
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