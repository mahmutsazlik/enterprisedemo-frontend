//npm run build
//import './App.css'
import LeftNav from './LeftNav'
import TopNav from './TopNav'
import UserList from './UserList'
import { Container, Row, Col } from 'reactstrap'
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'

function CheckBox() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      }
    </>
  )
}
function GetData({ login }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])
  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
      </div>
    )
  }
  return null
}
function App() {
  return (<Checkbox />), document.getElementById('root')
  let topInfo = { title: 'Top' }
  let leftInfo = { title: 'Left' }
  let userListInfo = { title: 'User List' }
  return (
    <div className="App">
      <Container>
        <Row>
          <TopNav info={topInfo} />
        </Row>
        <Row>
          <Col xs="3">
            <LeftNav info={leftInfo} />
          </Col>
          <Col xs="9">
            <UserList info={userListInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
