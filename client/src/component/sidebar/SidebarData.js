import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { isAuth } from '../../action/authAcation';
import * as BSicon from "react-icons/bs";



export const UserSidebarData = [


  {
    title: 'Home',
    path: '/user',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Results ',
    path: `/results`,
    icon: <BSicon.BsFillPieChartFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Registration ',
    path: `/companyu`,
    icon: <AiIcons.AiFillEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule',
    path: `/schedule`,
    icon: <BSicon.BsFillCalendarFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Training',
    path: `/training`,
    icon: <BSicon.BsTools/>,
    cName: 'nav-text'
  },
 

  {
    title: 'Statistics ',
    path: `/statistics`,
    icon: <BSicon.BsFileEarmarkCode/>,
    cName: 'nav-text'
  }
 
  
  
];
export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'All Students',
    path: '/students',
    icon: <AiIcons.AiOutlineAudit/>,
    cName: 'nav-text'
  },
  {
    title: 'Registrations',
    path: '/company_reg/:id',
    icon: <AiIcons.AiFillEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Add Company',
    path: '/addcompany',
    icon: <BSicon.BsFileEarmarkPlus/>,
    cName: 'nav-text'
  },
  {
    title: 'Add Training',
    path: '/add_training',
    icon: <BSicon.BsTools/>,
    cName: 'nav-text'
  },
  {
    title: 'Add Schedule',
    path: '/add_schedule',
    icon: <BSicon.BsFillCalendarFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Statistics',
    path: '/add_stat',
    icon: <BSicon.BsFillBarChartFill />,
    cName: 'nav-text'
  },
 
  
];
export const HomeSidebarData = [
  {
    title: 'Sign In',
    path: '/signin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Up',
    path: '/signup',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
 
 
];
