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
    const services = [
        {
        icon: CgDatabase,
        languages: [
            'Hadoop',
            'SQL (SQLite, MySQL, PostgreSQL, etc)',
            'noSQL (MongoDB, etc)',
            'Hadoop',
            'Firebase'
        ],
        title: "database designer",

        discription: "With a passion for database development, I excel in designing efficient structures, optimizing query performance, and ensuring data integrity and security.",
    }, 
    {
        icon: MdOutlineDeveloperMode,
        languages:
            ["Vue JS", "React JS", "Angular (V2-V14)", "Node JS", "Django", "Laravel", "Flask", "Yii Framework (V1&2)", "Codeigniter", "UI/UX", "CakePHP"],
        title: "web & mobile developer",
        discription: "With expertise in web and mobile development, I excel in crafting user-friendly interfaces, optimizing performance, and ensuring seamless functionality across various devices and platforms.",
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
        discription: "As a DevOps professional, I specialize in automating software delivery, implementing robust infrastructure, and ensuring seamless deployment, monitoring, and scaling of applications.",
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
        discription: "With a strong foundation in data science, I leverage advanced analytics techniques to extract valuable insights from diverse datasets and develop predictive models for informed decision-making.",
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
        discription: "As a graphic designer, I create visually captivating designs, combining aesthetics and functionality to deliver impactful visual solutions across various mediums.",
    },
    {
        icon: TfiWrite,
        languages: [
            "Thesis Writing",
            "Report Writing",
            "Academic Writing",
            "driving lead content",
            "Value-added content",
            "Plagiarism-free content",
            "Correct grammar",
            "Brand awareness",
            "Keyword search",
        ],
        title: "content writer",
        discription: "As a content writer, I excel in crafting engaging and persuasive content, delivering compelling narratives that resonate with the target audience and drive desired actions.",
    }]
    return (
        <Container className="max-w-[1040px] mt-8" id="services">
            <Slide direction="down" className="cardBox">
                <span className="text-gray-200 text-xl font-bold">
                     MY SERVICES
                </span >
                <h1 className="text-gray-200 pt-0 mb-2">What I Do</h1>
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
  margin: 5rem auto 0 auto;
  padding: 0rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  gap: 1rem;
`;
