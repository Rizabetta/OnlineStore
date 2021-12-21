import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { SHOP_ROUTE } from "../utils/consts";

const Footer = () => {

    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Информация</Heading>
                        <FooterLink href={SHOP_ROUTE}>Магазин</FooterLink>
                        <FooterLink>О нас</FooterLink>
                    </Column>

                    <Column>
                        <Heading>Помощь с заказом</Heading>
                        <FooterLink>с 9:00 до 18:00 по Московскому времени</FooterLink>
                        <FooterLink>+79183392474 (по России)</FooterLink>
                        <FooterLink>+79183392472 (Саратов)</FooterLink>
                    </Column>

                    <Column className="display-flex">
                        <Heading>Социальные сети</Heading>
                        <FooterLink href="https://www.instagram.com/">instagram</FooterLink>
                        <FooterLink href="https://web.telegram.org/">telegram</FooterLink>
                        <FooterLink href="https://vk.com/">VK</FooterLink>
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
