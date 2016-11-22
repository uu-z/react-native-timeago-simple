'use strict'

import 'react-native'
import React from 'react'
import TimeAgo from '../src/index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const testTime = Date.now() - 3600
  const tree = renderer.create( <TimeAgo language="zh" time={testTime} /> )
})
