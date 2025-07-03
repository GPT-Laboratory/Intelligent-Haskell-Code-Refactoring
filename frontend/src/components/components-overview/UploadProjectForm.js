// import React from "react";
// import {
//   ListGroup,
//   ListGroupItem,
//   Row,
//   Col,
//   Form,
//   FormInput,
//   FormGroup,
//   FormCheckbox,
//   FormSelect,
//   Button
// } from "shards-react";

// const UploadProjectForm = () => (
//   <ListGroup flush>
//     <ListGroupItem className="p-3">
//       <Row>
//         <Col>
//           <Form>
//             <div className="custom-file mb-3">
//                 <input type="file" className="custom-file-input" id="customFile2" />
//                 <label className="custom-file-label" htmlFor="customFile2">
//                 Choose file...
//                 </label>
//             </div>
            
//             <Button type="submit">Upload</Button>
//           </Form>
//         </Col>
//       </Row>
//     </ListGroupItem>
//   </ListGroup>
// );

// export default UploadProjectForm;



import React, { useState } from "react";
import { ListGroup, ListGroupItem, Row, Col, Form, Button } from "shards-react";

// const UploadProjectForm = ({ onIngest }) => {
//     const [zipFile, setZipFile] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleFileChange = (e) => {
//         setZipFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!zipFile) {
//             alert("Please select a file.");
//             return;
//         }

//         setLoading(true);

//         const formData = new FormData();
//         if (zipFile) formData.append('uploaded_zip', zipFile);
//         try {
//             const res = await fetch("http://localhost:8000/ingest", {
//             method: "POST",
//             body: formData,
//         });

//         if (!res.ok) throw new Error("Upload failed");

//         const result = await res.json();
//         onIngest(result); // Pass JSON to parent
//         } catch (error) {
//         console.error(error);
//         alert("Something went wrong.");
//         } finally {
//         setLoading(false);
//         }
//     };

//     return (
//         <ListGroup flush>
//             <ListGroupItem className="p-3">
//                 <Row>
//                     <Col>
//                         <Form onSubmit={handleSubmit}>
//                         <div className="custom-file mb-3">
//                             <input
//                             type="file"
//                             className="custom-file-input"
//                             id="customFile2"
//                             accept=".zip"
//                             onChange={handleFileChange}
//                             />
//                             <label className="custom-file-label" htmlFor="customFile2">
//                             {zipFile ? zipFile.name : "Choose .zip file..."}
//                             </label>
//                         </div>
//                         <Button type="submit" disabled={loading}>
//                             {loading ? "Uploading..." : "Upload"}
//                         </Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </ListGroupItem>
//         </ListGroup>
//     );
// };

const UploadProjectForm = ({ onUploadStart, onIngest }) => {
    const [zipFile, setZipFile] = useState(null);
    const handleFileChange = (e) => {
        setZipFile(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (onUploadStart) {
          onUploadStart(); // 👈 trigger progress block immediately
        }

        if (!zipFile) {
            alert("Please select a file.");
            return;
        }
    
        const formData = new FormData();
        if (zipFile) formData.append('uploaded_zip', zipFile);

        try {
            const response = await fetch("http://localhost:8000/ingest", {
            method: "POST",
            body: formData,
            });

            if (!response.ok) throw new Error("Upload failed");
        
            const result = await response.text(); // or json()
            if (onIngest) {
                onIngest(result);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }

    };

    return (
        <ListGroup flush>
            <ListGroupItem className="p-3">
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                        <div className="custom-file mb-3">
                            <input
                            type="file"
                            className="custom-file-input"
                            id="customFile2"
                            accept=".zip"
                            onChange={handleFileChange}
                            />
                            <label className="custom-file-label" htmlFor="customFile2">
                            {zipFile ? zipFile.name : "Choose .zip file..."}
                            </label>
                        </div>
                        {/* <Button type="submit" disabled={loading}>
                            {loading ? "Uploading..." : "Upload"}
                        </Button> */}
                        <Button type="submit">Submit</Button>

                        </Form>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    );
};

export default UploadProjectForm;
