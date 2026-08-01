import { createSlice } from "@reduxjs/toolkit";
import { EventStatus } from "../Interfaces/EventsInterface";
import { createEventThunk, getEventByIdThunk, getEventsThunk, updateEventThunk, deleteEventThunk } from "./eventsThunks";

const initialState: EventStatus = {
  events: [],
  eventById: null,
  getEventsStatus: "idle",
  getEventError: undefined,
  getEventByIdStatus: "idle",
  getEventByIdError: undefined,
  createEventStatus: "idle",
  createEventError: undefined,
  updateEventStatus: "idle",
  updateEventError: undefined,
  deleteEventStatus: "idle",
  deleteEventError: undefined,
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        clearEventId(state){
            state.eventById = null
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getEventsThunk.pending , (state) => {
            state.getEventsStatus = "pending"
        })
        .addCase(getEventsThunk.fulfilled , (state , action) => {
            state.getEventsStatus = "fulfilled",
            state.events = action.payload 
        })
        .addCase(getEventsThunk.rejected , (state , action) => {
            state.getEventsStatus = "rejected",
            state.getEventError = action.payload
        })
        // GETBYID
        .addCase(getEventByIdThunk.pending , (state) => {
            state.getEventByIdStatus = "pending"
        })
        .addCase(getEventByIdThunk.fulfilled , (state , action) => {
            state.getEventByIdStatus = "fulfilled"
            state.eventById = action.payload
            state.getEventByIdError = undefined
        })
        .addCase(getEventByIdThunk.rejected , (state , action) => {
            state.getEventByIdStatus = "rejected",
            state.getEventByIdError = action.payload
        })
        // CREATE
        .addCase(createEventThunk.pending , (state) => {
            state.createEventStatus = "pending"
        })
        .addCase(createEventThunk.fulfilled , (state , action) => {
            state.createEventStatus = "fulfilled"
            state.eventById = action.payload
            state.createEventError = undefined
        })
        .addCase(createEventThunk.rejected , (state , action) => {
            state.createEventStatus = "rejected"
            state.createEventError = action.payload
        })
        // UPDATE SLICE
        .addCase(updateEventThunk.pending , (state) => {
            state.updateEventStatus = "pending"
        }   )
        .addCase(updateEventThunk.fulfilled , (state , action) => {
            state.updateEventStatus = "fulfilled"
            state.eventById = action.payload
            state.updateEventError = undefined
        })
        .addCase(updateEventThunk.rejected , (state , action) => {
            state.updateEventStatus = "rejected"
            state.updateEventError = action.payload
        })
        
        // DELETE SLICE

        .addCase(deleteEventThunk.pending , (state) => {
            state.deleteEventStatus = "pending"
        })
        .addCase(deleteEventThunk.fulfilled , (state , action) => {
            state.deleteEventStatus = "fulfilled"
            state.eventById = null
            state.deleteEventError = undefined
        })
        .addCase(deleteEventThunk.rejected , (state , action) => {
            state.deleteEventStatus = "rejected"
            state.deleteEventError = action.payload
        })
  
    }
})
