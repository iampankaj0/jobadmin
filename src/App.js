import React from 'react';
import './app.css'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Latestjob from './pages/LatestJobs/Latestjob';
import Editjob from './pages/EditJob/Editjob';
import Newjob from './pages/NewJob/Newjob';
import Anaytics from './pages/Analytics/Analytics';
import AllAnalytics from './pages/Analytics/AllAnalytics';
import Logo from './pages/Logo/Logo';
import Marquee from './pages/Marquee/Marquee';
import Noticeboard from './pages/NoticeBoard/Noticeboard';
import Slider from './pages/Slider/Slider';

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
          <Route path='/change-logo' component={Logo} />
          <Route path='/slider' component={Slider} />
          <Route path='/marquee' component={Marquee} />
          <Route path='/notice-board' component={Noticeboard} />

          <Redirect to='/' />


        </Switch>

      </div>
    </Router>
  )
}

export default App