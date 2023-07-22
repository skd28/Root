"use client"
import React, { useState, useEffect } from 'react';
const data1 = {
    "data": [
        {
            "id": 1,
            "attributes": {
                "name": "Cyber Security Audit",
                "description": "It is designed to be a comprehensive review and analysis of business's IT infrastructure. It identifies threats and vulnerabilities, exposing weaknesses and high-risk practices.",
                "createdAt": "2023-07-21T10:06:15.742Z",
                "updatedAt": "2023-07-21T10:06:17.371Z",
                "publishedAt": "2023-07-21T10:06:17.369Z"
            }
        },
        {
            "id": 3,
            "attributes": {
                "name": "Database Audit",
                "description": "As the privacy regulations are getting increasingly complex the database audits have become the key compliance components and requires to be done periodically.",
                "createdAt": "2023-07-21T10:10:42.210Z",
                "updatedAt": "2023-07-21T10:10:51.423Z",
                "publishedAt": "2023-07-21T10:10:51.420Z"
            }
        },
        {
            "id": 4,
            "attributes": {
                "name": "Backup Audit",
                "description": "Backups have become vital for business continuity during IT security breach. In this audit we check what and how data is being protected and how it can we restored.",
                "createdAt": "2023-07-21T10:11:15.005Z",
                "updatedAt": "2023-07-21T10:11:18.926Z",
                "publishedAt": "2023-07-21T10:11:18.922Z"
            }
        },
        {
            "id": 5,
            "attributes": {
                "name": "Data Migration Audit",
                "description": "The data migration audit ensures the integrity of migrated data, control framework in the new environment, business continuity by assessing security measures and effectiveness of migration methodology and processes.",
                "createdAt": "2023-07-21T10:11:42.442Z",
                "updatedAt": "2023-07-21T10:11:45.950Z",
                "publishedAt": "2023-07-21T10:11:45.945Z"
            }
        },
        {
            "id": 6,
            "attributes": {
                "name": "Social Media Access  and Usage Audit",
                "description": "We audit the implementation veracity of social media policy within the organization by assessing the process, controls and usage pattern for all the employees including WFH and VPN users.",
                "createdAt": "2023-07-21T10:12:12.289Z",
                "updatedAt": "2023-07-21T10:12:14.073Z",
                "publishedAt": "2023-07-21T10:12:14.071Z"
            }
        },
        {
            "id": 7,
            "attributes": {
                "name": "Firewall Audit",
                "description": "Firewall audit is important to identify vulnerability to IT infrastructure, customizing security policy and report any changes made to firewall.",
                "createdAt": "2023-07-21T10:12:38.087Z",
                "updatedAt": "2023-07-21T10:12:42.200Z",
                "publishedAt": "2023-07-21T10:12:42.197Z"
            }
        },
        {
            "id": 8,
            "attributes": {
                "name": "VPN Audit",
                "description": "The VPN audit is an efficient way to identify vulnerabilities associated with VPN usage, including applications, servers, and the infrastructure so that VPN policy changes can be identified to reduce security threats.",
                "createdAt": "2023-07-21T10:13:07.700Z",
                "updatedAt": "2023-07-21T10:13:11.405Z",
                "publishedAt": "2023-07-21T10:13:11.403Z"
            }
        },
        {
            "id": 9,
            "attributes": {
                "name": "DLP  Audit",
                "description": "As cloud, virtualization and BYOD has become integral to business it becomes imperative to undertake data loss prevention audit to identify, monitor and control sensitive business information.",
                "createdAt": "2023-07-21T10:13:30.944Z",
                "updatedAt": "2023-07-21T10:13:37.189Z",
                "publishedAt": "2023-07-21T10:13:37.186Z"
            }
        },
        {
            "id": 10,
            "attributes": {
                "name": "Operating System & Control Audit",
                "description": "This audit identifies key threat to the operating system and validate the access privileges, password policies, audit trail controls and check for installation of any malicious programs.",
                "createdAt": "2023-07-21T10:17:30.019Z",
                "updatedAt": "2023-07-21T10:17:31.012Z",
                "publishedAt": "2023-07-21T10:17:31.007Z"
            }
        },
        {
            "id": 11,
            "attributes": {
                "name": "Routers &  Switch Audit",
                "description": "In this Audit we cover all the Routers and Switches which are available in the organization and create a checklist as per the models and its placements.",
                "createdAt": "2023-07-21T10:18:05.700Z",
                "updatedAt": "2023-07-21T10:18:06.331Z",
                "publishedAt": "2023-07-21T10:18:06.327Z"
            }
        },
        {
            "id": 12,
            "attributes": {
                "name": "Mobile device management  and mobile application Management Audit",
                "description": "With increase in usage of mobile devices it becomes important for organization to manage and secure mobile devices. We audit already deployed MDM and MAM solution and create a checklist as per the solutions and its use.",
                "createdAt": "2023-07-21T10:18:35.273Z",
                "updatedAt": "2023-07-21T10:18:36.346Z",
                "publishedAt": "2023-07-21T10:18:36.344Z"
            }
        },
        {
            "id": 13,
            "attributes": {
                "name": "Web Application  Firewall Audit",
                "description": "WAF audit checks the configuration of WAF devices to manage threat to web apps such as XSS, SQL injection and cookie poisoning. We cover all the available WAF devices and to create a checklist and features of respective WAF models.",
                "createdAt": "2023-07-21T10:20:01.106Z",
                "updatedAt": "2023-07-21T10:20:02.113Z",
                "publishedAt": "2023-07-21T10:20:02.110Z"
            }
        },
        {
            "id": 14,
            "attributes": {
                "name": "Network Audit",
                "description": "It determines the health of network infrastructure by collecting information of different network parameters and to resolve discovered issues for optimum network performance and security.",
                "createdAt": "2023-07-21T10:20:29.158Z",
                "updatedAt": "2023-07-21T10:20:30.442Z",
                "publishedAt": "2023-07-21T10:20:30.439Z"
            }
        },
        {
            "id": 15,
            "attributes": {
                "name": "WFH Audit",
                "description": "The pandemic has changed the way of working and with increase in work from home environment and it has become indispensable for businesses to reassess their approach and controls related to addressing work-from-home employees and teams.",
                "createdAt": "2023-07-21T10:20:58.107Z",
                "updatedAt": "2023-07-21T10:20:59.062Z",
                "publishedAt": "2023-07-21T10:20:59.058Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 14
        }
    }
};
// const apiEndpoint = 'Api link'; 

function Cont() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setServices(data1.data);
            // try {

            //     const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            //     await delay(1000); 
            //      const response = await fetch(apiEndpoint);
            //      const data = await response.json();
            //     setServices(data1.data);
            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }
        };

        fetchData();
    }, []);

    return (
        <>

            <div className='text-white text-center items-center'
                style={{
                    background: 'linear-gradient(180deg, #000000 0%, #0B2241 3.05%, #0B2241 107.63%, #0B2241 117.13%)',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {services.map((service) => (
                    <div key={service.id} className='w-1/3 p-8'>
                        <div>
                            <h2 className='text-xl'>{service.attributes.name}</h2>
                        </div>
                        <div className='pt-7'>
                            <p>{service.attributes.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Cont;







