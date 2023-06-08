import logo from "../Assets/logo.png";
import React, { useEffect, useState } from 'react'
import { flushSync } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const NavBar = () => {
    const [bar, setBar] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate()
    const [page, setPage] = useState('home');

    useEffect(() => {
        if (pathname.includes('projects')) {
            setPage('projectDetails');
        }
        else setPage('home')
    }, [pathname]);

    const scrollToSection = (sectionId, marginTop) => {
        if (page !== 'home') {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - marginTop,
                        behavior: "smooth"
                    })
                }
            }, 500);
            return
        }
        flushSync(() => {
            const element = document.getElementById(sectionId);
            window.scrollTo({
                top: element.offsetTop - marginTop,
                behavior: "smooth"
            })
        })
    }
    return (
        <Container bar={bar} className={`navbar`}>
            <Logo onClick={()=>scrollToSection('home', 50)}>
                <img className="w-[50px]" src={logo} alt="" />
            </Logo>
            <Nav bar={bar}>
                <span onClick={() => setBar(!bar)}><div onClick={() => scrollToSection('home', 50)}>Home</div></span>
                <span onClick={() => setBar(!bar)}><div onClick={() => scrollToSection('clients', 200)}>Our Clients</div></span>
                <span onClick={() => setBar(!bar)}><div onClick={() => scrollToSection('services', 50)}>Services</div></span>
                <span onClick={() => setBar(!bar)}><div onClick={() => scrollToSection('projects', 70)}>Projects</div></span>
                <span onClick={() => setBar(!bar)}><div onClick={() => scrollToSection('reviews', 80)}>Testimonials</div></span>
                <span onClick={() => setBar(!bar)}><div onClick={() => scrollToSection('contact', 100)}>Contact Us</div></span>
            </Nav>
            <div
                onClick={() => setBar(!bar)}
                className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default NavBar

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 2rem !important;
    position: relative;
    z-index:10;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 100%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                &::before, &::after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                    margin-left:-20px
                }

                &::before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                &::after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: rgb(205 95 248);
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "103vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        :hover {
            cursor:pointer;
            color: #debaf5;
        }
        div{
            display:inherit; 
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`
