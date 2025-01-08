import React from 'react';
import { Routes, Route } from'react-router-dom';
import Home from './components/Home';
import CustomTable from './components/CustomTable';
import TShirtDesigner from './components/TShirtDesigner';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/custom-table" element={<CustomTable />} />
            <Route path="/tshirt-designer" element={<TShirtDesigner />} />
        </Routes>
    );
}

export default AppRoutes;