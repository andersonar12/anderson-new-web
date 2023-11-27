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
        value: calculateAge("1995-06-01"),
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
]

export const skills: Skill[] = [
    {
        title: 'Angular',
        img: 'assets/img/skills/angular-new-logo.gif',
    },
    {
        title: 'Vue.js',
        img: 'assets/img/skills/vue.png',
    },
    {
        title: 'React',
        img: 'assets/img/skills/react-logo.png',
    },
    {
        title: 'Next.js',
        img: 'assets/img/skills/next-js-logo.png',
    },
    {
        title: 'Ionic',
        img: 'assets/img/skills/ionic.png',
    },
    {
        title: 'Tailwind',
        img: 'assets/img/skills/tailwind.png',
    },
    {
        title: 'Bootstrap',
        img: 'assets/img/skills/bootstrap.png',
    },
    {
        title: 'Material Design',
        img: 'assets/img/skills/material-design.png',
    },
    {
        title: 'Vuetify',
        img: 'assets/img/skills/vuetify.png',
    },
    {
        title: 'Material UI',
        img: 'assets/img/skills/materialui.png',
    },
    {
        title: 'Typescript',
        img: 'assets/img/skills/typescript.png',
    },
    {
        title: 'Javascript',
        img: 'assets/img/skills/javascript.png',
    },
    {
        title: 'Node.js',
        img: 'assets/img/skills/node.png',
    },
    {
        title: 'Vite',
        img: 'assets/img/skills/vite.png',
    },
    {
        title: 'HTML',
        img: 'assets/img/skills/html.png',
    },
    {
        title: 'CSS',
        img: 'assets/img/skills/css.png',
    },
    {
        title: 'Jquery',
        img: 'assets/img/skills/jquery.png',
    },
    {
        title: 'PHP',
        img: 'assets/img/skills/php.png',
    },
    {
        title: 'Firebase',
        img: 'assets/img/skills/firebase.png',
    },
    {
        title: 'Docker',
        img: 'assets/img/skills/docker.png',
    },
    {
        title: 'GIT',
        img: 'assets/img/skills/github.png',
    }
];

export const portfolioData = [
    { id: 1, type: 'app', imgSrc: 'assets/img/portfolio/portfolio-1.jpg', title: 'App 1' },
    { id: 2, type: 'web', imgSrc: 'assets/img/portfolio/portfolio-2.jpg', title: 'Web 3' },
    { id: 3, type: 'app', imgSrc: 'assets/img/portfolio/portfolio-3.jpg', title: 'App 2' },
    { id: 4, type: 'card', imgSrc: 'assets/img/portfolio/portfolio-4.jpg', title: 'Card 2' },
    { id: 5, type: 'web', imgSrc: 'assets/img/portfolio/portfolio-5.jpg', title: 'Web 2' },
    { id: 6, type: 'app', imgSrc: 'assets/img/portfolio/portfolio-6.jpg', title: 'App 3' },
    { id: 7, type: 'card', imgSrc: 'assets/img/portfolio/portfolio-7.jpg', title: 'Card 1' },
    { id: 8, type: 'card', imgSrc: 'assets/img/portfolio/portfolio-8.jpg', title: 'Card 3' },
    { id: 9, type: 'web', imgSrc: 'assets/img/portfolio/portfolio-9.jpg', title: 'Web 3' },
];

export const projects = [
    {
        images: [
            'assets/img/projects/backoffice-tandem/1.png',
            'assets/img/projects/backoffice-tandem/2.png',
            'assets/img/projects/backoffice-tandem/3.png',
            'assets/img/projects/backoffice-tandem/4.png',
            'assets/img/projects/backoffice-tandem/5.png',
            'assets/img/projects/backoffice-tandem/6.png',
            'assets/img/projects/backoffice-tandem/7.png',
            'assets/img/projects/backoffice-tandem/8.png',
            'assets/img/projects/backoffice-tandem/9.png',
        ],
        title: 'Statistics Administration and Management Platform (Angular)',
        description:
            'Implementation of graphics, consumption of WebSockets for Geolocation, filtering of global data by company, export of data to PDF and Excel, components based on Angular Material, integration with: API REST backend Elixir, Qlick Sense, Angular Google Maps. In this project Rxjs operators are widely used.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/cms-tandem/1.png',
            'assets/img/projects/cms-tandem/2.png',
            'assets/img/projects/cms-tandem/3.png',
            'assets/img/projects/cms-tandem/4.png',
            'assets/img/projects/cms-tandem/5.png',
            'assets/img/projects/cms-tandem/6.png',
        ],
        title: 'CMS (Angular) for the Tandem website',
        description:
            'CMS made for loading and managing the content of the TANDEM company’s website, type backoffice, used Angular Material, Bootstrap for the grid, Sweet Alert. Integration with backend made in Elixir.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/clubify/1.png',
            'assets/img/projects/clubify/2.png',
            'assets/img/projects/clubify/3.png',
            'assets/img/projects/clubify/4.png',
            'assets/img/projects/clubify/5.png',
            'assets/img/projects/clubify/6.png',
            'assets/img/projects/clubify/7.png',
            'assets/img/projects/clubify/8.png',
            'assets/img/projects/clubify/9.png',
        ],
        title: 'Clubify(Angular - Ionic)',
        description:
            'Landing to promote Clubifys web application, this application supports mailing integrated with a Node.js API.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/landing-pullman-bus/1.png',
            'assets/img/projects/landing-pullman-bus/2.png',
            'assets/img/projects/landing-pullman-bus/3.png',
            'assets/img/projects/landing-pullman-bus/4.png',
            'assets/img/projects/landing-pullman-bus/5.png',
        ],
        title: 'Landing Pullman Bus(Angular - Ionic)',
        description:
            'Landing to promote the benefits of the Pullman Bus company with the applications (Go Movie - Live GPS) and to request affiliation to it.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/landing-busnack/1.png',
            'assets/img/projects/landing-busnack/2.png',
            'assets/img/projects/landing-busnack/3.png',
            'assets/img/projects/landing-busnack/4.png',
        ],
        title: 'Landing Busnack (Vue.js)',
        description:
            'Landing to promote web application. Busnack allows to digitize, streamline and automate the sale of food and beverages inside the buses, through the implementation of a digital and auxiliary menu in the bus.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/client-manager/1.png',
            'assets/img/projects/client-manager/2.png',
            'assets/img/projects/client-manager/3.png',
            'assets/img/projects/client-manager/4.png',
            'assets/img/projects/client-manager/5.png',
            'assets/img/projects/client-manager/6.png',
            'assets/img/projects/client-manager/7.png',
        ],
        title: 'Client Manager (Vue.js)',
        description:
            'Practical Client Manager type application, it was intended to be a single section but this project has several practical features with some dependencies that can be used in real life projects: VeeValidate for form validation that streamlines the management of forms, Vue-google-maps is already preconfigured component easy to use with Google Maps, Gitart-vue-dialog a very editable and user friendly modal component, Vue3-date-time-picker a very good date and time picker also with additions, could not miss Vuex for the management of the global state of the application.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/movies-app/1.png',
            'assets/img/projects/movies-app/2.png',
            'assets/img/projects/movies-app/3.png',
            'assets/img/projects/movies-app/4.png',
            'assets/img/projects/movies-app/5.png',
            'assets/img/projects/movies-app/6.png',
            'assets/img/projects/movies-app/7.png',
            'assets/img/projects/movies-app/8.png',
            'assets/img/projects/movies-app/9.png',
            'assets/img/projects/movies-app/10.png',
        ],
        title: 'Peliculas App (Ionic)',
        description:
            'To watch movies in billboards, popular, recent movies, has a section to look for any type, and the section Favorites to organize them by gender. Each time a movie is selected a modal is shown with the corresponding information. API The Movies DB and APK generates with Capacitor.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/qr-scanner/1.png',
            'assets/img/projects/qr-scanner/2.png',
            'assets/img/projects/qr-scanner/3.png',
            'assets/img/projects/qr-scanner/4.png',
            'assets/img/projects/qr-scanner/5.png',
            'assets/img/projects/qr-scanner/6.png',
            'assets/img/projects/qr-scanner/7.png',
        ],
        title: 'Barcode Scanner (Ionic)',
        description:
            'Application that allows to scan QR or barcode, has scan history, internal browser, that is if you scan a URL the application opens the built-in browser. Geolocation scan and display location via Mapbox (in 3D). This application is made with the Capacitor plugin.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/wit-web/1.png',
            'assets/img/projects/wit-web/2.png',
            'assets/img/projects/wit-web/3.png',
            'assets/img/projects/wit-web/4.png',
            'assets/img/projects/wit-web/5.png',
            'assets/img/projects/wit-web/6.png',
            'assets/img/projects/wit-web/7.png',
        ],
        title: 'Wit Web (HTML, CSS, Javascript)',
        description:
            'Website made in HTML, CSS and Vanila Javascript, fully responsive.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/web-page-tandem/1.png',
            'assets/img/projects/web-page-tandem/2.png',
            'assets/img/projects/web-page-tandem/3.png',
            'assets/img/projects/web-page-tandem/4.png',
            'assets/img/projects/web-page-tandem/5.png',
            'assets/img/projects/web-page-tandem/6.png',
        ],
        title: 'TANDEM Web Page (HTML, CSS, Javascript)',
        description:
            'Page made in HTML, CSS and Vanila Javascript, fully responsive, with CMS integration.',
        url: '',
    },
    {
        images: [
            'assets/img/projects/la-pizzeria/1.jpg',
            'assets/img/projects/la-pizzeria/2.jpg',
            'assets/img/projects/la-pizzeria/3.png',
        ],
        title: 'Pizzeria Theme (Wordpress-PHP)',
        description:
            'Made with: ACF, Gutemberg Blocks, Slicknav, CSS3 Jquery, Advanced Custom Post Types',
        url: '',
    },
    {
        images: [
            'assets/img/projects/gym-fitness/1.jpg',
            'assets/img/projects/gym-fitness/2.png',
            'assets/img/projects/gym-fitness/3.jpg',
            'assets/img/projects/gym-fitness/4.png',
            'assets/img/projects/gym-fitness/5.png'
        ],
        title: 'Gym Fitness (Wordpress-PHP)',
        description:
            'Bootstrap, Javascript.Plugins: ACF, Custom Post Types UI, ACF Leafleft,Regenerate Thumbnails, Contact Form 7',
        url: '',
    },
    {
        images: [
            'assets/img/projects/around-world/1.jpg',
            'assets/img/projects/around-world/2.jpg',
            'assets/img/projects/around-world/3.jpg',
            'assets/img/projects/around-world/4.jpg',
            'assets/img/projects/around-world/5.png',
            'assets/img/projects/around-world/5.png',

        ],
        title: 'Around World (Wordpress-PHP)',
        description:
            'Made with: HTML, CSS3, BxSlider, Lightbox. Plugins: Advanced Custom Fields: Gallery Field - Repeater, Catch IDs, Contact Form 7, Custom Post Type UI, Regenerate Thumbnails, ShareThis Follow Buttons.',
        url: '',
    },

];

