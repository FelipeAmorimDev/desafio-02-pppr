import React from 'react'

import { Avatar } from './components/Avatar'
import { Intro } from './components/Intro'
import { ListOfSkills } from './components/ListOfSkills'

export function App() {
  return (
    <>
      <div className="card">
        <Avatar />

        <div className="info">
          <Intro />
          <ListOfSkills />
        </div>
      </div>
    </>
  )
}
