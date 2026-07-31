import { createSlice } from "@reduxjs/toolkit";
import { NewsStatus } from "../Interfaces/newsInterface";
import { getNewsByIdThunk, getNewsThunk, createNewsThunk, updateNewsThunk, deleteNewsThunk } from "./newsThunks";




const initialState : NewsStatus  = {
    news:[],
    newById: null,
    getAllStatus: "idle",
    getByIdStatus: "idle",
    createNewStatus: "idle",
    updateNewStatus: "idle",
    deleteNewStatus: "idle",
    getAllError : undefined,
    getByIdError : undefined,
    createNewError : undefined,
    updateNewError : undefined,
    deleteNewError : undefined,
}
export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
        clearNewId (state){
            state.newById = null;
        },
    },
    extraReducers : (builder) => {
        builder
        .addCase(getNewsThunk.pending, (state) => {
            state.getAllStatus = 'pending';
        })
        .addCase(getNewsThunk.fulfilled, (state , action) => {
            state.getAllStatus = 'fulfilled';
            state.news = action.payload;
            state.getAllError = undefined;
        })
        .addCase(getNewsThunk.rejected, (state , action) => {
            state.getAllStatus = 'rejected';
            state.getAllError = action.payload;
        })
        // SLICE ID
        .addCase(getNewsByIdThunk.pending, (state) => {
            state.getByIdStatus = 'pending';
        })
        .addCase(getNewsByIdThunk.fulfilled, (state , action) => {
            state.getByIdStatus = 'fulfilled';
            state.newById = action.payload;
            state.getByIdError = undefined;
        })
        .addCase(getNewsByIdThunk.rejected, (state , action ) => {
            state.getByIdStatus = 'rejected',
            state.getByIdError = action.payload;
        })
        // SLICE CREATE
        .addCase(createNewsThunk.pending, (state) => {
            state.createNewStatus = 'pending';
        })
        .addCase(createNewsThunk.fulfilled, (state , action) => {
            state.createNewStatus = 'fulfilled';
            state.newById = action.payload;
            state.createNewError = undefined;
        })
        .addCase(createNewsThunk.rejected, (state , action) => {
            state.createNewStatus = 'rejected',
            state.createNewError = action.payload;
        })
        //SLICE UPDATE
        .addCase(updateNewsThunk.pending, (state) => {
            state.updateNewStatus = 'pending';
        })
        .addCase(updateNewsThunk.fulfilled, (state , action ) => {
            state.updateNewStatus = 'fulfilled',
            state.newById = action.payload
        })
        .addCase(updateNewsThunk.rejected, (state ,action) => {
            state.updateNewStatus = 'rejected',
            state.updateNewError = action.payload
        })
        // SLICE DELETE
        .addCase(deleteNewsThunk.pending , (state) => {
            state.deleteNewStatus = 'pending'
        })
        .addCase(deleteNewsThunk.fulfilled, (state , action) => {
            state.deleteNewStatus = 'fulfilled'
        })
        .addCase(deleteNewsThunk.rejected, ( state, action ) => {
            state.deleteNewStatus = 'rejected'
            state.deleteNewError = action.payload
        })
    }
})

export const newsReducer = newsSlice.reducer; 