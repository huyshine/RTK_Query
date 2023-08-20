import { createApi, fetchBaseQuery}  from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: 'auth',
    // tagTypes: ['product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
        // baseUrl: import.meta.env.URL_VITE
    }),
    endpoints: (builder) => ({

        signin: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `signin`,
                method: 'POST',
                body : data
            })
        }),
        signup: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `signup`,
                method: 'POST',
                body : data
            })
        }),
    
    })
})

export const { 
    useSigninMutation,
    useSignupMutation,
    
} = authApi

