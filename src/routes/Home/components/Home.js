import React from 'react'
import './Home.scss'
import AddTodo from '../containers/AddTodo'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <h1>Hola Mundo!</h1>
    <AddTodo />
    <VisibleTodoListContainer />
    <Footer />
  </div>
)

export default Home
