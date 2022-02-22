import axios from 'axios';
import {message} from 'antd'

axios.defaults.baseURL = 'http://localhost:5000/api/';

const customers={
    list:(customerdispatch)=> axios.get('Customer').then(res=>
        customerdispatch({type:"GET_CUSTOMERS", payload: res.data})
        ),
    create:(customerdispatch,data)=>axios.post("Customer",data)
        .then(res=>{
            if(res.status == 200){
                customerdispatch({type:'POST_CUSTOMER', payload:data})
                message.success("Customer was added Successfully")
            }
        }).catch(error=>{
            message.error(error.res.data.error)
        })
}

const country ={
    list:(countrydispatch)=> axios.get('Country').then(res=> countrydispatch({type:"GET_COUNTRIES", payload:res.data})),
    create:(countrydispatch,data)=>axios.post('Country',data).then(res=>{
        if(res.status == 200){
            countrydispatch({type:'POST_COUNTRY', payload:data})
            message.success("Country Added Successfully")
        }
    }).catch(error=>{
        message.success(error.res.data.error)
    })
}

const city={
    list:(citydispatch)=>axios.get('City').then(res=> citydispatch({type:'GET_CITIES', payload:res.data})),
    create:(citydispatch,data)=>axios.post('City',data).then(res=>{
        if(res.status == 200){
            citydispatch({type:'POST_CITY', payload:data})
            message.success('City Added Successfully')
        }
    }).catch(error=>{
        message.success(error.res.data.error)
    })

}

const InventoryItems={
    list:(inventoryitemdispatch)=>axios.get('InventoryItems').then(res=> inventoryitemdispatch({type:'GET_INVENTORYITEMS', payload:res.data})),
    create:(inventoryitemdispatch,data)=>axios.post('InventoryItems',data).then(res=>{
        if(res.status == 200){
            inventoryitemdispatch({type:'POST_INVENTORYITEM', payload:data})
            message.success('Inventory Item added successfully')
        }
    }).catch(error=>{
        message.success(error.res.data.error)
    })
}

export const Items = {
    add: (invoiceItemdispatch, data)=> invoiceItemdispatch({type:'ADD_ITEMS', payload:data}),
    delete: (invoiceItemdispatch, data)=> invoiceItemdispatch({type:'DELETE_ITEMS', payload:data})
   
    
}

const apis={
    customers,
    country,
    city,
    InventoryItems,
    Items
}

export default apis;