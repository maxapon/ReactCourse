import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
    reducerPath: "api",
    tagTypes: ['Review'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => '/restaurants',
        }),
        getRestaurantById: builder.query({
            query: (restId) => ( '/restaurant/' + restId )
        }),
        getMenuByRestId: builder.query({
            query: (restaurantId) => ({
                url: "/dishes",
                params: { restaurantId }
            })
        }),
        getDishByDishId: builder.query({
            query: (dishId) => ( '/dish/' + dishId )
        }),
        getReviewsByRestId: builder.query({
            query: (restaurantId) => ({
                url: "/reviews",
                params: { restaurantId }
            }),
            providesTags: (result, _, restaurantId) => result.concat({type: "Review", restaurantId })
        }),
        getUsers: builder.query({
            query: () => "/users/"
        }),
        createReview: builder.mutation({
            query: ({restaurantId, review}) => ({
                url: '/review/' + restaurantId,
                method: 'POST',
                body: review,
            }),
            invalidatesTags: (result, _, {restaurantId}) => [{type: "Review", id: result.id}, {type: "Review", restaurantId}]
        })
    }),
});

export const { useGetRestaurantsQuery, 
               useGetRestaurantByIdQuery, 
               useGetMenuByRestIdQuery, 
               useGetDishByDishIdQuery, 
               useGetReviewsByRestIdQuery, 
               useGetUsersQuery,
               useCreateReviewMutation } = ApiSlice;