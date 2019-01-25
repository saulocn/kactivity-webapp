import React from 'react'
import Card from '../components/card';
import EventsTable from './events-table';

const EventCard = ({
    events,
    loadEvents
}) => (
    <Card cardName="Events" viewAllClick={loadEvents}>
        <EventsTable  events={events} />
    </Card>

)

export default EventCard