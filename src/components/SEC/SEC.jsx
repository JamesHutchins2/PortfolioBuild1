//import 
import React from 'react';
import './sec.css';
import {useState} from 'react';
import Navbar from '../navbar/navbar';
import diagram from '../../assets/sec.png';
const SEC =  () => {
    return(
        <div className = "modal">
            <Navbar/>
            <div className = "modal-content">
                <h1>SEC</h1>
                <br />
                <br />
                <div className='archetecture'>
                <div className='text'>
                    <p className='h'>In this Figure I outline the general architecture of the data system. This is simply the Analysis setup, and it does not include the front end interaction component of the program.
                    The front end application Will be implemented using the layed out program as an API reference. This will be done using Express and react JS.</p>
                </div>
                <div className='image'>
                    <img src={diagram} alt="logo" className='diag' />
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SEC;