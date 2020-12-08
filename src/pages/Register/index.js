import React, {useState} from 'react';
//import {Link, useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import api from '../../services/api';

export default function RegisterDrink () {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState('');

    //const history = useHistory();

    async function handleNewIncident (e) {
        e.preventDefault();                      

        console.log(picture);

        // TODO: also validate on the backend
        if (!name || !description || !price || !picture){
            alert('all fields are mandatory');
            return false;
        }

        //multer needs formData
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('picture', picture);
                
        try {
            await api.post(
                'drinks',                 
                formData,
                {
                    headers: {
                        //Authorization: localStorage.getItem('id'),
                        // adding this requires multer..
                        'content-type': 'multipart/form-data'
                    }
            }).then((response)=>{
                console.log(response.data.id);
            })
            //history.push('/profile');
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div className="container">            
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Register drink</h1>
                </div>
                <div class="col-12">
                    <form>                    
                        <div className="form-group">
                            <label forHtml="exampleFormControlInput1">
                                name
                            </label>
                            <input                            
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="form-control"
                            />
                        </div>                        
                        <div className="form-group">
                            <label forHtml="description">
                                description
                            </label>
                            <textarea className="form-control" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <label forHtml="price">
                                average price
                            </label>
                            <input                             
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="file"
                                name="picture"
                                onChange={e => setPicture(e.target.files[0])}                    
                                className="form-control-file"
                            />
                        </div>    
                        <button className="btn btn-success" onClick={handleNewIncident}>
                            register
                        </button>
                        <Link to="/" className="btn">
                            back
                        </Link>                        
                    </form>
                </div>        
            </div>
        </div>        
    )
}