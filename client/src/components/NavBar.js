import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { observer } from 'mobx-react-lite'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom"

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Navbar</Navbar.Brand>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"
                            onClick={() => history.push(ADMIN_ROUTE)}>
                            Админ панель
                        </Nav.Link>
                        <Nav.Link href="#pricing"
                            onClick={() => logOut()}>
                            Выйти
                        </Nav.Link>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link href="#features" onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;