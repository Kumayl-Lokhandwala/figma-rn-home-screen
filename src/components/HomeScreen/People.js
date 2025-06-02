import React from 'react'
import peopleData from '../../../data/peopleData'
import IconGridToggleList from '../IconGridToggleList'

const People = () => {
  return <IconGridToggleList title="People" data={peopleData} />
}

export default People
