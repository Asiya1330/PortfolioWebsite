import React, { useState } from 'react'
import Modal from './Modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title, hoverContent } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Container className='border-b-[3px] border-solid border-[#8f5caf] service-card' onClick={() => setIsModalOpen(!isModalOpen)}>
            <Link to={`/skills/${title}`}>
                <span className='green text-[#8f5caf]'><Icon /></span>
                <h1 className='text-gray-200 font-bold'>{title}</h1>
                <p className='text-gray-200'>{disc}</p>
            </Link>
            <div class="content">
                <div className='flex w-full'>Tools I use</div>
                <div className='tools'>
                    {hoverContent.map((content) => (
                        <div className='flex items-center gap-2'>
                            <div><Icon /></div>
                            <div>{content}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={() => {
                console.log(isModalOpen,'sss')
                setIsModalOpen(!isModalOpen)}} />
        </Container>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`