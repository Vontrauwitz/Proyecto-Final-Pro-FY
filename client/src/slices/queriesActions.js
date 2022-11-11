import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQueries = createAsyncThunk('queries/getQueries', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/queries')
        const data = response.data.data.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
        })
        return data
    } catch (error) {
        return error.message
    }        
})

export const postQuery = createAsyncThunk('queries/postQuery', async (newQuery) => {
    try {
        const response = axios.post('http://localhost:3001/api/queries', newQuery)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putQuery = createAsyncThunk('queries/putQuery', async (id, query) => {
    try {
        const response = axios.put(`http://localhost:3001/api/queries/${id}`, query)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteQuery = createAsyncThunk('queries/deleteQuery', async (id) => {
    try {
        const response = axios.delete(`http://localhost:3001/api/queries/${id}`)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})