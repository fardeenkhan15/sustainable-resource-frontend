import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ResourceList from './components/ResourceList';
import AddResource from './components/AddResource';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Resource Management Dashboard</h1>
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
