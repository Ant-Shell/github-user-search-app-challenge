
const fetchUser = async (username:string, setterFunction:(res: string) => void,
 errorHandler: (res: string) => void):Promise<void> => {
  const api = `https://api.github.com/users/${username}`
  try {
    const response = await fetch(api)
    if (!response.ok) {
      errorHandler(response.statusText)
    }
    const data:string = await response.json()
    setterFunction(data)
  } catch(err) {
    if (err instanceof Error) {
      errorHandler(err.message)
    }
  }
}

export default fetchUser