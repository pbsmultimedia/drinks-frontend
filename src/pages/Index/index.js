import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './index.scss';

export default function Wines () {

    const[drinks, setDrinks] = useState([]); // will store the response from the server    
    
    // TODO: auth
    let key = 'test';

    // similar to componentDidUpdate
    // but if we stored the result on state, updating the layout was automatic....
    useEffect(()=>{
        api.get('drinks', {
            headers: {
                Authorization: key
            }
        }).then(r => {
            setDrinks(r.data);
        })
    },[key])
    
    return (
        <div className="container-fluid">
            {/* should be a component? like wine card */}
            <div className="row drinks-list">
                <div className="col-12 text-center">
                    <h1>Drinks</h1>
                    <Link to="/register">Register drink</Link>
                </div>
                {drinks.map(drink =>(
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={drink.id}>    
                        <Link to={`/details/${drink.id}`}>
                            <div className="wrapper">
                                <div className="overlay">
                                    {drink.name}
                                </div>                           
                                {/* TODO: thumbnail generator - checkout Sharp */}
                                <div className="picture">
                                    <img src={`http://localhost:3333/uploads/${drink.picture}`} className="img-fluid" alt={drink.name} />                            
                                </div>
                            </div>
                        </Link>    
                    </div>
                ))}                
            </div>

        </div>
    )    
}