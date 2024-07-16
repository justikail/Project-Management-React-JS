import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProjectTable from "../Components/ProjectTable";
import LogOut from "../Components/LogOut";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import AddProjectsModal from "../Components/AddProjectsModal";

const styles = {
  section: {
    padding: 10,
    display: "block",
    border: "1px solid #fff",
  },
  welcome: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: "white",
    fontSize: 13,
  },
  subtitle: {
    color: "gray",
    fontSize: 10,
  },
  link: {
    color: "white",
    textDecoration: "none",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
  },
  tableTitle: {
    borderBottom: "1px solid #eee",
    marginBottom: 10,
    paddingBottom: 10,
  },
  tableTitleTrue: {
    fontSize: 10,
    color: "green",
  },
  tableTitleFalse: {
    fontSize: 10,
    color: "crimson",
  },
  buttonLogout: {
    position: "fixed",
    right: 12,
    bottom: 12,
    backgroundColor: "white",
    width: 50,
    height: 50,
    outline: "none",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Justikail Dashboard</title>
      </Helmet>

      <div className="dashboard-container">
        <Header />
        <section style={styles.section}>
          <div style={{ color: "white" }}>
            <h3 style={styles.welcome}>
              Welcome Admin!
              <span style={styles.subtitle}>Lets Manage Your Project</span>
              <button style={styles.link} title="New Project" onClick={openModal}>
                <i className="uil uil-plus" /> New
              </button>
            </h3>
            <div style={styles.tableWrapper}>
              <ProjectTable status={true} title="Projects" titleStyle={styles.tableTitleTrue} style={styles} />
              <ProjectTable status={false} title="Projects" titleStyle={styles.tableTitleFalse} style={styles} />
            </div>
          </div>
        </section>

        <LogOut styleButton={styles.buttonLogout} />
        <Footer />
      </div>

      {isOpen ? <AddProjectsModal isOpen={isOpen} closeModal={closeModal} /> : ""}
    </>
  );
}
