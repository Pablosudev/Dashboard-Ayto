import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AllJobsInterface,
  JobInterface,
  JobInputInterface,
} from "../Interfaces/JobsInterfaces";

export const getJobsThunk = createAsyncThunk<
  AllJobsInterface,
  void,
  { rejectValue: string }
>("/jobs", async (jobs: void, thunkAPI) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);
    if (!response.ok) {
      const errorJobs = await response.json();
      return thunkAPI.rejectWithValue(
        errorJobs.message ?? "Error al obtener todos los trabajos",
      );
    }
    const jobs = await response.json();
    return jobs;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al obtener todos los trabajos.");
  }
});

export const getJobsByIdThunk = createAsyncThunk<
  JobInterface,
  number,
  { rejectValue: string }
>("/jobs/:id", async (id: number, thunkAPI) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
    if (!response.ok) {
      const errorJob = await response.json();
      return thunkAPI.rejectWithValue(
        errorJob.message ?? "Error al obtener el trabajo por ID",
      );
    }
    const job = await response.json();
    return job;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al obtener el trabajo por ID.");
  }
});

export const createJobThunk = createAsyncThunk<
  JobInterface,
  JobInputInterface,
  { rejectValue: string }
>("/jobs", async (jobData: JobInputInterface, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append("title", jobData.title);
    formData.append("description", jobData.description);
    formData.append("requirements", jobData.requirements);
    formData.append("companyName", jobData.companyName);
    if (jobData.phone) {
      formData.append("phone", jobData.phone);
    }
    if (jobData.email) {
      formData.append("email", jobData.email);
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`, {
      method: "POST",

      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      return thunkAPI.rejectWithValue(
        error.message ?? "Error al crear el trabajo",
      );
    }
    const job = await response.json();
    return job;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al crear el trabajo.");
  }
});

export const updateJobThunk = createAsyncThunk<
  JobInterface,
  { id: number; jobData: JobInputInterface },
  { rejectValue: string }
>("/jobs/:id", async ({ id, jobData }, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append("title", jobData.title);
    formData.append("description", jobData.description);
    formData.append("requirements", jobData.requirements);
    formData.append("companyName", jobData.companyName);
    if (jobData.phone) {
      formData.append("phone", jobData.phone);
    }
    if (jobData.email) {
      formData.append("email", jobData.email);
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      return thunkAPI.rejectWithValue(
        error.message ?? "Error al actualizar el trabajo",
      );
    }
    const job = await response.json();
    return job;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error al actualizar el trabajo.");
  }
});

export const deleteJobsThunk = createAsyncThunk<
number,
number,
{rejectValue: string}
>("/jobs/:id" , async (id:number , thunkAPI) => {
    try {
        const response = await fetch (`${import.meta.env.VITE_API_URL}/jobs${id}`, {
            method: "DELETE",
        })
        if(!response.ok){
            const errorDelete = await response.json();
            return thunkAPI.rejectWithValue( errorDelete.error ?? "Error al eliminar la oferta de trabajo.")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Error al eliminar la oferta de trabajo.")
    }
})

