import { useParams } from "react-router-dom";
import demo from '../../assets/images/demo_converted.gif';
import './index.scss';
import { useState } from "react";

const ProjectInfo = () => {

    const [showDemo, setShowDemo] = useState(false);


    return (
        <div className='container projectsInfo-page'>
            <h1>Book archive project</h1>
            <h2>Web application is designed specifically for collectors of vintage books.
            With our platform, you can easily browse and discover books that belong to specific series.</h2>
            {
              showDemo ? <button onClick={() => setShowDemo(false)}>Hide demo</button> 
              : <button onClick={() => setShowDemo(true)}>Show demo</button> 
            }
            {
                showDemo ?
            <div className="demo-container">
            <p><i>I was responsible for developing the frontend for the Oma Kirjasto and Sarjat pages.
            In addition, I participated in backend development and worked on integrating the frontend and backend through a REST API.
            </i></p>
            <img src={demo} alt='demo' />
            </div>
            : null
            }
          

        </div>
    )
}

export default ProjectInfo;