import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import api from '../../services/api';

export default function Details () {
    let { id } = useParams();

    const[drink, setDrink] = useState([]); // will store the response from the server    
    
    // TODO: auth
    let key = 'test';    
    
    useEffect(()=>{
        api.get('details', {
            headers: {
                Authorization: key
            },
            params: {
                id: id
            }
        }).then(r => {
            setDrink(r.data);                    
        })
    },[key, id])

    return (             
            <div className="container">
                {drink.id ?
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>{drink.name}</h1>
                        </div>
                        <div className="col-12 col-sm-6">
                            <img src={`http://localhost:3333/uploads/${drink.picture}`} className="img-fluid" alt={drink.name} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <p>
                                {drink.description}
                            </p>
                            <p>
                                <strong>average price:</strong> {drink.price}€
                            </p>
                        </div>
                    </div>  
                : 
                    <div>loading..</div>  
                }
            </div>            
        )
}