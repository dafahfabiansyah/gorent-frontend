import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailOffice from './pages/DetailOffice'
import BookingOffice from './pages/BookingOffice'
import DetailCity from './pages/DetailCity'
import BookingSuccess from './pages/BookingSuccess'
import BookingStatus from './pages/BookingStatus'

function App() {


  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home />} key=''/>
        <Route path='/office/:slug' element={<DetailOffice />} key=''/>
        <Route path='/office/:slug/book' element={<BookingOffice />} key=''/>
        <Route path='/city/:slug' element={<DetailCity />} key=''/>
        <Route path='/success-booking' element={<BookingSuccess />} key=''/>
        <Route path='/booking-status' element={<BookingStatus />} key=''/>
      </Routes>
   </Router>
  )
}

export default App
