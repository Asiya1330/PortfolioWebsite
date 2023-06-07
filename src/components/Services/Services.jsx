import React from "react";
import { MdDesignServices,MdOutlineDeveloperMode } from "react-icons/md";
import { CgDatabase } from 'react-icons/cg'
import styled from "styled-components";
import Card from "../Generals/Card";
import { Slide } from "react-awesome-reveal";
import { AiTwotoneCloud } from 'react-icons/ai'
import { GiMaterialsScience } from 'react-icons/gi'
import { TfiWrite } from 'react-icons/tfi'

const Services = () => {
    const services = [{
        icon: CgDatabase,
        languages: [
            'Hadoop',
            'SQL (SQLite, MySQL, PostgreSQL, etc)',
            'noSQL (MongoDB, etc)',
            'Hadoop',
            'Firebase'
        ],
        title: "database designer",

        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
    }, {
        icon: MdOutlineDeveloperMode,
        languages:
            ["Vue JS", "React JS", "Angular (V2-V14)", "Node JS", "Django", "Laravel", "Flask", "Yii Framework (V1&2)", "Codeigniter", "UI/UX", "CakePHP"],
        title: "web & mobile developer",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
    }, {
        icon: AiTwotoneCloud,
        languages: [
            'AWS',
            'Python',
            'Linux Bash',
            'Docker',
            'Terraform',
            'Terragrunt',
            'Kubernetes (EKS)',
            'Jenkins',
            'GitLab',
            'Ansible',
            'CloudEndure',
            'Serverless',
        ],
        title: "devops",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
    }, {
        icon: GiMaterialsScience,
        languages: [
            'Python',
            'R',
            'Deep Learning',
            'Machine Learning',
            'NLP',
            'Computer Vision',
            'Tableau',
            'Power BI',
            'Google Data Studio',
            'Weka',
            'Excel',
            'SPSS',
            'SAS',
            'EViews',
            'Stata'
        ],
        title: "data science",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
    }, {
        icon: MdDesignServices,
        languages: [
            "Logo Designing",
            "PSD to HTML",
            "UI/UX",
            "3D Motion Characters",
            "Minimalist Gaming Vintage",
            "Iconic Emblem",
            "Mascots and a lot more"
        ],
        title: "graphic designer",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
    },
    {
        icon: TfiWrite,
        languages: [
            "Thesis Writing",
            "Report Writing",
            "Academic Writing",
            "Content that drives leads",
            "Value-added content",
            "Plagiarism-free content",
            "Correct grammar",
            "Brand awareness",
            "Keyword search",
            "and more..."
        ],
        title: "content writer",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
    }]
    return (
        <Container className="max-w-[1040px]" id="services">
            <Slide direction="down" className="cardBox">
                <h4 className="text-gray-200">
                    My <span className="green">services</span>
                </h4 >
                <h1 className="text-gray-200">What I Do</h1>
            </Slide>

            <Cards>
                {
                    services.map(({ icon, languages, discription, title }) => (
                        <Slide direction="left" className="cardBox">
                            <Card
                                Icon={icon}
                                title={title}
                                hoverContent={languages}
                                disc={discription}
                            />
                        </Slide>
                    ))
                }

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
