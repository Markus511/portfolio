
import './index.scss';
const About = () => {
    return (
    <div className="container about-page">
        <div className='text'>
        <h1>I'm Markus Ryynänen <br /> IT student at Savonia University of Applied Sciences.</h1>
        <h2>I have experience with technologies such as JavaScript, React, Node.js, React Native, SQL, and a little bit of MongoDB, C#, and Java. 

        </h2>
        </div>
        <div className="portfolio-info">
        <p>View the code of this portfolio</p>
        <button className="btn">To Github</button> 
        </div>
    </div>
    );
}

export default About;