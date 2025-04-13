import Card from "../components/PortfolioCard"
import projects from "../assets/Projects"

export default function Portfolio() {
    return (
        <section className="p-5">
            <h2 className="p-5 header-h2 text-center text-light">Portfolio</h2>
            <div className="p-2 d-flex flex-wrap justify-content-center gap-4">
            {projects.map((project, i) => (
                    <Card key={i} project={project} />
                ))}
            </div>
        </section>
    )
}