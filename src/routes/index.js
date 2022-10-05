import React from 'react';
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import profileImage from '../img/profile.svg'
import profileImageBlack from '../img/profile-black.svg'
import projectImage from '../img/project.svg'
import projectImageBlack from '../img/project-black.svg'
import Projects from "../components/Projects/Projects";




export const privateRoute = [
    {
        path: '/',
        component: Login,
        exact: true
    }
]

export const userRoute = [
    {
        path: '/profile',
        component: Profile,
        exact:true,
        name: 'Profile',
        image: profileImage,
        imageBlack:profileImageBlack
    },
    {
        path: '/projects',
        component: Projects,
        exact:true,
        name: 'Projects',
        image: projectImage,
        imageBlack: projectImageBlack
    }
]
