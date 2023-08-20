import { createApi, fetchBaseQuery}  from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: 'product',
    tagTypes: ['product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (builder) => ({
        getAll: builder.query<any, void>({
            query: () => `products`,
            providesTags: ['product']
        }),
        getDetail: builder.query<any, number | string>({
            query: (id:number) => `products/${id}`,
            providesTags: ['product']
        }),
        removeProduct: builder.mutation<any, number |string>({
            query: (id: number) =>({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['product']
        }),
        addProduct: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `products`,
                method: 'POST',
                body : data
            }),
            invalidatesTags: ['product']

        }),
        editProduct: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `products/${data.id}`,
                method: 'PATCH',
                body: data.data
            }),
            invalidatesTags: ['product']
        })
    })
})

export const { 
    useAddProductMutation,
    useEditProductMutation,
    useGetAllQuery,
    useGetDetailQuery,
    useRemoveProductMutation
} = productApi

export const productReducer = productApi.reducer