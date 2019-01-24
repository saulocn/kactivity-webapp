import React from 'react'
import Card from '../components/card';
import EventsTable from './events-table';

const EventCard = ({
    events
}) => (
    <Card cardName="Events">
        <EventsTable  events={events} />
    </Card>

)

export default EventCard