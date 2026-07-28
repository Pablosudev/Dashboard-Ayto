import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthInput, AuthResponse } from "../Interfaces/authInterface";

export const loginThunk = createAsyncThunk<
  AuthResponse,
  AuthInput,
  { rejectValue: string }
>(
  "auth/login",

  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        return thunkAPI.rejectWithValue(
          errorBody.error ?? "Error al iniciar sesión",
        );
      }
      const data: AuthResponse = await response.json();
      return data;
    } catch {
      return thunkAPI.rejectWithValue("Error de conexión");
    }
  },
);
