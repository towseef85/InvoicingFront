import { createContext, useReducer } from "react"

export const ApiContext = createContext()

export const customerReducer=(state,action)=>{
    switch(action.type){
        case "GET_CUSTOMERS":
            return{...state,customers:action.payload}
        case "POST_CUSTOMER":
            return{...state,customers:[...state.customers, action.payload]}
    }
}

export const countryReducer=(state,action)=>{
    switch(action.type){
        case "GET_COUNTRIES":
            return{...state, countries:action.payload}
        case "POST_COUNTRY":
            return {...state, countries:[...state.countries, action.payload]}
    }
}

export const cityReducer=(state,action)=>{
    switch(action.type){
        case "GET_CITIES":
            return{...state, cities:action.payload}
        case "POST_CITY":
            return {...state, cities:[...state.cities, action.payload]}
    }
}

export const inventoryItemReducer=(state,action)=>{
    switch(action.type){
        case "GET_INVENTORYITEMS":
            return{...state, inventoryItems:action.payload}
        case "POST_INVENTORYITEM":
            return {...state, inventoryItems:[...state.inventoryItems, action.payload]}
    }
}

export const invoiceItemReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ITEMS":
            return{...state, items:[...state.items, action.payload]}
        case "DELETE_ITEMS":
            return{...state, items:action.payload}
        
    }
}

export function ApiContextProvider({children}){

const [customerState, customerdispatch]= useReducer(customerReducer,{
    customers:[]
})    

const [countryState, countrydispatch]= useReducer(countryReducer,{
    countries:[]
})

const [cityState, citydispatch] = useReducer(cityReducer,{
    cities:[]
})

const [inventoryItemState, inventoryitemdispatch]= useReducer(inventoryItemReducer,{
    inventoryItems:[]
})
const [InvoiceItemState, invoiceItemdispatch] = useReducer(invoiceItemReducer,{
    items:[]
})
    return <ApiContext.Provider value={{
        ...customerState, customerdispatch,
        ...countryState, countrydispatch,
        ...cityState, citydispatch,
        ...inventoryItemState, inventoryitemdispatch,
        ...InvoiceItemState, invoiceItemdispatch
    }}>
        {children}
    </ApiContext.Provider>
}