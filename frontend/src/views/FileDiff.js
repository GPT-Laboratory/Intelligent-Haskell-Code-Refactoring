// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
// } from "shards-react";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

// import PageTitle from "../components/common/PageTitle";

// const FileDiff = () => {
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/result_json")
//       .then((res) => res.json())
//       .then((data) => {
//         setResult(data);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch JSON:", err);
//       });
//   }, []);

//   const pfiles =
//     result &&
//     result.analysis &&
//     result.analysis.post_refactor &&
//     result.analysis.post_refactor.hybrid &&
//     result.analysis.post_refactor.hybrid.one_shot &&
//     result.analysis.post_refactor.hybrid.one_shot.files
//       ? result.analysis.post_refactor.hybrid.one_shot.files
//       : [];

//   return (
//     <div>
//       <Container fluid className="main-content-container px-4">
//         <Row noGutters className="page-header py-4">
//           <PageTitle
//             sm="4"
//             title="Project Issues"
//             subtitle="Let's"
//             className="text-sm-left"
//           />
//         </Row>

//         <Row>
//           {pfiles.map((file, index) => {
//             const highlightLines = new Set();
//             const highlightLinesRefactored = new Set();

//             // Find all lines in original_code that appear in any target_snippet
//             const originalCodeLines = file.original_code.split("\n");
//             const refactoredCodeLines = file.refactored_code.split("\n");

//             file.suggestions.forEach((sug) => {
//               const targetLines = sug.target_snippet.split("\n").map((line) => line.trim());
//               originalCodeLines.forEach((line, i) => {
//                 if (targetLines.includes(line.trim())) {
//                     highlightLines.add(i + 1); // lineNumber is 1-based
//                 }
//               });

//               const refactoredLines = sug.refactored_suggestion.split("\n").map((line) => line.trim());
//               refactoredCodeLines.forEach((line, i) => {
//                 if (refactoredLines.includes(line.trim())) {
//                     highlightLinesRefactored.add(i + 1); // lineNumber is 1-based
//                 }
//               });

//             });

//             return (
//               <Col lg="12" className="mb-4" key={index}>
//                 <Card small>
//                   <CardHeader className="border-bottom">
//                     <h6 className="m-0">
//                       Code Difference: {file.file_name.split("/pre_refactor/").pop()}
//                     </h6>
//                   </CardHeader>

//                   <Row>
//                     <Col lg="6">
//                       <div className="p-3">
//                         <strong>Original:</strong>
//                         <SyntaxHighlighter
//                           language="haskell"
//                           style={coy}
//                           wrapLines={true}
//                           showLineNumbers
//                           lineProps={(lineNumber) => {
//                             if (highlightLines.has(lineNumber)) {
//                               return {
//                                 style: {
//                                   backgroundColor: "#ffe6e6", // light red
//                                   display: "block",
//                                   width: "100%",
//                                 },
//                               };
//                             }
//                             return {};
//                           }}
//                         >
//                           {file.original_code}
//                         </SyntaxHighlighter>
//                       </div>
//                     </Col>

//                     <Col lg="6">
//                       <div className="p-3">
//                         <strong>Refactored:</strong>
//                         <SyntaxHighlighter
//                           language="haskell"
//                           style={coy}
//                           wrapLines={true}
//                           showLineNumbers
//                           lineProps={(lineNumber) => {
//                             if (highlightLinesRefactored.has(lineNumber)) {
//                               return {
//                                 style: {
//                                   backgroundColor: "#e6ffea", // light green
//                                   display: "block",
//                                   width: "100%",
//                                 },
//                               };
//                             }
//                             return {};
//                           }}
//                         >
//                           {file.refactored_code}
//                         </SyntaxHighlighter>
//                       </div>
//                     </Col>
//                   </Row>

//                   {file.suggestions.map((sug, sIndex) => (
//                     <div className="p-3" key={sIndex}>
//                       <strong>Original Code Snippet:</strong>
//                       <SyntaxHighlighter
//                         language="haskell"
//                         style={coy}
//                         customStyle={{
//                           backgroundColor: "#ffe6e6",
//                           borderRadius: "8px",
//                           padding: "1em",
//                         }}
//                       >
//                         {sug.target_snippet}
//                       </SyntaxHighlighter>

//                       <strong>Refactored Suggestion:</strong>
//                       <SyntaxHighlighter
//                         language="haskell"
//                         style={coy}
//                         customStyle={{
//                           backgroundColor: "#e6ffea",
//                           borderRadius: "8px",
//                           padding: "1em",
//                         }}
//                       >
//                         {sug.refactored_suggestion}
//                       </SyntaxHighlighter>

//                       <p>
//                         <strong>Justification:</strong> {sug.justification}
//                       </p>
//                     </div>
//                   ))}
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FileDiff;


import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  FormSelect
} from "shards-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

import PageTitle from "../components/common/PageTitle";

const FileDiff = () => {
  const [result, setResult] = useState(null);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/result_json")
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.error("Failed to fetch JSON:", err);
      });
  }, []);

  const pfiles =
      result &&
      result.analysis &&
      result.analysis.post_refactor &&
      result.analysis.post_refactor.hybrid &&
      result.analysis.post_refactor.hybrid.one_shot &&
      result.analysis.post_refactor.hybrid.one_shot.files
        ? result.analysis.post_refactor.hybrid.one_shot.files
        : [];

  const handleFileChange = (e) => {
    const index = e.target.value;
    setSelectedFileIndex(index === "" ? null : Number(index));
  };

  const renderFileDiff = (file, index) => {
    const highlightLines = new Set();
    const highlightLinesRefactored = new Set();

    const originalCodeLines = file.original_code.split("\n");
    const refactoredCodeLines = file.refactored_code.split("\n");

    file.suggestions.forEach((sug) => {
      const targetLines = sug.target_snippet.split("\n").map((line) => line.trim());
      originalCodeLines.forEach((line, i) => {
        if (targetLines.includes(line.trim())) {
          highlightLines.add(i + 1);
        }
      });

      const refactoredLines = sug.refactored_suggestion.split("\n").map((line) => line.trim());
      refactoredCodeLines.forEach((line, i) => {
        if (refactoredLines.includes(line.trim())) {
          highlightLinesRefactored.add(i + 1);
        }
      });
    });

    return (
      <Col lg="12" className="mb-4" key={index}>
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">
              Code Difference: {file.file_name.split("/pre_refactor/").pop()}
            </h6>
          </CardHeader>

          <Row>
            <Col lg="6">
              <div className="p-3">
                <strong>Original:</strong>
                <SyntaxHighlighter
                  language="haskell"
                  style={coy}
                  wrapLines={true}
                  showLineNumbers
                  lineProps={(lineNumber) =>
                    highlightLines.has(lineNumber)
                      ? {
                          style: {
                            backgroundColor: "#ffe6e6",
                            display: "block",
                            width: "100%",
                          },
                        }
                      : {}
                  }
                >
                  {file.original_code}
                </SyntaxHighlighter>
              </div>
            </Col>

            <Col lg="6">
              <div className="p-3">
                <strong>Refactored:</strong>
                <SyntaxHighlighter
                  language="haskell"
                  style={coy}
                  wrapLines={true}
                  showLineNumbers
                  lineProps={(lineNumber) =>
                    highlightLinesRefactored.has(lineNumber)
                      ? {
                          style: {
                            backgroundColor: "#e6ffea",
                            display: "block",
                            width: "100%",
                          },
                        }
                      : {}
                  }
                >
                  {file.refactored_code}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>

          {file.suggestions.map((sug, sIndex) => (
            <div className="p-3" key={sIndex}>
              <strong>Original Code Snippet:</strong>
              <SyntaxHighlighter
                language="haskell"
                style={coy}
                customStyle={{
                  backgroundColor: "#ffe6e6",
                  borderRadius: "8px",
                  padding: "1em",
                }}
              >
                {sug.target_snippet}
              </SyntaxHighlighter>

              <strong>Refactored Suggestion:</strong>
              <SyntaxHighlighter
                language="haskell"
                style={coy}
                customStyle={{
                  backgroundColor: "#e6ffea",
                  borderRadius: "8px",
                  padding: "1em",
                }}
              >
                {sug.refactored_suggestion}
              </SyntaxHighlighter>

              <p>
                <strong>Justification:</strong> {sug.justification}
              </p>
            </div>
          ))}
        </Card>
      </Col>
    );
  };

  return (
    <div>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Project Issues"
            subtitle="Let's"
            className="text-sm-left"
          />
        </Row>

        <Row className="mb-3">
          <Col lg="4">
            <label>Select a file:</label>
            <FormSelect onChange={handleFileChange} value={selectedFileIndex || ""}>
              <option value="">-- Choose a file to view --</option>
              {pfiles.map((file, index) => (
                <option key={index} value={index}>
                  {file.file_name.split("/pre_refactor/").pop()}
                </option>
              ))}
            </FormSelect>
          </Col>
        </Row>

        <Row>
          {selectedFileIndex !== null &&
            renderFileDiff(pfiles[selectedFileIndex], selectedFileIndex)}
        </Row>
      </Container>
    </div>
  );
};

export default FileDiff;
