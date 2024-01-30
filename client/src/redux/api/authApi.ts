import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IGenericResponse } from "./type";

export const URL = "http://localhost:3001";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL + "/auth",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, unknown>({
      query(data) {
        return {
          url: "/registration",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<
      { access_token: string; status: string },
      unknown
    >({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "/logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
