import { useState } from "react";
import fetchUser from './utilities/fetchCalls'
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import '/src/styles/_global.scss'

interface User {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  email: string | null;
  followers: number;
  following: number;
  location: string | null;
  name: string;
  public_repos: number;
  twitter_username: string | null;
}

const initialState: User = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  bio: 'There once was...',
  blog: 'https://github.blog',
  company: '@github',
  created_at: '2011-01-25T18:44:36Z',
  email: 'octocat@github.com',
  followers: 20,
  following: 0,
  location: 'San Francisco',
  name: 'monalisa octocat',
  public_repos: 2,
  twitter_username: 'monatheoctocat'
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
