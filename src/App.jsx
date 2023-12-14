import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';
import { Helmet } from "react-helmet";


const App = () => {
    return(
        <main className='h-full'>
        {/* <main className='bg-slate-300/20 h-full'> */}
            <Helmet>
                <meta name="description" content='portfolio for the web developer Guillermo Bernal'/>
                <meta name="keywords" content='web developer, portfolio, Guillermo Bernal, react, three.js, frontend'/>
                {/* etiquetas para linkedin */}
                <meta property='og:title' content="Guillermo Bernal's Portfolio"/>
                <meta property='og:image' content='//assets/images/frontpage.png'/>
                <meta property='og:description' content="The Portfolio's front page, a 3D model of an astronaut floating with a moon behind"/>
                <meta property='og:url' content='//www.gbernal.dev'/>
            </Helmet>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </Router>
        </main>
    )
}

export default App