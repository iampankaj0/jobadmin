import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css'
import Home from './pages/home/Home';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Latestjob from './pages/LatestJobs/Latestjob';
import Editjob from './pages/EditJob/Editjob';
import Newjob from './pages/NewJob/Newjob';
import Anaytics from './pages/Analytics/Analytics';
import AllAnalytics from './pages/Analytics/AllAnalytics';

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className='app_container'>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/jobs' component={Latestjob} />
          <Route path='/job/:jobId' component={Editjob} />
          <Route path='/newjob' component={Newjob} />
          <Route path='/analytics' component={Anaytics} />
          <Route path='/all-analytics' component={AllAnalytics} />

          <Redirect to='/' />


        </Switch>

      </div>
    </Router>
  )
}

export default App