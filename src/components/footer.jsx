import gitLogo from '../assets/github-mark-white.png'
import Linkdin from '../assets/Li-In-Bug.png'


export default function Footer() {
    return (
        <footer className="d-flex justify-content-center align-items-center py-3 bg-dark">
            <a href="https://github.com/Jpeterson1118">
                <img src={gitLogo} alt="GitHub logo" className="link-image mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/jacob-peterson-0107a015a/">
                <img src={Linkdin} alt="LinkedIn logo" className="link-image mx-2" />
            </a>
        </footer>
    )
}