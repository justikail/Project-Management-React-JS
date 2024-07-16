import { lazy, Suspense } from "react";

const ProjectList = lazy(() => import("./ProjectList"));

export default function ProjectTable(props) {
  return (
    <div className="table-wrapper">
      <h4 style={props.style.tableTitle}>
        {props.title} <span style={props.titleStyle}>&quot;{String(props.status)}&quot;</span> :
      </h4>
      <Suspense fallback={<h5 style={{ textAlign: "center" }}>Loading ...</h5>}>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Project Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ProjectList status={props.status} />
          </tbody>
        </table>
      </Suspense>
    </div>
  );
}
