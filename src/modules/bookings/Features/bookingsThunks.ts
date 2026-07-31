import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import {
  AllBookings,
  BookingInput,
  BookingInterface,
} from "../Interfaces/bookingsInterface";

export const getAllBookinsThunk = createAsyncThunk<
  AllBookings,
  void,
  { rejectValue: string }
>("/bookings", async (bookings: void, thunkAPI) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/news`);
    if (!response.ok) {
      const errorBookings = await response.json();
      return thunkAPI.rejectWithValue(
        errorBookings.error ?? "Error al obtemer todas las reservas.",
      );
    }
    const data: AllBookings = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al obtener todas las reservas");
  }
});

export const getBookingByIdThunk = createAsyncThunk<
  BookingInterface,
  number,
  { rejectValue: string }
>("/bookings", async (id: number, thunkAPI) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/news/${id}`);
    if (!response.ok) {
      const errorBookingId = await response.json();
      return thunkAPI.rejectWithValue(
        errorBookingId.error ?? "Error al obetener una única reserva.",
      );
    }
    const data : BookingInterface = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al obtener una única reserva");
  }
});

export const createBookingThunk = createAsyncThunk<
  BookingInterface,
  BookingInput,
  { rejectValue: string }
>("/bookings", async (newBooking: BookingInput, thunkAPI) => {
  try {
    const formData = new FormData();
    (formData.append("name", newBooking.name),
      formData.append("phone", newBooking.phone),
      formData.append("startDate", newBooking.startDate),
      formData.append("endDate", newBooking.endDate),
      formData.append("status", newBooking.status),
      formData.append("note", newBooking.note));

    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const errorCreateBooking = await response.json();
      return thunkAPI.rejectWithValue(
        errorCreateBooking.error ?? "Error al crear la reserva.",
      );
    }
    const data = response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al creal una nueva reserva.");
  }
});

export const updateBookingThunk = createAsyncThunk<
  BookingInterface,
  { id: number; booking: BookingInput },
  { rejectValue: string }
>(
  "/bookings",
  async ({ id, booking }: { id: number; booking: BookingInput }, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("name", booking.name),
        formData.append("phone", booking.phone),
        formData.append("startDate", booking.startDate),
        formData.append("endDate", booking.endDate),
        formData.append("status", booking.status),
        formData.append("note", booking.note);

        const response = await fetch (`${import.meta.env.VITE_API_URL}/booking/${id}` , {
            method: "PUT",
            body : formData,
        });
        if (!response.ok) {
            const errorUpdateBooking = await response.json();
            return thunkApi.rejectWithValue( errorUpdateBooking.error ?? "Error al editar la reserva.")
        }
        const data : BookingInterface = await response.json();
        return data

    } catch (error) {
      return thunkApi.rejectWithValue("Error al actualizar laa reserva");
    }
  },
);




export const deleteBookingThunk = createAsyncThunk<
number,
number,
{rejectValue: string}>("/bookings", async (id: number , thunkAPI) => {

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}` , {
            method: "DELETE",
        })
        if (!response.ok) {
            const errorDeleteBooking = await response.json();
            return thunkAPI.rejectWithValue( errorDeleteBooking.error ?? "Error al intentar eliminar la reserva.")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Error al intentar eliminar la reserva.")
    }
})
