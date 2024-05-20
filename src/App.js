import { AuthManager } from './context/AuthConext';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AuthManager>
      <main>
        <Navabar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </main>
    </AuthManager>
  );
}

export default App;
  