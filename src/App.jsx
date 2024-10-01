
import { useSelector } from 'react-redux'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Homescreen from './pages/HomeScreen'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import QuizPage from './pages/QuizPage'
import AddQuestionPage from './pages/AddQuestionPage'
import AddTopicPage from './pages/AddTopicPage'
import NavBar from './components/NavBar'
import ScoreSheet from './pages/ScoreSheet'
import Loader from './components/Loader'

function App() {
const loaderStatus = useSelector((state)=>state.Auth.loaderStatus)
  return (
<>
{
  loaderStatus && <Loader/>
}
<NavBar/>
<Routes>
<Route path='/login' element={<LoginPage/>}></Route>
  <Route path='/signup' element={<SignUpPage/>}></Route>
  <Route path="/" element ={<Homescreen/>}>
  </Route>

  <Route path="/quiz" element ={<ProtectedRoute>
    <QuizPage/>
  </ProtectedRoute>}>
  </Route>
  <Route path='/addtopic' element={<AddTopicPage/>}></Route>
  <Route path='/addquestion' element={<AddQuestionPage/>}></Route>
  <Route path='/scoresheet' element={<ScoreSheet/>}></Route>
</Routes>
</>
  )
}

export default App
