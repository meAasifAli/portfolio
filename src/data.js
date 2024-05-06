import home from './assets/home.png'
import about from './assets/about.webp'
import exp from './assets/exp.png'
import service from './assets/service2.png'
import project from './assets/project1.png'
import contact from './assets/contact2.webp'


import mchat1 from './assets/mern_chat/chat1.png'
import netflix1 from './assets/netflix/netflix1.png'
import shop1 from './assets/shop/shop1.png'
import crypto1 from "./assets/crypto/crypto1.png"
import pms1 from './assets/pms/pms1.png'
import crud1 from './assets/crud/crud1.png'
import weather1 from './assets/weather/weather1.png'
import amazon1 from './assets/amazon/amazon1.png'
import atm1 from './assets/atm/atm1.png'
import ecom1 from './assets/ecom_assets/ecom1.png'
import todo from "./assets/todo.png"
import social from './assets/social.png'

export const navData = [
    {
        id: 1,
        img: home,
        title: "Home",
        href: "#home"
    }
    ,
    {
        id: 2,
        img: about,
        title: "About",
        href: "#about"
    },
    {
        id: 3,
        img: exp,
        title: "Experience",
        href: "#experience"
    },
    {
        id: 4,
        img: service,
        title: "Services",
        href: "#services"
    },
    {
        id: 5,
        img: project,
        title: "Projects",
        href: "#projects"
    },
    {
        id: 6,
        img: contact,
        title: "Contact",
        href: "#contact"
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
        title: "Html",
        progressVal: 80,
        src: "https://clipartcraft.com/images/html5-logo-png-transparent-5.png"
    },
    {
        id: 2,
        title: "Css",
        progressVal: 60,
        src: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
    },
    {
        id: 3,
        title: "Js",
        progressVal: 70,
        src: "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png"
    },
    {
        id: 4,
        title: "Python",
        progressVal: 50,
        src: "https://www.pngall.com/wp-content/uploads/5/Python-Transparent.png"
    },
    {
        id: 6,
        title: "React",
        progressVal: 70,
        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
        id: 7,
        title: "Mysql",
        progressVal: 50,
        src: "https://www.pngplay.com/wp-content/uploads/7/Mysql-Logo-PNG-Photos.png"
    },
    {
        id: 8,
        title: "Tailwind",
        progressVal: 60,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
    },
    {
        id: 9,
        title: "MongoDB",
        progressVal: 70,
        src: "https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png"
    },
    {
        id: 11,
        title: "Firebase",
        progressVal: 60,
        src: "https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png"
    },
    {
        id: 12,
        title: "REST API",
        progressVal: 80,
        src: "https://icon-library.com/images/rest-api-icon/rest-api-icon-8.jpg"
    },
    {
        id: 13,
        title: "Node.js",
        progressVal: 60,
        src: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
    },
    {
        id: 14,
        title: "React Native/Expo",
        progressVal: 60,
        src: "https://shopify.github.io/react-native-skia/img/logo.png"
    },
    {
        id: 14,
        title: "Postgresql",
        progressVal: 60,
        src: "https://cdn.freebiesupply.com/logos/thumbs/2x/postgresql-logo.png"
    },
    {
        id: 15,
        title: "Docker",
        progressVal: 50,
        src: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png"
    },
    {
        id: 16,
        title: "Github",
        progressVal: 60,
        src: "https://www.shareicon.net/data/512x512/2015/09/25/107141_network_512x512.png"
    }
]

export const projectsData = [

    {
        id: 2,
        title: "Netflix-UI Clone",
        DeployURL: "https://netflix-application-sigma.vercel.app",
        GitURl: "https://github.com/Asif45uaha/netflix-app.git",
        content: "A Basic Netflix-UI clone developed Using Reactjs and TailwindCss for Frontend as well as Firebase For Backend",
        category: "fullstack",
        thumbnail: netflix1
    }
    ,

    {
        id: 3,
        title: "Mini Shopping Cart",
        DeployURL: "https://shop-gules-five.vercel.app",
        GitURl: "https://github.com/Asif45uaha/shopping-cart-client.git",
        content: "A Basic Full-Responsive Mini-Cart Application developed Using Reactjs,chakraUI for Frontend as well as Nodejs For Razorpay Payment Integration",
        category: "fullstack",
        thumbnail: shop1
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
        thumbnail: crypto1
    },
    {
        id: 5,
        title: "Project Mgmnt System",
        DeployURL: "https://project-mgmt-tool-liard.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Project-management-Tool.git",
        content: "A Basic Project mgmt System Application developed Using Reactjs and TailwindCss for Frontend as well as Firebase For Backend",
        category: "fullstack",
        thumbnail: pms1
    },
    {
        id: 6,
        title: "CRUD operations",
        DeployURL: "https://crud-five-ashy.vercel.app",
        GitURl: "https://github.com/Asif45uaha/crud_client.git",
        content: "A basic CRUD Application developed Using Reactjs and TailwindCss for Frontend as well as Nodejs and MongoDb For Backend",
        category: "fullstack",
        thumbnail: crud1
    },
    {
        id: 7,
        title: "Weather App",
        DeployURL: "https://weather-app-react-navy-eight.vercel.app",
        GitURl: "https://github.com/Asif45uaha/react-weather-app.git",
        content: "A basic Weather Application developed Using Reactjs and TailwindCss for Frontend as well as openWeather Api for pulling out the Realtime Weather Data",
        category: "frontend",
        thumbnail: weather1
    },
    {
        id: 8,
        title: "Amazon Clone",
        DeployURL: "https://amazon-amber-zeta.vercel.app",
        GitURl: "https://github.com/Asif45uaha/amazon_clone.git",
        content: "Amazon Clone developed Using Reactjs and TailwindCss for Frontend as well as Redux/toolkit for state Managament",
        category: "frontend",
        thumbnail: amazon1
    },
    {
        id: 9,
        title: "ATM Machine",
        DeployURL: "https://atm-m0v6fo0li-asifali45.vercel.app",
        GitURl: "https://github.com/Asif45uaha/ATM-Project.git",
        content: "ATM Clone Built using Html,Css and Js,Users can Credit,deposit the Amount,Make Hassle-Free balance Enquiries as well as can apply for instant Loan",
        category: "frontend",
        thumbnail: atm1

    },
    {
        id: 10,
        title: "Ecommerce APP",
        DeployURL: "https://mern-ecommerce-l443.onrender.com",
        GitURl: "https://github.com/Asif45uaha/mern_ecommerce.git",
        content: "Ecommerce Application Built Using Mern Stack Technologies,Users can add products to their cart/wishlist and can purchase them.This App has Test payment Integration as well.Users Can filter Different Products as well as can search Several Products in this App. Users can track their Orders as Well",
        category: "fullstack",
        thumbnail: ecom1
    },
    {
        id: 11,
        title: "Full Stack Chatting web App",
        DeployURL: "https://mern-ecommerce-l443.onrender.com",
        GitURl: "https://github.com/Asif45uaha/mern_chat.git",
        content: "Full Stack Chatting App Built using MERN stack,with real time mesaging features",
        category: "fullstack",
        thumbnail: mchat1
    },
    {
        id: 12,
        title: "Full Stack Todo App",
        DeployURL: "https://full-stack-todo-app-azure.vercel.app",
        GitURl: "https://github.com/Asif45uaha/Full_stack_Todo_App.git",
        content: "Full Todo App Built using React with Typescript and Firebase,Users can add Todos,modify the status of the todos,Users can edit as well as delete todos",
        category: "fullstack",
        thumbnail: todo
    },
    {
        id: 12,
        title: "Full Stack Social Media App",
        DeployURL: "https://next-14-social.vercel.app/profile/Aasif",
        GitURl: "https://github.com/Asif45uaha/NEXT_14_SOCIAL.git",
        content: "Full Social Media App Built using Next.js 14 ,Mongodb  and ChakraUI,Users can follow or unfollow other users, Users can add their post to their timeline, Users can edit as well  as delete their own posts and much more",
        category: "fullstack",
        thumbnail: social
    }

]




export const serviceData = [
    {
        id: 1,
        icon: "https://www.pngarts.com/files/7/Graphic-Web-Design-PNG-Transparent-Image.png",
        title: "Web Designer",
        desc: "I have designed many applications from medium scale to large scale apllications,Some Web Designing Technologies I mostly use are Css, TailwindCss, ChakraUi and Sass.Apps I Designed are Chat App, MERN- Stack CRUD App, Netflix Clone Ui etc"
    },
    {
        id: 2,
        icon: "https://th.bing.com/th/id/R.fb8bf5d0bb6682fab28bc6d9004b24b8?rik=3sp%2fMN0NwWGimA&riu=http%3a%2f%2fblog.contus.com%2fwp-content%2fuploads%2f2017%2f11%2ffull-stack-developer.png&ehk=P1GZnjGy6uOk2av1svTWKaHVapjoGn7dAcMVNPmTLaM%3d&risl=&pid=ImgRaw&r=0",
        title: "Web Developer",
        desc: "I have Got Good Experience in Web Development,Basically I work with Both FrontEnd and BackEnd part of the Application Some Technologies I use For Web Development are Reactjs, javascript, Python etc."
    },
    {
        id: 3,
        icon: "https://ih1.redbubble.net/image.117446576.3897/sticker,375x360.u13.png",
        title: "FullStack Developer",
        desc: "I offer backend Service as well For implementing Backend Mostly i use Mern Stack or Firebase or sometimes Django or Flask For this purpose or occassionally I use Php or Nodejs"
    },
    {
        id: 4,
        icon: "https://th.bing.com/th/id/R.8f6d437d59f2d47bac877d0dbe8fa818?rik=gZXWxeB%2bnIs92Q&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fAndroid-PNG-Pic.png&ehk=728NYB0pZNq%2fcR%2b7uV%2fi1RIEhytDtF4eHuOcraUY4mA%3d&risl=&pid=ImgRaw&r=0",
        title: "App Designer",
        desc: "I have Designed many applications from medium scale to large scale applications,Some App Designing Technologies I mostly use are Figma, Adobe Xd, Sketch and Adobe Illustrator."
    },
    {
        id: 5,
        icon: "https://cdn0.iconfinder.com/data/icons/flat-round-system/512/apple-1024.png",
        title: "App Developer",
        desc: "I have Developed small level  applications,Some .Some of them are Calculator App and Weather App using the React native Expo Mobile App Technology"
    },
    {
        id: 6,
        icon: "https://th.bing.com/th/id/R.c963626c145ea660ba7ceee666789c0a?rik=Ui79F6V0E%2bmFYw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fGithub-PNG-Image.png&ehk=SFNlTltedev2eggRq1KzxVrr35NixG8ITlAbFT%2bVMoY%3d&risl=&pid=ImgRaw&r=0",
        title: "Version Control",
        desc: "I have Experience in Version Control using Github,I have also Experience in Deploying my projects using render and vercel cloud deployment Platforms"
    }

]