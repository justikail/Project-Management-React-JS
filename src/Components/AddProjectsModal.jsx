import Modal from "react-modal";
import { supabase } from "../Utils/createClient";
import { useState } from "react";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

export default function AddProjectsModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    title: "",
    repo: "",
    description: "",
    tect: "",
    image: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "radio" ? JSON.parse(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, repo, description, tech, image, status } = formData;
    const { error } = await supabase.from("portfolio").insert([{ title, repo, description, tech, image, status }]);
    if (!error) {
      toast.success("Success add project!");
      closeModal();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} contentLabel="Add Project" className="modal" overlayClassName="overlay">
      <form onSubmit={handleSubmit}>
        <h2>Add Project</h2>
        <div className="form-group">
          <div className="modal-wrapper">
            <label htmlFor="title">Project Name:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Sistem Informasi ..." required />
            <label htmlFor="repo">Project Repo:</label>
            <input type="text" id="repo" name="repo" value={formData.repo} onChange={handleChange} placeholder="Sistem Informasi ..." required />
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange} placeholder="Project Description" required />
          </div>

          <div className="modal-wrapper">
            <label htmlFor="image">Image:</label>
            <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} placeholder="Project Thumbnail" required />
            <label htmlFor="tech">Tech:</label>
            <textarea name="tech" id="tech" value={formData.tech} onChange={handleChange} placeholder="HTML, CSS" required />
          </div>

          <div className="modal-wrapper-radio">
            <input type="radio" name="status" id="active" value="true" checked={formData.status === true} onChange={handleChange} />
            <label htmlFor="active">Active</label>
            <input type="radio" name="status" id="nonactive" value="false" checked={formData.status === false} onChange={handleChange} />
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
    </Modal>
  );
}
