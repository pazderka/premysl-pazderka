export const makeHttpClientRequest = async <T>(url: string, scope: string) => {
  const config = useRuntimeConfig()
  try {
    return await $fetch<T>(url, {
      baseURL: config.public.API_BASE_URL,
      headers: {
        'X-PB-SCOPE': scope,
      },
    })
  }
  catch {
    alert('Něco se pokazilo, zkuste to prosím později.')
    return null
  }
}
