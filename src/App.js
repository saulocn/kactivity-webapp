import React, {
    Component
} from 'react';
import AppContent from './app-content';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            sideNav: [{
                    nome: 'General',
                    children: [{
                            nome: 'Dashboard',
                            link: '#',
                            isActive: true
                        },
                        {
                            nome: 'Customers',
                            link: '#',
                        }
                    ]
                },
                {
                    nome: 'Administration',
                    children: [{
                            nome: 'Team Settings',
                            link: '#',

                        },
                        {
                            nome: 'Manage Your Team',
                            link: '#',
                            children: [{
                                    nome: 'Members',
                                    link: '#',
                                },
                                {
                                    nome: 'Plugins',
                                    link: '#',
                                },
                                {
                                    nome: 'Add a member',
                                    link: '#',
                                }
                            ]
                        },
                        {
                            nome: 'Invitations',
                            link: '#',
                        },
                        {
                            nome: 'Cloud Storage Environment Settings',
                            link: '#',
                        },
                        {
                            nome: 'Authentication',
                            link: '#',
                        },

                    ]
                },
                {
                    nome: 'Transactions',
                    children: [{
                            nome: 'Payments',
                            link: '#',

                        },
                        {
                            nome: 'Transfers',
                            link: '#'
                        },
                        {
                            nome: 'Balance',
                            link: '#',
                        },

                    ]
                }
            ],
            infoTiles: [{
                title: '254',
                subtitle: 'Card de teste 1'
            }, {
                title: 'Teste 2',
                subtitle: 'Card de teste 2'
            }, {
                title: 'Teste 3',
                subtitle: 'Card de teste 3'
            }, {
                title: '0',
                subtitle: 'Eventos'
            }],
            headerNav: {
                links: [{
                    nome: "Home",
                    endereco: '#'
                }, {
                    nome: "Orders",
                    endereco: '#'
                }, {
                    nome: "Payments",
                    endereco: '#'
                }, {
                    nome: "Exceptions",
                    endereco: '#'
                }, ]
            },
            breadcrumb: {
                links: [{
                    nome: 'Bulma',
                    endereco: '#',
                    isActive: false,
                }, {
                    nome: 'Templates',
                    endereco: '#',
                    isActive: false,
                }, {
                    nome: 'Examples',
                    endereco: '#',
                    isActive: false,
                }, {
                    nome: 'Admin',
                    endereco: '#',
                    isActive: true,
                }],
            },
            events: [{
                nome: "Teste 1"
            }, {
                nome: "Teste 2"
            }, {
                nome: "Teste 3"
            }, {
                nome: "Teste 4"
            }, {
                nome: "Teste 5"
            }, {
                nome: "Teste 6"
            }, ]
        }
    }

    loadEvents() {
        return e => {
            axios.get(`https://kactivity-1.firebaseio.com/eventos.json`)
                .then(content => {
                    let evento = {
                        nome: content.data
                    }
                    let eventos = this.state.events
                    eventos.push(evento)
                    this.setState({
                        events: eventos,
                        infoTiles: this.state.infoTiles.map(
                            item => {
                                if (item.subtitle === 'Eventos')
                                    return {
                                        subtitle: item.subtitle,
                                        title: eventos.length
                                    }
                                return item
                            }
                        )
                    })
                })
        }
    }

    saveEvent() {
        return e => {
            axios.get(`https://kactivity-1.firebaseio.com/eventos.json`)
                .then(content => {
                    let evento = {
                        nome: content.data
                    }
                    let eventos = this.state.events
                    eventos.push(evento)
                    this.setState({
                        events: eventos,
                        infoTiles: this.state.infoTiles.map(
                            item => {
                                if (item.subtitle === 'Eventos')
                                    return {
                                        subtitle: item.subtitle,
                                        title: eventos.length
                                    }
                                return item
                            }
                        )
                    })
                })
        }
    }
    render() {
        return (
            <AppContent 
                {... this.state } 
                loadEvents={this.loadEvents()} 
                saveEvent={this.saveEvent()}
            />
        );
    }
}

export default App;