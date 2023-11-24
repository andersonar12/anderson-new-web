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


