import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const ProjectFiles = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
      // Fetch the JSON file from FastAPI
      fetch("http://localhost:8000/result_json")
        .then((res) => res.json())
        .then((data) => {
          setResult(data); // formatted
        })
        .catch((err) => {
          console.error("Failed to fetch JSON:", err);
        });
    }, []);

    // ⛑ Safe check before accessing deeply nested data
    const pfiles =
    result &&
    result.analysis &&
    result.analysis.post_refactor &&
    result.analysis.post_refactor.hybrid &&
    result.analysis.post_refactor.hybrid.one_shot &&
    result.analysis.post_refactor.hybrid.one_shot.files
      ? result.analysis.post_refactor.hybrid.one_shot.files
      : [];
  return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Project Files" subtitle="Blog Posts" className="text-sm-left" />
    </Row>
    {/* Display JSON result from backend */}
    {/* {result && (
      <Row>
        <Col lg="12" className="mb-4">
          <div className="bg-light p-3 border rounded">
            <h5 className="mb-2">Ingest Result</h5>
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {JSON.stringify(result.analysis.post_refactor.hybrid.one_shot.files, null, 2)}
            </pre>
          </div>
        </Col>
      </Row>
    )} */}

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    File Name
                  </th>
                  <th scope="col" className="border-0">
                  LOC
                  </th>
                  <th scope="col" className="border-0">
                  Cyclomatic Complexity
                  </th>
                  <th scope="col" className="border-0">
                    Issues
                  </th>
                  <th scope="col" className="border-0">
                  Quality Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {pfiles.map((file, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>{file.file_name.split('/').pop()}</td> */}
                  <td>{file.file_name.split('/pre_refactor/').pop()}</td>
                  <td>{file.lines_of_code}</td>
                  <td>{file.cyclomatic_complexity.sum}</td>
                  <td>{file.suggestions.length}</td>
                  <td>{file.code_quality_score}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default ProjectFiles;
