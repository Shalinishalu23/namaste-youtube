import React from 'react'
import Button from './Button'

const menuList = ['All', 'Music', 'Movies']

const ButtonList = () => {
  return (
    // menuList.forEach(element => {
    //   <Button name={element}></Button>

    // });
  <div className='flex'>
    <Button name='All'></Button>
    <Button name='Movies'></Button>
    <Button name='Series'></Button>
    <Button name='Series'></Button>
    <Button name='Series'></Button>
    <Button name='Series'></Button>
    <Button name='Series'></Button>
    <Button name='Series'></Button>
    <Button name='Series'></Button>
  </div>
  )
}

export default ButtonList