import React from 'react'

const EventsTable = ({
    events
}) => (
    <table className="table is-fullwidth is-striped">
                        <tbody>
                          {events && events.map((event, index)=>(
                            <tr  key={index}>
                              <td width="5%"><i className="fa fa-bell-o"></i></td>
                              <td>{event.nome}</td>
                              <td>
                                <a className="button is-small is-primary" href="#">Action</a> 
                                <a className="button is-small is-danger"  href="#">Remover</a>
                              </td>
                          </tr>
                          ))}
                        </tbody>
                      </table>

)

export default EventsTable