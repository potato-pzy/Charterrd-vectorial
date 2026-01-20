import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import WhoAreWeSection from './components/WhoAreWeSection'
import CareersSection from './components/CareersSection'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoareewe" element={<WhoAreWeSection />} />
        <Route path="/careers" element={<CareersSection />} />
      </Routes>
    </Router>
  )
}

export default App
