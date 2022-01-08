import { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(username, password)
                alert(`${username},вы авторизировались`)
                console.log(data.roles)

            } else {
                data = await registration(username, password)
                alert(`${username}, теперь вы зарегистрированы!`)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            console.log(e.response.data.message)
            if (((password.length < 4) || (password.length > 10)) && (username !== "")) console.log(e.response.data.errors.errors[0].msg)
            if ((username === "") && (password.length >= 4) && (password.length <= 10)) console.log(e.response.data.errors.errors[0].msg)
            if (((username === "") && (password.length < 4)) || ((username === "") && (password.length > 10))) {
                console.log(e.response.data.errors.errors[0].msg)
                console.log(e.response.data.errors.errors[1].msg)
            }
        }
    }

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
                        value={username}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-4'
                        placeholder='введите пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                    <Button onClick={click}>
                        {isLogin ? "Войти" : "Регистрация"}
                    </Button>
                </div>
            </Card>
        </Container>
    );
})

export default Auth;