import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  console.log('isMenuOpen', isMenuOpen)
// early return pattern
  if(!isMenuOpen) return null
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li > <Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>
        Subscription
      </h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Musics</li>
        <li>Game</li>
      </ul>
      <h1 className='font-bold pt-5'>
        Subscription
      </h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Musics</li>
        <li>Game</li>
      </ul>
      <h1 className='font-bold pt-5'>
        Subscription
      </h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Musics</li>
        <li>Game</li>
      </ul>
      <h1 className='font-bold pt-5'>
        Subscription
      </h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Musics</li>
        <li>Game</li>
      </ul>
    </div>
  )
}

export default SideBar