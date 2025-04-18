import fitJourny from './Fit-Journey-Homepage.png'
import basicas from './Roberto-Cestas-Basicas.png'
import vehicle from './Cmnd-Line-Vechicle-Builder.png'
import readme from './Cmnd-Line-Readme-Generator.png'
import watch from './just-watch-it.png'
import tracker from './employee-tracker.png'

const projects = [
    {
        id: 1,
        projectName: 'Just Watch It',
        imagePath: `${watch}`,
        altText: 'A webpage showing a misstion statement, quotation, and navigation bar',
        description: 'A website for movie lovers to save and share their favorite films.',
        repo: 'https://github.com/Johngoldade/Just-Watch-It',
        url: 'https://just-watch-it.onrender.com/',
        urlText: 'Just Watch It',
    },
    {
        id: 2,
        projectName: 'Roberto-Cestas-Basicas',
        imagePath: `${basicas}`,
        altText: 'An Organization page showing pre-packaged dry-goods for sale',
        description: "Front-end only organization website built for my fiance's father's family business. Re-factor into a react app pending." ,
        repo: 'https://github.com/Jpeterson1118/ROBERTO-CESTAS-BASICAS',
        url: '',
        urlText: '',
    },
    {
        id: 3,
        projectName: 'Fit Journey',
        imagePath: `${fitJourny}`,
        altText: 'Web app containing input fields and graphs',
        description: 'A wellness tracking app designed to help users keep track of their calories, excercise, water, and sleep.',
        repo: 'https://github.com/dlwortmann/Fit-Journey-Project-1',
        url: 'https://dlwortmann.github.io/Fit-Journey-Project-1/',
        urlText: 'Fit Journey',
    },
    {
        id: 4,
        projectName: 'Employee Tracker',
        imagePath: `${tracker}`,
        altText: 'A command line application',
        description: 'Command prompt application utilizing psql and inquirer allowing users to build an employee database tracking salary, employee positions, manager, and department assignments.',
        repo: 'https://github.com/Jpeterson1118/10-challenge-employee-tracker',
        url: '',
        urlText: '',
    },
    {
        id: 5,
        projectName: 'Command Line Readme Generator',
        imagePath: `${readme}`,
        altText: 'A command line application',
        description: 'Simple command line prompt using inquirer to allow users to quickly generate README files for their projects.',
        repo: 'https://github.com/Jpeterson1118/07-02-Challenge-Inquirer-ReadMe-Generator',
        url: '',
        urlText: '',
    },
    {
        id: 6,
        projectName: 'Command Line Vechicle Builder',
        imagePath: `${vehicle}`,
        altText: 'A command line application',
        description: 'A fun command line prompt allowing a user to create fictitious vehicles and perform various actions.',
        repo: 'https://github.com/Jpeterson1118/08-challenge-car-builder',
        url: '',
        urlText: '',
    },
   
]

export default projects