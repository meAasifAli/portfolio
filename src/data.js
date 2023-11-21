import home from './assets/home.png'
import about from './assets/about.webp'
import exp from './assets/exp.png'
import service from './assets/service2.png'
import project from './assets/project1.png'
import contact from './assets/contact2.webp'

import Cp from './assets/c-document.png';
import Py from './assets/python.png';
import html from './assets/html1.png';
import Javascript from './assets/js1.png';
import react from './assets/react.png';
import mysql from './assets/mysql.png'
import tailwind from './assets//tailwind1.png'
import Css from './assets/css.jpg'
import Mongo from "./assets/mongodb1.png"

import designer from "./assets/web_design.png"
import developer from './assets/web_developer.webp'
import backend from './assets/backendimg.png'

import chat from './assets/chat.png'
import netflix from './assets/netflix.png'
import shop from './assets/shop.png'
import crypto from "./assets/coin.png"
import pms from './assets/pms.png'
import crud from './assets/crud.png'
export const drawerData = [
    {
        id: 1,
        img: home,
        title: "Home",
        href: "home"
    }
    ,
    {
        id: 2,
        img: about,
        title: "About",
        href: "about"
    },
    {
        id: 3,
        img: exp,
        title: "Experience",
        href: "experience"
    },
    {
        id: 4,
        img: service,
        title: "Services",
        href: "services"
    },
    {
        id: 5,
        img: project,
        title: "Projects",
        href: "projects"
    },
    {
        id: 6,
        img: contact,
        title: "Contact",
        href: "contact"
    }
]
export const eduData = [{
    id: 1,
    std: "10th",
    percentage: 84,
    board: "Jkbose",
    year: 2016,
    state: "J&K",
    subjects: [
        "Maths",
        "Physics",
        "Biology",
        "Chemistry",
        "English",
        "Urdu"
    ]
},
{
    id: 2,
    std: "12th",
    percentage: 75,
    board: "Jkbose",
    year: 2018,
    state: "J&K",
    subjects: [
        "Maths",
        "Physics",
        "Chemistry",
        "English",
        "Environmental Science",
        "Practical Physics"

    ]
},
{
    id: 3,
    std: "B.Tech",
    percentage: 68,
    board: "KTU",
    year: 2023,
    state: "Kerala",
    subjects: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Web Programming",
        "Artificial Intelligence",
        "Distributed Computing",
        "Soft Computing"
    ]
}
]

export const expData = [
    {
        id: 1,
        img: html,
        title: "Html",
        progressVal: 80,
    },
    {
        id: 2,
        img: Css,
        title: "Css",
        progressVal: 60,
    },
    {
        id: 3,
        img: Javascript,
        title: "Js",
        progressVal: 70,
    },
    {
        id: 4,
        img: Py,
        title: "Python",
        progressVal: 50,
    },
    {
        id: 5,
        img: Cp,
        title: "C",
        progressVal: 70,
    },
    {
        id: 6,
        img: react,
        title: "React",
        progressVal: 70,
    },
    {
        id: 7,
        img: mysql,
        title: "Mysql",
        progressVal: 50,
    },
    {
        id: 8,
        img: tailwind,
        title: "TailwindCss",
        progressVal: 60,
    },
    {
        id: 9,
        img: Mongo,
        title: "MongoDB",
        progressVal: 70,
    },
]

export const projectsData = [
    {
        id: 1,
        imgURl: chat,
        title: "React Chat-App",
        DeployURL: "https://chat-eta-sable.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Chat_app",
        content: "A Basic Text Chatting Application developed Using Reactjs and daisyUI for Frontend as well as Firebase For Backend",
        category: "frontend"

    },
    {
        id: 2,
        imgURl: netflix,
        title: "Netflix-UI Clone",
        DeployURL: "https://netflix-application-sigma.vercel.app",
        GitURl: "https://github.com/Asif45uaha/netflix-app.git",
        content: "A Basic Netflix-UI clone developed Using Reactjs and TailwindCss for Frontend as well as Firebase For Backend",
        category: "fullstack"
    }
    ,

    {
        id: 3,
        imgURl: shop,
        title: "Mini Shopping Cart",
        DeployURL: "https://shop-gules-five.vercel.app",
        GitURl: "https://github.com/Asif45uaha/shopping-cart-client.git",
        content: "A Basic Full-Responsive Mini-Cart Application developed Using Reactjs,chakraUI for Frontend as well as Nodejs For Razorpay Payment Integration",
        category: "fullstack"
    }
    ,
    {
        id: 4,
        imgURl: crypto,
        title: "Crypto App",
        DeployURL: "https://crypto-app-one-blush.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Crypto_app.git",
        content: "A Basic Crypto Application developed Using Reactjs and chakraUI for its Development",
        category: "frontend"
    },
    {
        id: 5,
        imgURl: pms,
        title: "Project Mgmnt System",
        DeployURL: "https://project-mgmt-tool-liard.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Project-management-Tool.git",
        content: "A Basic Project mgmt System Application developed Using Reactjs and TailwindCss for Frontend as well as Firebase For Backend",
        category: "fullstack"
    },
    {
        id: 6,
        imgURl: crud,
        title: "CRUD operations",
        DeployURL: "https://crud-five-ashy.vercel.app",
        GitURl: "https://github.com/Asif45uaha/crud_client.git",
        content: "A basic CRUD Application developed Using Reactjs and TailwindCss for Frontend as well as Nodejs and MongoDb For Backend",
        category: "fullstack"
    }

]

export const serviceData = [
    {
        id: 1,
        icon: designer,
        title: "Web Designer",
        desc: "I have designed many applications from medium scale to large scale apllications,Some Web Designing Technologies I mostly use are Css, TailwindCss, ChakraUi and Sass.Apps I Designed are Chat App, MERN- Stack CRUD App, Netflix Clone Ui etc"
    },
    {
        id: 2,
        icon: developer,
        title: "Web Developer",
        desc: "I have Got Good Experience in Web Development,Basically I work with Both FrontEnd and BackEnd part of the Application Some Technologies I use For Web Development are Reactjs, javascript, Python etc."
    },
    {
        id: 3,
        icon: backend,
        title: "Backend Developer",
        desc: "I offer backend Service as well For implementing Backend Mostly i use Mern Stack or Firebase or sometimes Django or Flask For this purpose or occassionally I use Php or Nodejs"
    },

]