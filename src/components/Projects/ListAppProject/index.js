
import demo from '../../../assets/images/listApp_demo.gif';
import './index.scss';
import { useState } from "react";

const ListApp = () => {

    const [showDemo, setShowDemo] = useState(false);


    return (
        <div className='container listapp-page'>
            <h1>ListApp project</h1>
        
            <div className="text-container">
            <h2>The mobile application for Android devices allows users to add and remove items from a list.</h2>
            <p>I developed the following features: adding data to the device database, removing data from the device database, rendering data from the device database to the UI, and implementing swiping actions for deleting items.
            </p>
            </div>
        
            <div className="btn-container">
            {
              showDemo ? <button className="btn" onClick={() => setShowDemo(false)}>Hide demo</button> 
              : <button className="btn" onClick={() => setShowDemo(true)}>Show demo</button> 
            }
            </div>
            {
                showDemo ?
            <div className="demo-container">
            <img src={demo} alt='demo' />
            <div className="ul-container">
            <ul>
                <li>Frontend: React Native</li>
                <li>Database: SqLite</li>
            </ul>
            </div>
            </div>
            : null
            }
          

        </div>
    )
}

export default ListApp;