export default function Card({ project }) {
    return (
      <div className="card" style={{ width: '40%' }}>
        <a href={project.url}><img src={project.imagePath} className="card-img-top portfolio-image" alt={project.projectName} style={{ height: '200px', objectFit: 'cover' }} /></a>
        <div className="card-body">
          <h5 className="card-title">{project.projectName}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.repo} className="btn btn-primary">github</a>
        </div>
      </div>
    );
  }

// export default function Card(props) {

//     return(
//         <section classname="d-flex flex-wrap justify-content-center p-2 cardbox">
//             {props.projects.map((projects) =>{
//                 return (
//                     <div className='card text-bg-dark cards text-start m-5' key={projects.id}>
//                         <div className='card-body card-text'>
//                             <h3 className='card-title'>{projects.projectName}</h3>
//                             <p>{projects.discription}</p>
//                             <p><Link to={projects.url}>{projects.urlText}</Link></p>
//                             <Link to={projects.repo}><img src='../assets/github-mark-white.png' className='cards-links m-2'></img></Link>
//                         </div>
//                         <img src={projects.imagePath} alt='projects.altText' className='card-img-bottom cards-img-bottom' />
//                     </div>
//                 );
//             })}
//         </section>
//     )

// };