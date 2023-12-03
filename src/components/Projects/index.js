import './index.scss';
import books from '../../assets/images/old-books.WebP';
import web from '../../assets/images/web.WebP';
import phone from '../../assets/images/phone.WebP';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();

    const projectsData = [
        {
            title: 'Small web projects',
            backgroundImage: web,
            technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
            link: 'https://codepen.io/MarkusR/full/pojJGxr',
        },
        {
            title: 'Book archive',
            backgroundImage: books,
            technologies: ['HTML', 'CSS', 'REACT', 'NODE', 'MONGODB'],
            link: '/projects/project1',
        },
        {
            title: 'Mobile App',
            backgroundImage: phone,
            technologies: ['REACT NATIVE', 'SQLITE', 'ANDROID STUDIO'],
            link: '/projects/project3',
        },
    ];

    const ProjectCard = ({ title, backgroundImage, technologies, link, navigateTo }) => (
        <div className='card'>
            <div className='pic-container'>
                <div className='pic' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            </div>
            <div className='text'>
                <h2>{title}</h2>
                <br />
                <div className='tech-container'>
                    {technologies.map((tech, index) => (
                        <p key={index} className='tech-item'>{tech}</p>
                    ))}
                </div>
                {link.startsWith('http') ? (
                    <button className='link' onClick={() => window.open(link, '_blank')}>Open project</button>
                ) : (
                    <button className='link' onClick={() => navigateTo(link)}>Open project</button>
                )}
            </div>
        </div>
    );

    return (
        <div className='container projects-page'>
            <h1>My projects</h1>
            <div className='projects'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} navigateTo={navigate} />
                ))}
            </div>
        </div>
    );
};

export default Projects;