import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AllEventsInterface,
  EventInterface,
  EventFormInput,
  EventInput,
} from "../Interfaces/EventsInterface";

export const getEventsThunk = createAsyncThunk<
  AllEventsInterface,
  void,
  { rejectValue: string }
>("/events", async (events: void, thunkAPI) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
    if (!response.ok) {
      const errorEvents = await response.json();
      return thunkAPI.rejectWithValue(
        errorEvents.error ?? "Error al obtener todos los eventos",
      );
    }
    const data: AllEventsInterface = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al obtener todos los eventos");
  }
});

export const getEventByIdThunk = createAsyncThunk<
  EventInterface,
  number,
  { rejectValue: string }
>("/events", async (id: number, thunkAPI) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/events/${id}`,
    );
    if (!response.ok) {
      const errorEventId = await response.json();
      return thunkAPI.rejectWithValue(
        errorEventId.error ?? "Error al obtener el evento por id",
      );
    }
    const data: EventInterface = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al obtener el evento por id");
  }
});

export const createEventThunk = createAsyncThunk<
  EventFormInput,
  EventInput,
  { rejectValue: string }
>("/events", async (eventInput: EventInput, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append("title", eventInput.title);
    formData.append("description", eventInput.description);
    formData.append("eventDate", eventInput.eventDate);
    formData.append("category", eventInput.category);
    if (eventInput.image) {
      formData.append("image", eventInput.image);
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorCreateEvent = await response.json();
      return thunkAPI.rejectWithValue(
        errorCreateEvent.error ?? "Error al crear el evento",
      );
    }
    const data: EventFormInput = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al crear el evento");
  }
});

const updateEventThunk = createAsyncThunk<
  EventFormInput,
  { id: number; eventInput: EventInput },
  { rejectValue: string }
>(
  "/event",
  async (
    { id, eventInput }: { id: number; eventInput: EventInput },
    thunkAPI,
  ) => {
    try {
      const formData = new FormData();
      formData.append("title", eventInput.title);
      formData.append("description", eventInput.description);
      formData.append("eventDate", eventInput.eventDate);
      formData.append("category", eventInput.category);
      if (eventInput.image) {
        formData.append("image", eventInput.image);
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
        method: "PUT",
        body: formData,
      });
      if (!response.ok) {
        const errorUpdateEvent = await response.json();
        return thunkAPI.rejectWithValue(
          errorUpdateEvent.error ?? "Error al actualizar el evento",
        );
      }
      const data : EventFormInput = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al actualizar el evento");
    }
  },
);


export const deleteEventThunk = createAsyncThunk<
  number,
  number,
  {rejectValue: string}
  >("delete" , async (id:number , thunkAPI) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorDeleteEvent = await response.json();
        return thunkAPI.rejectWithValue(
          errorDeleteEvent.error ?? "Error al eliminar el evento"
        );
      }
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error al eliminar el evento");
    }
  });