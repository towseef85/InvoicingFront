import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/home/Dashboard'
import Login from './pages/users/Login'
import InventoryList from './pages/inventory/InventoryList'
import AddInventory from './pages/inventory/AddInventory'
import Countries from './pages/settings/countries/Countries'
import AddCountry from './pages/settings/countries/AddCountry'
import Cities from './pages/settings/cities/Cities'
import AddCity from './pages/settings/cities/AddCity'
import InvoiceList from './pages/sales/invoice/InvoiceList'
import AddInvoice from './pages/sales/invoice/AddInvoice'
import CustomersList from './pages/customers/CustomersList'
import AddCustomer from './pages/customers/AddCustomer'

export default function Routers() {
  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route  element={<MainLayout/>}>
    <Route path='home' element={<Dashboard/>}/>
    <Route path='inventory' element={<InventoryList/>}/>
        <Route path='addinventory' element={<AddInventory/>}/>
        <Route path='countries' element={<Countries/>}/>
        <Route path='addcountry' element={<AddCountry/>}/>
        <Route path='cities' element={<Cities/>}/>
        <Route path='addcity' element={<AddCity/>}/>
        <Route path='invoice' element={<InvoiceList/>}/>
        <Route path='addinvoice' element={<AddInvoice/>}/>
        <Route path='customers' element={<CustomersList/>}/>
        <Route path='addcustomer' element={<AddCustomer/>}/>
    </Route>
    </Routes>
  )
}
