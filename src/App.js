import React, {
    Component
} from 'react';
import AppContent from './app-content';
import './App.css';

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
                title: 'Teste 4',
                subtitle: 'Cad de teste 4'
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
    render() {
        return (
            <AppContent {... this.state } />
        );
    }
}

export default App;