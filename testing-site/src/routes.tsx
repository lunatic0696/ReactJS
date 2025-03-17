import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage';
import FormExample from './pages/formExample';
import ErrorPage from './pages/error';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Artnoc from './pages/artnoc';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Container style={{ paddingTop:100 }}/>
        <Routes>
            <Route path='/' element={ <MainPage/> }/>
            <Route path='/form-example' element={ <FormExample/> }/>
            <Route path='/artnoc' element={ <Artnoc/> }/>

            <Route path='*' element={ <ErrorPage/> }/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;