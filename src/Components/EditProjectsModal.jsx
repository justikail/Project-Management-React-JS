import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EditProject({ isOpen, closeModal, project, onChange, handleSubmit }) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} contentLabel="Edit Project" className="modal" overlayClassName="overlay">
      {project && (
        <form onSubmit={handleSubmit}>
          <h2>Edit Project</h2>
          <div className="form-group">
            <div className="modal-wrapper">
              <label htmlFor="title">Project Name:</label>
              <input type="text" id="title" name="title" value={project.title} onChange={(e) => onChange({ ...project, title: e.target.value })} />
              <label htmlFor="repo">Project Repo:</label>
              <input type="text" id="repo" name="repo" value={project.repo} onChange={(e) => onChange({ ...project, repo: e.target.value })} />
              <label htmlFor="description">Description:</label>
              <textarea name="description" id="description" value={project.description} onChange={(e) => onChange({ ...project, description: e.target.value })}>
                {project.description}
              </textarea>
            </div>

            <div className="modal-wrapper">
              <label htmlFor="image">Image:</label>
              <input type="text" name="image" id="image" value={project.image} onChange={(e) => onChange({ ...project, image: e.target.value })} />
              <label htmlFor="tech">Tech:</label>
              <textarea name="tech" id="tech" value={project.tech} onChange={(e) => onChange({ ...project, tech: e.target.value })}>
                {project.tech}
              </textarea>
            </div>

            <div className="modal-wrapper-radio">
              <input type="radio" name="status" id="active" value="true" checked={project.status === true} onChange={() => onChange({ ...project, status: true })} />
              <label htmlFor="active">Active</label>
              <input type="radio" name="status" id="nonactive" value="false" checked={project.status === false} onChange={() => onChange({ ...project, status: false })} />
              <label htmlFor="nonactive">Non-Active</label>
            </div>
          </div>
          <button className="btn-submit" type="submit">
            Save
          </button>
          <button className="btn-submit" type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      )}
    </Modal>
  );
}
