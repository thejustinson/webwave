import Bio from './components/Bio';
import CreateYourWebWave from './components/CreateYourWebWaveLinkButton';
import Forms from './components/Forms';
import LinksContainer from './components/LinksContainer';
import Logo from './components/Logo';
import TopBar from './components/TopBar';
import './index.css'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-black w-screen h-screen fixed overflow-y-scroll pb-10 text-white md:px-16 px-8 font-Poppins">
                <Logo/>
                {/* <TopBar/>
                <Bio />
                <LinksContainer/>
                <CreateYourWebWave/> */}
                <Routes>
                    <Route path='/register' element={<Forms type='register'/>}/>
                    <Route path='/login' element={<Forms type='login'/>}/>
                    <Route path='/forgot-password' element={<Forms type='forgot-password'/>}/>
                </Routes>
            </div>
        </BrowserRouter>
     );
}
 
export default App;