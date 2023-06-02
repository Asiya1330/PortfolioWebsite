import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "../Generals/Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
    return (
        <Container className="max-w-[1040px]" id="services">
            <Slide direction="down">
                <h4 className="text-gray-200">
                    My <span className="green">services</span>
                </h4 >
                <h1 className="text-gray-200">What I Do</h1>
            </Slide>

            <Cards>
                <Slide direction="left" >
                    <Card
                        Icon={MdDesignServices}
                        title={"database designer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
                <Slide direction="up" >
                    <Card
                        Icon={MdDesignServices}
                        title={"web & mobile developer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
                <Slide direction="right" >
                    <Card
                        Icon={MdDesignServices}
                        title={"devops"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                
                </Slide>
                <Slide direction="left" >
                    <Card
                        Icon={MdDesignServices}
                        title={"data science"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>

                <Slide direction="up" >
                    <Card
                        Icon={FiCodesandbox}
                        title={"graphic designer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
                <Slide direction="right" >
                    <Card
                        Icon={CgWebsite}
                        title={"content writer"}
                        disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                    />
                </Slide>
            </Cards>
        </Container>
    );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
