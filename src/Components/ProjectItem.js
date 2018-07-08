import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }

    editProject(id) {
        this.props.onEdit(id);
    }

    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category} 
                &nbsp;<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}><FaTrash /></a>
                &nbsp;<a href="#" onClick={this.editProject.bind(this, this.props.project.id)}><FaPencil /></a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ProjectItem;
