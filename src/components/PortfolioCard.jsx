import { Link } from 'react-router-dom'

export default function Card(props) {

    return(
        <section classname="d-flex flex-wrap justify-content-center p-2 cardbox">
            {props.projects.map((projects) =>{
                return (
                    <div className='card text-bg-dark cards text-start m-5' key={projects.id}>
                        <div className='card-body card-text'>
                            <h3 className='card-title'>{projects.projectName}</h3>
                            <p>{projects.discription}</p>
                            <p><Link to={projects.url}>{projects.urlText}</Link></p>
                            <Link to={projects.repo}><img src='../assets/github-mark-white.png' className='cards-links m-2'></img></Link>
                        </div>
                        <img src={projects.imagePath} alt='projects.altText' className='card-img-bottom cards-img-bottom' />
                    </div>
                );
            })}
        </section>
    )

};