import Image from "next/image";

export default function PatientInfo() {
  return (
    <div className="col-md-4 border p-3 me-3" style={{ borderColor: '#d3d3d3' }}>
      <h4>Patient Info</h4>
      <div className="d-flex flex-column flex-md-row align-items-start">
        <Image
          src="/lady_patient.png"
          alt="Patient Profile"
          width={150}
          height={150}
          className="img-fluid rounded mb-3 mb-md-0"
        />
        <div className="ms-md-3">
          <p>Patient Name: Hectora Ramam </p>
          <p>Blood Type: A+ </p>
          <p>Date of Birth: 14-04-1943</p>
          <p>Pronouns: She/Them </p>
        </div>
      </div>

      <div className="d-flex flex-row mt-3">
        <button className="btn btn-secondary me-2">Full Clinical Access</button>
        <button className="btn btn-secondary me-2">Support Staff View</button>
      </div>
    </div>
  );
}
