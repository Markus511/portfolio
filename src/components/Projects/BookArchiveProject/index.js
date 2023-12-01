
import demo from '../../../assets/images/demo_converted.gif';
import './index.scss';
import { useState } from "react";

const BookArchive = () => {

    const [showDemo, setShowDemo] = useState(false);


    return (
        <div className='container bookarchive-page'>
            <h1>Book archive project</h1>
        
            <div className="text-container">
            <h2>The web application is designed specifically for collectors of vintage books.
            With our platform, you can easily browse and discover books that belong to specific series.</h2>
            <p>I was responsible for developing the frontend for the Oma Kirjasto and Sarjat pages.
            In addition, I participated in backend development and worked on integrating the frontend and
            backend through a REST API. This was a school project, and we completed it in a four-person team, using agile methods throughout the project.
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
                <li>Frontend: React</li>
                <li>Backend: Node</li>
                <li>Database: MongoDB</li>
                <li>Unit testing: Jest</li>
                <li>Version control: Azure DevOps</li>
                <li>Project management: Scrum</li>
            </ul>
            </div>
            </div>
            : null
            }
          

        </div>
    )
}

export default BookArchive;