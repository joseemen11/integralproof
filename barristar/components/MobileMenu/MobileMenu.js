import React, { Fragment, useState } from 'react';
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/List";
import List from "@mui/material/List";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Inicio',
        link: '/home',
       
    },

    {
        id: 3,
        title: 'Nosotros',
        link: '/nosotros',
      
    },

    {
        id: 6,
        title: 'Servicios',
        link: '/servicios',
        submenu: [
            {
                id: 61,
                title: 'Contabilidad',
                link: '/servicio/Contabilidad-Integral'
            },
            {
                id: 62,
                title: 'Auditoría',
                link: '/servicio/Auditoría-Especializada'
            },
            {
                id: 63,
                title: 'Gestión Empresarial',
                link: '/servicio/Gestión-Empresarial'
            },
            {
                id: 64,
                title: 'Capacitación',
                link: '/servicio/Capacitación-Individual-y-Colectiva'
            },
        ]
    },
    {
        id: 7,
        title: 'Profesionales',
        link: '/profesionales',
        submenu: [
            {
                id: 71,
                title: 'Andrés Uria',
                link: '/profesional/Andrés-Uria'
            },
            {
                id: 72,
                title: 'Daniela Uria',
                link: '/profesional/Daniela-Uria'
            },
            {
                id: 74,
                title: 'Fernando Uria',
                link: '/profesional/Fernando-Uria'
            },
            {
                id: 74,
                title: 'Martha Palma',
                link: '/profesional/Martha-Palma'
            },
            {
                id: 74,
                title: 'Shirley Vera',
                link: '/profesional/Shirley-Vera'
            },
            {
                id: 74,
                title: 'Andrea Tapia',
                link: '/profesional/Andres-Tapia'
            },
        ]
    },
    
    {
        id: 88,
        title: 'Contacto',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className='mobail_menu'>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;