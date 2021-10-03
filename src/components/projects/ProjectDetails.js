import React from 'react'

const ProjectDetails = ( props ) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Reprehenderit ullamco eiusmod irure proident enim nisi dolore ullamco. Et velit amet cillum exercitation aliqua eu esse elit sunt magna ex ex consectetur do. Eu aute eu incididunt id incididunt id culpa et. Aliqua et elit occaecat ea ut dolore laboris dolor id elit sunt. Magna amet amet aliqua dolor fugiat adipisicing et excepteur occaecat et id laboris exercitation.</p>
        </div>
        <div className="card-action gry lighten-4 grey-text">
          <div>Posted by MTS</div>
          <div>3rd October, 2pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
