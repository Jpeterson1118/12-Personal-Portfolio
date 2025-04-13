import Card from "../components/PortfolioCard"
import projects from "../assets/Projects"

export default function Portfolio() {
    <section className="p-5">
        <h2 className="p-5 header-h2">Portfolio</h2>
        <Card projects={projects}/>
     </section>
}