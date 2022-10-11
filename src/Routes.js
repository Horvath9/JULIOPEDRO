import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import VendaAcai from './pages/VendaAcai'
import Sorveteria from './pages/Sorveteria'
import Signo from './pages/Signo'
import SalarioLiquido from './pages/SalarioLiquido'
import Viagem from './pages/VIagem'
import Febre from './pages/Febre'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/VendaAcai' element={<VendaAcai/>}></Route>
                <Route path='/Sorveteria' element={<Sorveteria/>}></Route>
                <Route path='/Signo' element={<Signo/>}></Route>
                <Route path='/SalarioLiquido' element={<SalarioLiquido/>}></Route>
                <Route path='/VIagem' element={<Viagem/>}></Route>
                <Route path='/febre' element={<Febre/>}></Route>
            </Routes>
        
        </BrowserRouter>
    );
}