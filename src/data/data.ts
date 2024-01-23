interface Skill {
    title: string;
    img: string;
}

const calculateAge = (birthdate: string) => {
    let birthDate = new Date(birthdate);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let m = currentDate.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export const itemsAbout = [
    {
        title: "Age",
        value: calculateAge("1995-01-06"),
    },
    {
        title: "Degree",
        value: "Computer Science Technician / Systems Engineer",
    },
    {
        title: "Nationality",
        value: "Venezuelan",
    },
    {
        title: "Languages",
        value: "Spanish/English",
    },
];

export const skills: Skill[] = [
    {
        title: "Angular",
        img: "assets/img/skills/angular-new-logo.gif",
    },
    {
        title: "Vue.js",
        img: "assets/img/skills/vue.png",
    },
    {
        title: "React",
        img: "assets/img/skills/react-logo.png",
    },
    {
        title: "Next.js",
        img: "assets/img/skills/next-js-logo.png",
    },
    {
        title: "Ionic",
        img: "assets/img/skills/ionic.png",
    },
    {
        title: "Tailwind",
        img: "assets/img/skills/tailwind.png",
    },
    {
        title: "Bootstrap",
        img: "assets/img/skills/bootstrap.png",
    },
    {
        title: "Material Design",
        img: "assets/img/skills/material-design.png",
    },
    {
        title: "Vuetify",
        img: "assets/img/skills/vuetify.png",
    },
    {
        title: "Material UI",
        img: "assets/img/skills/materialui.png",
    },
    {
        title: "Typescript",
        img: "assets/img/skills/typescript.png",
    },
    {
        title: "Javascript",
        img: "assets/img/skills/javascript.png",
    },
    {
        title: "Node.js",
        img: "assets/img/skills/node.png",
    },
    {
        title: "Vite",
        img: "assets/img/skills/vite.png",
    },
    {
        title: "HTML",
        img: "assets/img/skills/html.png",
    },
    {
        title: "CSS",
        img: "assets/img/skills/css.png",
    },
    {
        title: "Jquery",
        img: "assets/img/skills/jquery.png",
    },
    {
        title: "PHP",
        img: "assets/img/skills/php.png",
    },
    {
        title: "Firebase",
        img: "assets/img/skills/firebase.png",
    },
    {
        title: "Docker",
        img: "assets/img/skills/docker.png",
    },
    {
        title: "GIT",
        img: "assets/img/skills/github.png",
    },
];

export const projects = [
    {
        images: [
            "assets/img/projects/form-slothmove/1.png",
            "assets/img/projects/form-slothmove/2.png",
            "assets/img/projects/form-slothmove/3.png",
            "assets/img/projects/form-slothmove/4.png",
            "assets/img/projects/form-slothmove/5.png",
            "assets/img/projects/form-slothmove/6.png",
            "assets/img/projects/form-slothmove/7.png",
            "assets/img/projects/form-slothmove/8.png",
            "assets/img/projects/form-slothmove/9.png",
            "assets/img/projects/form-slothmove/10.png",
            "assets/img/projects/form-slothmove/11.png",
            "assets/img/projects/form-slothmove/12.png",
            "assets/img/projects/form-slothmove/13.png",
            "assets/img/projects/form-slothmove/14.png",
            "assets/img/projects/form-slothmove/15.png",
        ],
        title: "Form - SlothMove  (Vue.js)",
        description:
            "This application allows users to access an address update service, you can select who you want to inform and the company will update it for you. With SlothMove, you can update your address with: NHS, DVLA,HRMC,Electoral Roll, Student Loans, Banks, Loyalty cards, Charities, Premium Bonds (NS&I), Pensions, Gyms, Mobile, Dentist, TV Licence, Energy providers, Water & sewerage, Break down providers, Home care, Opticians, Pets",
        url: "",
    },
    {
        images: [
            "assets/img/projects/dashboard-slothmove/1.png",
            "assets/img/projects/dashboard-slothmove/2.png",
            "assets/img/projects/dashboard-slothmove/3.png",
            "assets/img/projects/dashboard-slothmove/4.png",
            "assets/img/projects/dashboard-slothmove/5.png",
            "assets/img/projects/dashboard-slothmove/6.png",
            "assets/img/projects/dashboard-slothmove/7.png",
        ],
        title: "Dashboard - SlothMove  (Vue.js)",
        description:
            "This web application allows users to see the progress of their information update request in detail and in real time, with good customer support and timely notifications of any issues.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/backoffice-tandem/1.png",
            "assets/img/projects/backoffice-tandem/2.png",
            "assets/img/projects/backoffice-tandem/3.png",
            "assets/img/projects/backoffice-tandem/4.png",
            "assets/img/projects/backoffice-tandem/5.png",
            "assets/img/projects/backoffice-tandem/6.png",
            "assets/img/projects/backoffice-tandem/7.png",
            "assets/img/projects/backoffice-tandem/8.png",
            "assets/img/projects/backoffice-tandem/9.png",
        ],
        title: "Statistics Administration and Management Platform (Angular)",
        description:
            "Implementation of graphics, consumption of WebSockets for Geolocation, filtering of global data by company, export of data to PDF and Excel, components based on Angular Material, integration with: API REST backend Elixir, Qlick Sense, Angular Google Maps. In this project Rxjs operators are widely used.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/cms-tandem/1.png",
            "assets/img/projects/cms-tandem/2.png",
            "assets/img/projects/cms-tandem/3.png",
            "assets/img/projects/cms-tandem/4.png",
            "assets/img/projects/cms-tandem/5.png",
            "assets/img/projects/cms-tandem/6.png",
        ],
        title: "CMS (Angular) for the Tandem website",
        description:
            "CMS made for loading and managing the content of the TANDEM company’s website, type backoffice, used Angular Material, Bootstrap for the grid, Sweet Alert. Integration with backend made in Elixir.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/clubify/1.png",
            "assets/img/projects/clubify/2.png",
            "assets/img/projects/clubify/3.png",
            "assets/img/projects/clubify/4.png",
            "assets/img/projects/clubify/5.png",
            "assets/img/projects/clubify/6.png",
            "assets/img/projects/clubify/7.png",
            "assets/img/projects/clubify/8.png",
            "assets/img/projects/clubify/9.png",
        ],
        title: "Clubify(Angular - Ionic)",
        description:
            "Landing to promote Clubifys web application, this application supports mailing integrated with a Node.js API.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/sloth-admin-console/1.png",
            "assets/img/projects/sloth-admin-console/2.png",
            "assets/img/projects/sloth-admin-console/3.png",
            "assets/img/projects/sloth-admin-console/4.png",
            "assets/img/projects/sloth-admin-console/5.png",
            "assets/img/projects/sloth-admin-console/6.png",
            "assets/img/projects/sloth-admin-console/7.png",
            "assets/img/projects/sloth-admin-console/8.png",
            "assets/img/projects/sloth-admin-console/9.png",
            "assets/img/projects/sloth-admin-console/10.png",
        ],
        title: "Sloth Admin Console (Vue.js)",
        description:
            "Administrative panel with functionalities ranging from move management, editing of move details, user tracking, user and move reports, partials, template upload for marketing campaign mailings. Also the admin allows you to generate master passwords for user accounts access to the dashboard.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/landing-pullman-bus/1.png",
            "assets/img/projects/landing-pullman-bus/2.png",
            "assets/img/projects/landing-pullman-bus/3.png",
            "assets/img/projects/landing-pullman-bus/4.png",
            "assets/img/projects/landing-pullman-bus/5.png",
        ],
        title: "Landing Pullman Bus(Angular - Ionic)",
        description:
            "Landing to promote the benefits of the Pullman Bus company with the applications (Go Movie - Live GPS) and to request affiliation to it.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/preform-slothmove/1.png",
            "assets/img/projects/preform-slothmove/2.png",
            "assets/img/projects/preform-slothmove/3.png",
            "assets/img/projects/preform-slothmove/4.png",
        ],
        title: "Preform Slothmove (React.js)",
        description:
            "Preform developed for Slothmove's home page, allows the user visiting the home page to pre-fill their data to be redirected to the form with full functionality.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/digital-waiter-landing/1.png",
            "assets/img/projects/digital-waiter-landing/2.png",
            "assets/img/projects/digital-waiter-landing/3.png",
            "assets/img/projects/digital-waiter-landing/4.png",
            "assets/img/projects/digital-waiter-landing/5.png",
        ],
        title: "Digital Waiter Landing (HTML - CSS3 - JS)",
        description:
            "A Landing to promote the Digital Waiter application, a platform that allows automatic attention to the public in restaurants, optimizing processes and reducing waiting times, allowing an improvement in the management of your resources.The platform offers live information of orders, sales reports and customer database, without the installation of a software.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/dashboard-las-condes/1.jpeg",
            "assets/img/projects/dashboard-las-condes/2.jpeg",
            "assets/img/projects/dashboard-las-condes/3.jpeg",
            "assets/img/projects/dashboard-las-condes/4.jpeg",
        ],
        title: "Dashboard Las Condes (Angular)",
        description:
            "Dashboard Las Condes, monitoring platform for bus routes and bus capacity (passenger boarding and alighting by geozone), made with Angular, Angular Maps (Google Maps native library for the framework), Angular Material Components, Bootstrap for the column system, it is integrated with a REST API backend made in Elixir - Phoenix",
        url: "",
    },
    {
        images: [
            "assets/img/projects/landing-busnack/1.png",
            "assets/img/projects/landing-busnack/2.png",
            "assets/img/projects/landing-busnack/3.png",
            "assets/img/projects/landing-busnack/4.png",
        ],
        title: "Landing Busnack (Vue.js)",
        description:
            "Landing to promote web application. Busnack allows to digitize, streamline and automate the sale of food and beverages inside the buses, through the implementation of a digital and auxiliary menu in the bus.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/viaja-en-bus/1.png",
            "assets/img/projects/viaja-en-bus/2.png",
            "assets/img/projects/viaja-en-bus/3.png",
            "assets/img/projects/viaja-en-bus/4.png",
            "assets/img/projects/viaja-en-bus/5.png",
        ],
        title: "Viaja en Bus (Vue.js)",
        description:
            "The 'Viaje en Bus' platform is the reference par excellence in the sale of land tickets online throughout Chile.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/qr-scanner/1.png",
            "assets/img/projects/qr-scanner/2.png",
            "assets/img/projects/qr-scanner/3.png",
            "assets/img/projects/qr-scanner/4.png",
            "assets/img/projects/qr-scanner/5.png",
            "assets/img/projects/qr-scanner/6.png",
            "assets/img/projects/qr-scanner/7.png",
        ],
        title: "Barcode Scanner (Ionic)",
        description:
            "Application that allows to scan QR or barcode, has scan history, internal browser, that is if you scan a URL the application opens the built-in browser. Geolocation scan and display location via Mapbox (in 3D). This application is made with the Capacitor plugin.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/wit-web/1.png",
            "assets/img/projects/wit-web/2.png",
            "assets/img/projects/wit-web/3.png",
            "assets/img/projects/wit-web/4.png",
            "assets/img/projects/wit-web/5.png",
            "assets/img/projects/wit-web/6.png",
            "assets/img/projects/wit-web/7.png",
        ],
        title: "Wit Web (HTML, CSS, Javascript)",
        description: "Website made in HTML, CSS and Vanila Javascript, fully responsive.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/web-page-tandem/1.png",
            "assets/img/projects/web-page-tandem/2.png",
            "assets/img/projects/web-page-tandem/3.png",
            "assets/img/projects/web-page-tandem/4.png",
            "assets/img/projects/web-page-tandem/5.png",
            "assets/img/projects/web-page-tandem/6.png",
        ],
        title: "TANDEM Web Page (HTML, CSS, Javascript)",
        description:
            "Page made in HTML, CSS and Vanila Javascript, fully responsive, with CMS integration.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/pokemon-static/1.png",
            "assets/img/projects/pokemon-static/2.png",
            "assets/img/projects/pokemon-static/3.png",
            "assets/img/projects/pokemon-static/4.png",
            "assets/img/projects/pokemon-static/5.png",
            "assets/img/projects/pokemon-static/6.png",
        ],
        title: "Pokemon Static (Next.js)",
        description:
            "A practical application, the POKEMON API is consulted and the pokemon are reenderized, it can be consulted individually and has a Favorites section.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/open-jira/1.png",
            "assets/img/projects/open-jira/2.png",
            "assets/img/projects/open-jira/3.png",
            "assets/img/projects/open-jira/4.png",
        ],
        title: "Open Jira (Next.js)",
        description:
            "Practical application in order to create a Jira clone application of tasks and to be able to drag and drop. Technologies used: Next.js, Material UI, Tailwind, MongoDB, mongoose, Docker.",
        url: "",
    }
    ,
    {
        images: [
            "assets/img/projects/la-pizzeria/1.jpg",
            "assets/img/projects/la-pizzeria/2.jpg",
            "assets/img/projects/la-pizzeria/3.png",
        ],
        title: "Pizzeria Theme (Wordpress-PHP)",
        description:
            "Made with: ACF, Gutemberg Blocks, Slicknav, CSS3 Jquery, Advanced Custom Post Types",
        url: "",
    },
    {
        images: [
            "assets/img/projects/gym-fitness/1.jpg",
            "assets/img/projects/gym-fitness/2.png",
            "assets/img/projects/gym-fitness/3.jpg",
            "assets/img/projects/gym-fitness/4.png",
            "assets/img/projects/gym-fitness/5.png",
        ],
        title: "Gym Fitness (Wordpress-PHP)",
        description:
            "Bootstrap, Javascript.Plugins: ACF, Custom Post Types UI, ACF Leafleft,Regenerate Thumbnails, Contact Form 7",
        url: "",
    },
    {
        images: [
            "assets/img/projects/around-world/1.jpg",
            "assets/img/projects/around-world/2.jpg",
            "assets/img/projects/around-world/3.jpg",
            "assets/img/projects/around-world/4.jpg",
            "assets/img/projects/around-world/5.png",
            "assets/img/projects/around-world/6.jpg",
        ],
        title: "Around World (Wordpress-PHP)",
        description:
            "Made with: HTML, CSS3, BxSlider, Lightbox. Plugins: Advanced Custom Fields: Gallery Field - Repeater, Catch IDs, Contact Form 7, Custom Post Type UI, Regenerate Thumbnails, ShareThis Follow Buttons.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/client-manager/1.png",
            "assets/img/projects/client-manager/2.png",
            "assets/img/projects/client-manager/3.png",
            "assets/img/projects/client-manager/4.png",
            "assets/img/projects/client-manager/5.png",
            "assets/img/projects/client-manager/6.png",
            "assets/img/projects/client-manager/7.png",
        ],
        title: "Client Manager (Vue.js)",
        description:
            "Practical Client Manager type application, it was intended to be a single section but this project has several practical features with some dependencies that can be used in real life projects: VeeValidate for form validation that streamlines the management of forms, Vue-google-maps is already preconfigured component easy to use with Google Maps, Gitart-vue-dialog a very editable and user friendly modal component, Vue3-date-time-picker a very good date and time picker also with additions, could not miss Vuex for the management of the global state of the application.",
        url: "",
    },
    {
        images: [
            "assets/img/projects/movies-app/1.png",
            "assets/img/projects/movies-app/2.png",
            "assets/img/projects/movies-app/3.png",
            "assets/img/projects/movies-app/4.png",
            "assets/img/projects/movies-app/5.png",
            "assets/img/projects/movies-app/6.png",
            "assets/img/projects/movies-app/7.png",
            "assets/img/projects/movies-app/8.png",
            "assets/img/projects/movies-app/9.png",
            "assets/img/projects/movies-app/10.png",
        ],
        title: "Peliculas App (Ionic)",
        description:
            "To watch movies in billboards, popular, recent movies, has a section to look for any type, and the section Favorites to organize them by gender. Each time a movie is selected a modal is shown with the corresponding information. API The Movies DB and APK generates with Capacitor.",
        url: "",
    },
];

export const services = [
    {
        icon: "bi bi-pc-display-horizontal",
        title: "Responsive Design",
        description:
            "I create websites that look and function great on any device, from desktop computers to smartphones.",
        delay: "",
    },
    {
        icon: "bi bi-universal-access-circle",
        title: "Web Accessibility",
        description:
            "I design websites that are accessible to everyone, including those with visual, hearing and motor disabilities.",
        delay: "100",
    },
    {
        icon: "bi bi-person-video2",
        title: "User Interface Design",
        description:
            "I create attractive and easy-to-use user interfaces that align with your brand identity.",
        delay: "200",
    },
    {
        icon: "bi bi-pip",
        title: "Prototyping and Wireframing",
        description:
            "I help visualize the structure and design of your website before development begins.",
        delay: "300",
    },
    {
        icon: "bi bi-database-fill-gear",
        title: "Back-End Integration",
        description:
            "I work closely with back-end developers to ensure seamless integration of server-side functionality.",
        delay: "400",
    },
    {
        icon: "bi bi-file-earmark-code-fill",
        title: "Technical Support",
        description: "I provide ongoing technical support to resolve any issues that may arise.",
        delay: "500",
    },
];
