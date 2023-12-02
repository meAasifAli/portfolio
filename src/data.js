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

import chat1 from './assets/chat/chat1.png'
import chat2 from './assets/chat/chat2.png'
import netflix1 from './assets/netflix/netflix1.png'
import netflix2 from './assets/netflix/netflix2.png'
import netflix3 from './assets/netflix/netflix3.png'
import netflix4 from './assets/netflix/netflix4.png'
import shop1 from './assets/shop/shop1.png'
import shop2 from './assets/shop/shop2.png'
import shop3 from './assets/shop/shop3.png'
import crypto1 from "./assets/crypto/crypto1.png"
import crypto2 from "./assets/crypto/crypto2.png"
import crypto3 from "./assets/crypto/crypto3.png"
import crypto4 from "./assets/crypto/crypto4.png"
import crypto5 from "./assets/crypto/crypto5.png"
import pms1 from './assets/pms/pms1.png'
import pms2 from './assets/pms/pms2.png'
import crud1 from './assets/crud/crud1.png'
import crud2 from './assets/crud/crud2.png'
import crud3 from './assets/crud/crud3.png'
import weather1 from './assets/weather/weather1.png'
import weather2 from './assets/weather/weather2.png'
import amazon1 from './assets/amazon/amazon1.png'
import amazon2 from './assets/amazon/amazon2.png'
import amazon3 from './assets/amazon/amazon3.png'
import amazon4 from './assets/amazon/amazon4.png'
import amazon5 from './assets/amazon/amazon5.png'
import atm1 from './assets/atm/atm1.png'
import atm2 from './assets/atm/atm2.png'
import atm3 from './assets/atm/atm3.png'
import atm4 from './assets/atm/atm4.png'
import atm5 from './assets/atm/atm5.png'

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
        title: "React Chat-App",
        DeployURL: "https://chat-eta-sable.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Chat_app",
        content: "A Basic Text Chatting Application developed Using Reactjs and daisyUI for Frontend as well as Firebase For Backend",
        category: "fullstack",
        carousel: [
            chat1, chat2
        ]

    },
    {
        id: 2,
        title: "Netflix-UI Clone",
        DeployURL: "https://netflix-application-sigma.vercel.app",
        GitURl: "https://github.com/Asif45uaha/netflix-app.git",
        content: "A Basic Netflix-UI clone developed Using Reactjs and TailwindCss for Frontend as well as Firebase For Backend",
        category: "fullstack",
        carousel: [
            netflix1, netflix2, netflix3, netflix4
        ]
    }
    ,

    {
        id: 3,
        title: "Mini Shopping Cart",
        DeployURL: "https://shop-gules-five.vercel.app",
        GitURl: "https://github.com/Asif45uaha/shopping-cart-client.git",
        content: "A Basic Full-Responsive Mini-Cart Application developed Using Reactjs,chakraUI for Frontend as well as Nodejs For Razorpay Payment Integration",
        category: "fullstack",
        carousel: [
            shop1, shop2, shop3
        ]
    }
    ,
    {
        id: 4,
        imgURl: crypto,
        title: "Crypto App",
        DeployURL: "https://crypto-app-one-blush.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Crypto_app.git",
        content: "A Basic Crypto Application developed Using Reactjs and chakraUI for its Development",
        category: "frontend",
        carousel: [
            crypto1, crypto2, crypto3, crypto4, crypto5
        ]
    },
    {
        id: 5,
        title: "Project Mgmnt System",
        DeployURL: "https://project-mgmt-tool-liard.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Project-management-Tool.git",
        content: "A Basic Project mgmt System Application developed Using Reactjs and TailwindCss for Frontend as well as Firebase For Backend",
        category: "fullstack",
        carousel: [
            pms1, pms2
        ]
    },
    {
        id: 6,
        title: "CRUD operations",
        DeployURL: "https://crud-five-ashy.vercel.app",
        GitURl: "https://github.com/Asif45uaha/crud_client.git",
        content: "A basic CRUD Application developed Using Reactjs and TailwindCss for Frontend as well as Nodejs and MongoDb For Backend",
        category: "fullstack",
        carousel: [
            crud1, crud2, crud3
        ]
    },
    {
        id: 7,
        title: "Weather App",
        DeployURL: "https://weather-app-react-navy-eight.vercel.app",
        GitURl: "https://github.com/Asif45uaha/react-weather-app.git",
        content: "A basic Weather Application developed Using Reactjs and TailwindCss for Frontend as well as openWeather Api for pulling out the Realtime Weather Data",
        category: "frontend",
        carousel: [
            weather1, weather2
        ]
    },
    {
        id: 8,
        title: "Amazon Clone",
        DeployURL: "https://amazon-amber-zeta.vercel.app",
        GitURl: "https://github.com/Asif45uaha/amazon_clone.git",
        content: "Amazon Clone developed Using Reactjs and TailwindCss for Frontend as well as Redux/toolkit for state Managament",
        category: "frontend",
        carousel: [
            amazon1, amazon2, amazon3, amazon4, amazon5
        ]
    },
    {
        id: 9,
        title: "ATM Machine",
        DeployURL: "https://atm-m0v6fo0li-asifali45.vercel.app",
        GitURl: "https://github.com/Asif45uaha/ATM-Project.git",
        content: "ATM Clone Built using Html,Css and Js,Users can Credit,deposit the Amount,Make Hassle-Free balance Enquiries as well as can apply for instant Loan",
        category: "frontend",
        carousel: [
            atm1, atm2, atm3, atm4, atm5
        ]

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
        title: "FullStack Developer",
        desc: "I offer backend Service as well For implementing Backend Mostly i use Mern Stack or Firebase or sometimes Django or Flask For this purpose or occassionally I use Php or Nodejs"
    },

]