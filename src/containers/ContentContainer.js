import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LeftColumnContainer from './LeftColumnContainer';
import CenterColumnContainer from './CenterColumnContainer';
import RightColumnContainer from './RightColumnContainer';
import { getCollection } from '../database/firebase';
import { setTypes, setAchievements } from '../actions'

const ContentContainer = ({ dispatch }) => {

  useEffect(() => {
    console.log('useEffect')
    getCollection('types').then(result =>
      dispatch(setTypes(result)))
    getCollection('achievements').then(result =>
      dispatch(setAchievements(result)))
  });

  return (
    <div className="content" >
      <LeftColumnContainer />
      <CenterColumnContainer />
      <RightColumnContainer />
    </div>
  )
}

export default connect()(ContentContainer)