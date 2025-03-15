import baseApi from "../../baseApi";

const depositsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDeposits: builder.query({
      query: () => `/deposits`,
      providesTags: ["deposits"],
    }),

    addDeposit: builder.mutation({
      query: (data) => ({
        url: `/deposits`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["deposits"],
    }),

    updateStatus: builder.mutation({
      query: (id) => ({
        url: `/deposits/update-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["deposits"],
    }),
  }),
});

export const {
  useGetDepositsQuery,
  useAddDepositMutation,
  useUpdateStatusMutation,
} = depositsApi;
