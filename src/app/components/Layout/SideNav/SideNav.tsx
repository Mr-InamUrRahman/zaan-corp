'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation'
import Style from './aside.module.css'
import Button from '../../ui-controls/Button/Button';
import * as Icons from '../../../resources/Icons/Icons';
import { useEffect, useState } from 'react';


const SideNav =(Nav:any)=> {
    const activeSegment = useSelectedLayoutSegment();

    Nav = [
        {  
            url: "/",
            icon: Icons.Dashboad(),
            title: "Dashboard",
            targetSegment: null
        },
        { 
            url: "/workflow",
            icon: Icons.WorkFlow(),
            title: "Workflow",
            targetSegment: 'workflow'
        },
        { 
            url: "#",
            icon: Icons.Calendar() ,
            title: "Calendar" 
        },
        { 
            url: "#",
            icon: Icons.Social() ,
            title: "SocialRM" 
        },
        { 
            url: "#",
            icon: Icons.Metrics() ,
            title: "Metrics" 
        },
        { 
            url: "#",
            icon: Icons.Leads() ,
            title: "Leads" 
        },
        { 
            url: "#",
            icon: Icons.Users() ,
            title: "Users" 
        },
        { 
            url: "#",
            icon: Icons.Notifications() ,
            title: "Notifications" 
        },
        { 
            url: "#",
            icon: Icons.Documents() ,
            title: "Documents" 
        },
        { 
            url: "#",
            icon: Icons.Segments() ,
            title: "Segments" 
        },
        { 
            url: "#",
            icon: Icons.Company() ,
            title: "Company" 
        },
    ];

    const [showMe, setShowMe] = useState(false);
    const toggle =()=>{
        setShowMe(!showMe);
    }
    useEffect(() => {
        document.body.className = showMe ? 'drawerClose' : 'drawerOpen';
    });

    return (
        <aside className={`${Style.aside} aside border-r ${showMe?Style.drawerClose:Style.drawerOpen}`}>
            <div className={`${Style.asideHeader} border-b`}>
                
                <Button Label="Zaan Corp" Icon={Icons.AngleDown()} BtnStyleClass={`flex items-center circle circle-md circle-green ${Style.logo}`}/>
                <Button BtnStyleClass={`${showMe?Style.Close:Style.Open}`} Icon={Icons.DubbleAngle()} Click={toggle}/>
            </div>
            <div className={`aside-body custom-scroll ${Style.asideBody}`}>
                <nav className={`${Style.mainMenu}`}>
                    {Nav.map((Nav:any, i:any) => (
                        <Link  key={i} href={Nav.url} className={(activeSegment === Nav.targetSegment) ? `${Style.active}` : ''}>
                          
                            <i>{Nav.icon}</i>
                            <span>{Nav.title}</span>
                    
                        </Link >
                    ))}
                </nav>
            </div>
        </aside>
    )


    
  }
export default SideNav; 