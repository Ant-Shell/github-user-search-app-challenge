import { useState } from "react";
import fetchUser from './utilities/fetchCalls'
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import '/src/styles/_global.scss'

interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  name: string;
  public_repos: number;
  twitter_username: string;
}

const initialState: User = {
  avatar_url: '',
  bio: '',
  blog: '',
  company: '',
  created_at: '',
  email: '',
  followers: 0,
  following: 0,
  location: '',
  name: '',
  public_repos: 0,
  twitter_username: ''
}

const App = () => {
  const [user, setUser] = useState<User | unknown>(initialState)
  const [error, setError] = useState<string | unknown>('')

  const getUser = (username:string):void => {
    fetchUser(username, setUser, setError)
  }

  return (
    <>
      <Header/>
      <SearchBar getUser={getUser}/>
    </>
  )
}

export default App
