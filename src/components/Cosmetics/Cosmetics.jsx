import { useEffect, useState } from 'react';
import { multiply } from '../../utilites/info';
import Items from '../Items/Items';

const Cosmetics = () => {
    const play = multiply(8, 9)
    const [cosmetics, setCosmetics] = useState({});

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=> setCosmetics(data))
    },[])
    return (
        <div>
            <h2>Cosmetics: { cosmetics.length}</h2>
            <p>{play}</p>
            <div className='grid'>
                {
                    cosmetics.map(cosmetic => <Items key={cosmetic.id} cosmetic={cosmetic}></Items>)
               }
            </div>
        </div>
    );
};

export default Cosmetics;