import { createContext, useReducer } from "react";
import storage from "../storage";
import { reducer } from "./reducer";


const context = createContext()

const initialState = {
    places: [],
    current: {},
    user: {},
    notifications: []
}




export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const initApp = () => {
        dispatch({type: 'INIT_APP', })
    }

    const addPlace = (place) => {
        dispatch({ type: 'ADD_PLACE', payload: { place } })
    }

    const editUser = (user) => {
        dispatch({ type: 'EDIT_USER', payload: { user } })
    }

    const updateNotifications = (notifications) => {
        dispatch({ type: 'UPDATE_NOTIFICATIONS', payload: { notifications } })
    }

    return <context.Provider>
        { children }
        < /context.Provider>
}