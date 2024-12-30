import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Landing from './components/Landing'
import Main from './components/Main.jsx'
import ViewBook from "./components/ViewBook.jsx";
import ViewCheckOut from "./components/ViewCheckOut.jsx";
import {PurchaseProvider} from "./context/PurchaseContext.jsx";
function App() {

    return (
        <PurchaseProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/main" element={<Main/>} />
                <Route path="/book/:title" element={<ViewBook/>} />
                <Route path="/compra" element={<ViewCheckOut/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
        </PurchaseProvider>
    )
}

export default App

