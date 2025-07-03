
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
} from "shards-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";


import PageTitle from "../components/common/PageTitle";

const ProjectIssues = () => {
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

    const totalSuggestions = pfiles.reduce((acc, file) => acc + file.suggestions.length, 0);


  return (
    <div>

      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title={`Project Issues (${totalSuggestions})`}
            subtitle="Let's See"
            className="text-sm-left"
          /> 
        </Row>

        <Row>
        
            {pfiles.map((file, index) => {
                // {file.file_name.split('/pre_refactor/').pop()}
                
                return (
                <React.Fragment key={index}>
                    {/* {pissues} */}
                    {file.suggestions.map((sug, sIndex) => (
                        <Col lg="12" className="mb-4">
                            <Card small>
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Found Issue in {file.file_name.split('/pre_refactor/').pop()}</h6>

                            </CardHeader>
                            <div className="p-3">
                                <strong>Original Code Snippet:</strong>
                                <SyntaxHighlighter language="haskell" style={coy} customStyle={{ backgroundColor: "#ffe6e6", borderRadius: "8px", padding: "1em" }}>
                                    {sug.target_snippet}
                                </SyntaxHighlighter>
                                {/* <pre>
                                <code>{sug.target_snippet}</code>
                                </pre> */}

                                <strong>Refactored Suggestion:</strong>
                                <SyntaxHighlighter language="haskell" style={coy} customStyle={{ backgroundColor: "#e6ffea", borderRadius: "8px", padding: "1em" }}>
                                    {sug.refactored_suggestion}
                                </SyntaxHighlighter>
                                {/* <pre>
                                <code>{sug.refactored_suggestion}</code>
                                </pre> */}

                                {/* <p>
                                <strong>Confidence:</strong> {sug.confidence}
                                </p> */}
                                <p>
                                <strong>Justification:</strong> {sug.justification}
                                </p>
                            </div>
                            
                            </Card>
                        </Col>
                    ))}
                </React.Fragment>
                );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectIssues;
