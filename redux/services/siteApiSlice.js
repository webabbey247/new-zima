import { apiSlice } from "../api/apiSlice";

export const siteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (credentials) => ({
        url: "enquiries/contact-us",
        method: "post",
        body: credentials,
      }),
    }),
    emailSubscription: builder.mutation({
      query: (credentials) => ({
        url: "mailing-list/subscribers",
        method: "post",
        body: credentials,
      }),
    }),
    allClients: builder.query({
      query: () => "clients/all",
      providesTags: ["Clients"],
      refetchOnMount: true,
    }),
    allPartners: builder.query({
      query: () => "partnerships/all",
      providesTags: ["Partners"],
      refetchOnMount: true,
    }),
    allPortfolio: builder.query({
      query: (slug) => `portfolio/all`,
      providesTags: ["Portfolio"],
      refetchOnMount: true,
    }),
    allServices: builder.query({
      query: () => "services/all",
      providesTags: ["Services"],
      refetchOnMountOrArgChange: true,
    }),
    AllManagement: builder.query({
      query: () => "leadership/all",
      providesTags: ["Management"],
      refetchOnMountOrArgChange: true,
    }),
    singleManagement: builder.query({
      query: (slug) => `leadership/${slug}`,
      providesTags: ["SingleManagement"],
    }),
  }),
});

export const {
  useContactUsMutation,
  useEmailSubscriptionMutation,
  useAllClientsQuery,
  useAllManagementQuery,
  useSingleManagementQuery,
  useAllPartnersQuery,
  useAllPortfolioQuery,
  useAllServicesQuery,
} = siteApiSlice;
