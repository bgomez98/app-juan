import React, {useContext} from 'react'

import { CareerContext } from '../../context/career/CareerContext'

import { List } from '../list/List'

export const Courses = () => {

  const{ courses } = useContext(CareerContext)

  return <List list={courses} />
}
