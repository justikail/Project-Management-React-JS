import { useState } from "react";
import { TablePortfolio } from "../Utils/Api";
import Swal from "sweetalert2";
import { supabase } from "../Utils/createClient";
import EditProject from "./EditProjectsModal";
import { toast } from "react-toastify";

export default function ProjectList(props) {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDelete = async (projectId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You can't revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const { error } = await supabase.from("portfolio").delete().eq("id", projectId);
      if (error) {
        toast.error("Something wrong!");
      } else {
        toast.success("Success delete project!");
        setProjects(projects.filter((project) => project.id !== projectId));
      }
    }
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, title, repo, description, tech, image, status } = selectedProject;
    const { error } = await supabase.from("portfolio").update({ title, repo, description, tech, image, status }).eq("id", id);
    if (!error) {
      toast.success("Success edit project!");
      setProjects(projects.map((p) => (p.id === id ? selectedProject : p)));
      closeModal();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <>
      <TablePortfolio dataProjects={setProjects} />
      {projects &&
        projects
          .filter((project) => project.status === props.status)
          .map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}.</td>
              <td>{project.title}</td>
              <td style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <button style={{ color: "white", cursor: "pointer", backgroundColor: "transparent", outline: "none", border: "none" }} title="edit" onClick={() => handleEdit(project)}>
                  <i className="uil uil-edit" />
                </button>
                <button style={{ color: "white", cursor: "pointer", backgroundColor: "transparent", outline: "none", border: "none" }} title="delete" onClick={() => handleDelete(project.id)}>
                  <i className="uil uil-trash-alt" />
                </button>
              </td>
            </tr>
          ))}

      {isOpen ? <EditProject isOpen={isOpen} closeModal={closeModal} project={selectedProject} onChange={setSelectedProject} handleSubmit={handleSubmit} /> : ""}
    </>
  );
}
