import Button from "react-bootstrap/Button";
import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className="d-flex justify-content-center align-items-center "
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-4'
                        placeholder='введите имя'
                    />
                    <Form.Control
                        className='mt-4'
                        placeholder='введите пароль'
                    />
                </Form>
                <div className="d-flex justify-content-between m-4 ">
                    {isLogin ?
                        <div>
                            <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>}
                    <Button >
                        {isLogin ? "Войти" : "Регистрация"}
                    </Button>
                </div>
            </Card>
        </Container>
    );
}

export default Auth;