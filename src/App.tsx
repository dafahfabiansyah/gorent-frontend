import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailOffice from './pages/DetailOffice'
import BookingOffice from './pages/BookingOffice'
import DetailCity from './pages/DetailCity'
import BookingSuccess from './pages/BookingSuccess'
import BookingStatus from './pages/BookingStatus'
import BrowseOffice from './pages/BrowseOffice'

function App() {


  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/all' element={<BrowseOffice />}/>
        <Route path='/office/:slug' element={<DetailOffice />}/>
        <Route path='/office/:slug/book' element={<BookingOffice />}/>
        <Route path='/city/:slug' element={<DetailCity />}/>
        <Route path='/success-booking' element={<BookingSuccess />}/>
        <Route path='/booking-status' element={<BookingStatus />}/>
      </Routes>
   </Router>
  )
}

export default App
