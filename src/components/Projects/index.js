import './index.scss';
import books from '../../assets/images/old-books.jpg';
import chrome from '../../assets/images/chrome.jpg';
import Logo from '../../assets/images/logo4.png';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();

    return (
        <div className='container projects-page'>
             <h1>Projects</h1>
            <div className='projects'>
            <div className='card item1'>
                <div className='pic-container'>
                <div className='pic' style={{backgroundImage: `url(${chrome})`}}></div>
                </div>
                <div className='text'>
                    <h2>Small web projects</h2>
                    <br/>
                    <div className='tech-container'>
                        <p className='tech-item'>HTML</p>
                        <p className='tech-item'>CSS</p>
                        <p className='tech-item'>JavaScript</p>
                    </div>
                    <button className='link' onClick={() => window.open('https://github.com/Markus511/small_web_projects', '_blank')}>View in GitHub</button>
                    <button className='link' onClick={() => window.open('https://codepen.io/MarkusR/full/pojJGxr', '_blank')}>View demo</button>
                </div>
            </div>

            <div className='card item2'>
            <div className='pic-container'>
                <div className='pic' style={{backgroundImage: `url(${books})`}}></div>
                </div>
                <div className='text'>
                    <h2>Book archive</h2>
                    <br/>
                    <div className='tech-container'>
                        <p className='tech-item'>HTML</p>
                        <p className='tech-item'>CSS</p>
                        <p className='tech-item'>JavaScript</p>
                    </div>
                    <button className='link' onClick={() => window.open('https://github.com/Markus511/', '_blank')}>View in GitHub</button>
                    <button className='link' onClick={() => navigate('/projects/project1')}>View demo</button>
                </div>
            </div>

            <div className='card item3'>
            <div className='pic-container'>
                <div className='pic' style={{backgroundImage: `url(${chrome})`}}></div>
                </div>
                <div className='text'>
                    <h2>Mobile App</h2>
                    <br/>
                    <div className='tech-container'>
                        <p className='tech-item'>HTML</p>
                        <p className='tech-item'>CSS</p>
                        <p className='tech-item'>JavaScript</p>
                    </div>
                    <button disabled={true} className='link' onClick={() => window.open('https://github.com/Markus511/', '_blank')}>View in GitHub</button>
                    <button disabled={true} className='link' onClick={() => navigate('/projects/project3')}>View demo</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;