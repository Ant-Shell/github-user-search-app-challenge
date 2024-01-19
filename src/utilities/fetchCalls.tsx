const fetchUser = async (user:string, setterFunction:(res: string) => void,
 errorHandler: (res: string) => void):Promise<void> => {
  const api = `https://api.github.com/users/${user}`
  try {
    const response = await fetch(api)
    if (!response.ok) {
      errorHandler(response.statusText)
    }
    const data = await response.json()
    setterFunction(data)
  } catch(err) {
    if (err instanceof Error) {
      errorHandler(err.message)
    }
  }
}

export default fetchUser