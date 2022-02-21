// import moment from 'moment';
import React, { useState } from 'react';
import dynamic from 'next/dynamic'

const One = dynamic(import('../component/One'))
const Hello = dynamic(() => import('../component/Hello').then((mod) => mod.Hello))
const Loading = dynamic(
  () => import('../component/loading'),
  { loading: () => <p>... </p> }
)
export default function Time() {
  const [nowTime, setTime] = useState(Date.now())
  const [results, setResults] = useState()

  const changeTime = async () => {
    // setTime(moment(Date.now()).format())
    const moment = await import('moment')
    setTime(moment.default(Date.now()).format())
  }

  return (
    <>
      <div>显示时间为：{nowTime}</div>
      <button onClick={changeTime}>改变格式</button>
      <One />
      <Hello />
      <Loading />
    </>
  )
}