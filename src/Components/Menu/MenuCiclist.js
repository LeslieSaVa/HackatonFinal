import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import LogOut from '../Login/LogOut.js';

class MenuCiclist extends Component {

    render() {
        return (
            <nav className="btnNav">
                <h5 className="brand-logo center">
                <strong>BICIHELPER</strong>
                </h5>
                <SideNav trigger={
                    <Button className="btnNav btn-flat pddng">
                        <a href=" " className="teal accent-3 z-depth 3">
                            <i className="material-icons">menu</i>
                        </a>
                    </Button>} options={{ closeOnClick: true }}>
                    <SideNavItem userView user={{
                        // background: 'https://placeimg.com/640/480/tech',
                        // image: 'static/media/react-materialize-logo.824c6ea3.svg',
                        image: './assets/usuario_ciclista.jpg',
                        name: 'Javier',
                        email: 'Bicicleta de Ruta'
                    }} className="testoo" />
                    <SideNavItem divider />
                    <SideNavItem href="#!icon" icon="directions_bike">
                        BiciHelper
                        </SideNavItem>
                    <SideNavItem waves href="#!second" icon="notifications_none">
                        Notificaciones
                        </SideNavItem>
                    <SideNavItem waves href="#!third" icon="message">
                        Mensajes
                        </SideNavItem>
                    <SideNavItem waves href="#!fourth" icon="record_voice_over">
                        Mis Solicitudes
                        </SideNavItem>
                    <SideNavItem waves href="#!fifth" icon="favorite_border">
                        Talleres Favoritos
                        </SideNavItem>
                    <SideNavItem waves href="#!sixth" icon="help_outline">
                        Ayuda
                        </SideNavItem>
                    <SideNavItem divider />
                    <LogOut />
                </SideNav>
            </nav>
        )
    }
}


export default MenuCiclist
