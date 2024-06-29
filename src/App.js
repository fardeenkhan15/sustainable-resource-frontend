import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ResourceList from './components/ResourceList';
import AddResource from './components/AddResource';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/resources" element={<PrivateRoute element={ResourceList} />} />
                    <Route path="/add-resource" element={<PrivateRoute element={AddResource} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
