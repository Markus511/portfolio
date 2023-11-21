
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BookArchive from './components/Projects/BookArchiveProject';
import ListApp from './components/Projects/ListAppProject';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/project1' element={<BookArchive />} />
        <Route path='/projects/project3' element={<ListApp />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
