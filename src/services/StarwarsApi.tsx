// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmsType, JediType, PlanetType, SpeciesType, StarshipType, VehicleType } from "../types";
import { baseURLAPI } from "./../lib/config";

// Define a service using a base URL and expected endpoints
export const starwarsApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURLAPI }),
  endpoints: builder => ({
    getJediById: builder.query<JediType, string>({
      query: id => `people/${id}`,
    }),
    getPlanetById: builder.query<PlanetType, string>({
      query: id => `planets/${id}`,
    }),
    getStarshipsById: builder.query<StarshipType, string>({
      query: id => `starships/${id}`,
    }),
    getSpeciesById: builder.query<SpeciesType, string>({
      query: id => `species/${id}`,
    }),
    getVehiculesById: builder.query<VehicleType, string>({
      query: id => `vehicles/${id}`,
    }),
    getFilmsById: builder.query<FilmsType, string>({
      query: id => `films/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetJediByIdQuery,
  useGetPlanetByIdQuery,
  useGetStarshipsByIdQuery,
  useGetFilmsByIdQuery,
  useGetVehiculesByIdQuery,
  useGetSpeciesByIdQuery,
} = starwarsApi;
