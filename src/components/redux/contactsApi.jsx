// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     // baseUrl: 'https://62711e396a36d4d62c21861e.mockapi.io/',
//     // baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `contacts`,
//       providesTags: ['Contacts'],
//       // providesTags: result =>
//       //   // is result available?
//       //   result
//       //     ? // successful query
//       //       [
//       //         ...result.map(({ id }) => ({ type: 'Contacts', id })),
//       //         { type: 'Contacts', id: 'LIST' },
//       //       ]
//       //     : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
//       //       [{ type: 'Contacts', id: 'LIST' }],
//     }),

//     addContact: builder.mutation({
//       query: body => ({
//         url: `contacts`,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => {
//         return {
//           url: `/contacts/${id}`,
//           method: 'DELETE',
//         };
//       },
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;
