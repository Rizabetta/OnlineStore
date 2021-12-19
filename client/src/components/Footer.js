import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>

            <Container>
                <Row>
                    <Column>
                        <Heading>Меню</Heading>
                        <FooterLink href="#">Магазин</FooterLink>
                        <FooterLink href="#">Авторизация</FooterLink>
                        <FooterLink href="#">Регистрация</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Помощь с заказом</Heading>
                        <FooterLink href="#">с 9:00 до 18:00 по Московскому времени</FooterLink>
                        <FooterLink href="#">+79183392474 (по России)</FooterLink>
                        <FooterLink href="#">+79183392472 (Саратов)</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Социальные сети</Heading>
                        <FooterLink href="#">instagram</FooterLink>
                        <FooterLink href="#">telegram</FooterLink>
                        <FooterLink href="#">VK</FooterLink>
                    </Column>
                </Row>
            </Container>
            <Heading style={{
                color: "#878787",
                fontSize: "11px",
                textAlign: "center",
                padding: "0px 0px 9px 0px",
            }}>
                2021 Саратовский государственный технический университет
            </Heading>
        </Box>
    );
};
export default Footer;
