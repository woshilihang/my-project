import React from 'react'

interface IProps {
  // title: string
}

const Home:React.SFC = (props: IProps) => {
  return (
    <div>{ props }</div>
  )
}

export default Home;
