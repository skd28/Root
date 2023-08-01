"use client"


import Slider from './Slider'

const image = [
    {
        "data": [
            {
                "id": 1,
                "attributes": {
                    "name": "Datacenter Transformation",
                    "description": "Multiple Public Clouds | Hosted Private Clouds | Colocation Services | Migration & consolidation | Cross Connects | Cloud Management Platform |24*7 Managed Services | Security Services",
                    "createdAt": "2023-07-21T07:25:43.688Z",
                    "updatedAt": "2023-07-26T09:09:54.990Z",
                    "publishedAt": "2023-07-26T09:02:45.996Z",
                    "Imglink": "https://img1.wsimg.com/isteam/ip/13a2c31f-e33b-4354-9bb3-fd03497d3bf5/datacenter.jpg/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
                    "giFLink": "http://localhost:1337/uploads/data_center_2c33857b7d.gif",
                    "hidergiflink": "http://localhost:1337/uploads/hide_gif_c0bb930c4f.gif"
                }
            },
            {
                "id": 3,
                "attributes": {
                    "name": "Integration & Deployment",
                    "description": "Planning – Architecture | Detailed Network designing | Implementation (e.g., plan, install, configure, customize, test, tune, stage and deploy) | Rapid deployment & network rollouts | Operational services and project management services.",
                    "createdAt": "2023-07-21T10:02:03.274Z",
                    "updatedAt": "2023-07-26T09:10:34.231Z",
                    "publishedAt": "2023-07-21T10:02:05.996Z",
                    "Imglink": "https://img1.wsimg.com/isteam/ip/13a2c31f-e33b-4354-9bb3-fd03497d3bf5/integrate.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:776,h:388,cg:true",
                    "giFLink": "http://localhost:1337/uploads/integration_gif_1d3ef924a0.gif",
                    "hidergiflink": "http://localhost:1337/uploads/hide_gif_c0bb930c4f.gif"
                }
            },
            {
                "id": 4,
                "attributes": {
                    "name": "Networking",
                    "description": "SD-WAN | Software Defined Access | DNA Analytics and Assurance | Enterprise Network Security | Wireless and Mobility | Meraki cloud-managed networking | Routing & Switching | Active/Passive Networking",
                    "createdAt": "2023-07-21T10:55:23.881Z",
                    "updatedAt": "2023-07-26T09:11:22.301Z",
                    "publishedAt": "2023-07-21T10:55:25.556Z",
                    "Imglink": "https://img1.wsimg.com/isteam/ip/13a2c31f-e33b-4354-9bb3-fd03497d3bf5/networking.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:776,h:388,cg:true",
                    "giFLink": "http://localhost:1337/uploads/networking_e78d9471d6.gif",
                    "hidergiflink": "http://localhost:1337/uploads/hide_gif_c0bb930c4f.gif"
                }
            },
            {
                "id": 6,
                "attributes": {
                    "name": "Security",
                    "description": "Endpoint Security | Next-Gen Firewall | Next-Gen Antivirus | Encryption | DLP | Mobile Security | Advanced Threat Protection | 2 Factor Authentication | Wireless Network Security | Email & Web Security | SIEM | Virtual Firewall | Cloud security | Web Application Firewall | DDos",
                    "createdAt": "2023-07-21T11:02:49.054Z",
                    "updatedAt": "2023-07-26T09:12:10.022Z",
                    "publishedAt": "2023-07-21T11:02:52.062Z",
                    "Imglink": "https://img1.wsimg.com/isteam/ip/13a2c31f-e33b-4354-9bb3-fd03497d3bf5/security.jpg/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
                    "giFLink": "http://localhost:1337/uploads/security_lock_59534a7a02.gif",
                    "hidergiflink": "http://localhost:1337/uploads/hide_gif_c0bb930c4f.gif"
                }
            },
            {
                "id": 2,
                "attributes": {
                    "name": "Server, Storage & Backup",
                    "description": "Rack/Tower Servers | SanDisk DAS Cache | All-Flash & Hybrid Storage | Software-Defined Storage | Midrange Enterprise Storage | SAN Switch | High Availability | Data Backup & Recovery.",
                    "createdAt": "2023-07-21T07:58:21.116Z",
                    "updatedAt": "2023-07-26T09:12:47.896Z",
                    "publishedAt": "2023-07-21T07:58:22.886Z",
                    "Imglink": "https://img1.wsimg.com/isteam/stock/Neey3d8/:/cr=t:12.4%25,l:0%25,w:100%25,h:75.21%25/rs=w:776,h:388,cg:true",
                    "giFLink": "http://localhost:1337/uploads/server_storage_4612608c88.gif",
                    "hidergiflink": "http://localhost:1337/uploads/hide_gif_c0bb930c4f.gif"
                }
            },
            {
                "id": 5,
                "attributes": {
                    "name": "Virtualization",
                    "description": "Virtualization Consulting | Server Virtualization | Virtual Desktop Infrastructure (VDI) | Software-Defined Data Center | Data Center Virtualization and Cloud Infrastructure | Hyper Converged Infrastructure | NSX | Workspace One (Airwatch).",
                    "createdAt": "2023-07-21T11:00:33.482Z",
                    "updatedAt": "2023-07-26T09:13:22.981Z",
                    "publishedAt": "2023-07-21T11:00:40.269Z",
                    "Imglink": "https://img1.wsimg.com/isteam/ip/13a2c31f-e33b-4354-9bb3-fd03497d3bf5/virtualization.jpg/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388",
                    "giFLink": "http://localhost:1337/uploads/virtulization_a70c48d754.gif",
                    "hidergiflink": "http://localhost:1337/uploads/hide_gif_c0bb930c4f.gif"
                }
            }
        ],
        "meta": {
            "pagination": {
                "page": 1,
                "pageSize": 25,
                "pageCount": 1,
                "total": 6
            }
        }
    }
];
function Solutions() {
    return (
        <>
            <Slider image={image[0].data} />
        </>
    )
}

export default Solutions