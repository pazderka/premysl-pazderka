export const useHttpServer = async <T>(url: string, scope: string) => {
  const config = useRuntimeConfig()
  const { data, error } = await useFetch<T>(url, {
    baseURL: config.public.API_BASE_URL,
    headers: {
      'X-PB-SCOPE': scope,
    },
  })

  return { data, error }
}
