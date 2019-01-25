import React from 'react';
import HeaderNav from './components/header-nav'
import SideNav from './components/side-nav'
import Breadcrumb from './home/breadcrumb';
import HelloMessage from './home/hello-message';
import InfoLittleCards from './home/info-little-cards';
import InventorySearch from './home/inventory-search';
import UserSearch from './home/user-search';


import './App.css';
import EventCard from './home/event-card';
import EventForm from './home/event-form';



const AppContent = ({
    headerNav,
    sideNav,
    breadcrumb,
    infoTiles,
    events,
    loadEvents
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
            <EventCard events={events} loadEvents={loadEvents}  />
          </div>
          <div className="column is-6">
            <InventorySearch />
            <UserSearch />
            <EventForm title="Eventos" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)


export default AppContent;