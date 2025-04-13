export default function Card({ project }) {
    return (
      <div className="card m-4" style={{ width: '40%' }}>
        <a href={project.url}><img src={project.imagePath} className="card-img-top portfolio-image" alt={project.projectName} style={{ height: '200px', objectFit: 'cover' }} /></a>
        <div className="card-body">
          <h5 className="card-title">{project.projectName}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.repo} className="btn btn-primary">github</a>
        </div>
      </div>
    );
  };