import React, {
    Component
} from 'react';
import HeaderNav from './components/header-nav'
import SideNav from './components/side-nav'
import Breadcrumb from './home/breadcrumb';
import HelloMessage from './home/hello-message';
import InfoLittleCards from './home/info-little-cards';
import InventorySearch from './home/inventory-search';
import UserSearch from './home/user-search';


import './App.css';
import EventCard from './home/event-card';



const AppContent = ({
    headerNav,
    sideNav,
    breadcrumb,
    infoTiles,
    events
}) => (
<div className="App">
  <HeaderNav links={headerNav.links} />
  <div className="container">
    <div className="columns">
      <div className="column is-3">
        <SideNav nav={sideNav} />
      </div>
      <div className="column is-9">
        <Breadcrumb links={breadcrumb.links} />
        <HelloMessage />
        <InfoLittleCards infos={infoTiles} />
        <div className="columns">
          <div className="column is-6">
            <EventCard events={events} />
          </div>
          <div className="column is-6">
            <InventorySearch />
            <UserSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)


export default AppContent;