import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
} from "shards-react";

import { Redirect } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import PageTitle from "../components/common/PageTitle";
import UploadProjectForm from "../components/components-overview/UploadProjectForm";

const ProjectUpload = () => {
  const [uploadStarted, setUploadStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [completed, setCompleted] = useState(false);

  const steps = [
    "Context and Analysis (Code Smells)",
    "Refactor Strategies",
    "Refactoring",
  ];

  // Progress through steps regardless of when result is received
  useEffect(() => {
    if (uploadStarted) {
      let current = 0;
      setStep(0);
      const interval = setInterval(() => {
        current++;
        if (current < steps.length) {
          setStep(current);
        } else {
          clearInterval(interval);
          setCompleted(true); // All steps visually completed
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [uploadStarted]);

  const handleUploadStart = () => {
    setUploadStarted(true);
    setStep(0);
    setCompleted(false);
    setResult(null);
  };

  const handleIngest = (res) => {
    setResult(res);
  };

  return (
    <div>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Upload Project"
            subtitle="Let's"
            className="text-sm-left"
          />
        </Row>

        <Row>
          <Col lg="12" className="mb-4">
            <Card small>
              <CardHeader className="border-bottom">
                <h6 className="m-0">Zipped Project</h6>
              </CardHeader>

              {!uploadStarted && (
                <UploadProjectForm
                  onUploadStart={handleUploadStart}
                  onIngest={handleIngest}
                />
              )}

              {uploadStarted && (
                <div className="p-4">
                  <h5 className="mb-3 font-weight-bold">Processing Steps</h5>
                  <ol className="list-group list-group-flush">
                    {steps.map((label, index) => (
                      <li
                        key={index}
                        className={`list-group-item d-flex align-items-center ${
                          index === step
                            ? "bg-primary text-white"
                            : index < step
                            ? "bg-success text-white"
                            : ""
                        }`}
                      >
                        {index < step ? (
                          <i className="fas fa-check-circle mr-2"></i>
                        ) : index === step ? (
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                        ) : (
                          <i className="far fa-circle mr-2"></i>
                        )}
                        {label}
                      </li>
                    ))}
                  </ol>
                </div>
                // <div className="p-4">
                //   <h5 className="mb-3 font-weight-bold">Processing Steps</h5>
                //   <div className="position-relative pl-4 border-left border-primary" style={{ marginLeft: "1rem" }}>
                //     {steps.map((label, index) => (
                //       <div key={index} className="mb-4 d-flex align-items-start">
                //         <div
                //           className={`rounded-circle d-flex align-items-center justify-content-center mr-3`}
                //           style={{
                //             width: "1.5rem",
                //             height: "1.5rem",
                //             backgroundColor:
                //               index < step ? "#28a745" : index === step ? "#007bff" : "#ccc",
                //             color: "#fff",
                //             fontSize: "0.75rem",
                //             flexShrink: 0,
                //           }}
                //         >
                //           {index < step ? (
                //             <i className="fas fa-check" />
                //           ) : index === step ? (
                //             <i className="fas fa-spinner fa-spin" />
                //           ) : (
                //             <span>{index + 1}</span>
                //           )}
                //         </div>
                //         <div className="text-sm" style={{ marginTop: "0.2rem" }}>{label}</div>
                //       </div>
                //     ))}
                //   </div>
                // </div>

              )}

              {result && completed && (
                <div className="p-4 bg-light rounded shadow-sm mt-3">
                  <h6 className="font-weight-bold mb-2">Ingest Result</h6>
                  <pre className="small text-monospace">{result}</pre>
                </div>
              )}

              {/* Final redirect after both steps & result */}
              {completed && result && <Redirect to="/blog-overview" />}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectUpload;
