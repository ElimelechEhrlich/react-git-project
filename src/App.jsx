import React from 'react'
import GridLayout from './GridLayout'
import Cell from './Cell'

export default function App() {
  return (<>
  <div className='background justify-around flex flex-col'>
    <div className='flex flex-row header'>
      <p>Find the </p>
      <p>Secret Color!</p>
      <Cell key={'1000'} className='cell_header'/>
    </div>
    <GridLayout/>
  </div>
  </>
  )
}
