// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   ListGroup,
//   ListGroupItem,
//   Form,
//   Alert
// } from "shards-react";

// import PageTitle from "../components/common/PageTitle";
// import Colors from "../components/components-overview/Colors";
// import Checkboxes from "../components/components-overview/Checkboxes";
// import RadioButtons from "../components/components-overview/RadioButtons";
// import ToggleButtons from "../components/components-overview/ToggleButtons";
// import SmallButtons from "../components/components-overview/SmallButtons";
// import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
// import NormalButtons from "../components/components-overview/NormalButtons";
// import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
// import Forms from "../components/components-overview/Forms";
// import FormValidation from "../components/components-overview/FormValidation";
// import CompleteFormExample from "../components/components-overview/CompleteFormExample";
// import Sliders from "../components/components-overview/Sliders";
// import ProgressBars from "../components/components-overview/ProgressBars";
// import ButtonGroups from "../components/components-overview/ButtonGroups";
// import InputGroups from "../components/components-overview/InputGroups";
// import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
// import CustomFileUpload from "../components/components-overview/CustomFileUpload";
// import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
// import CustomSelect from "../components/components-overview/CustomSelect";
// import UploadProjectForm from "../components/components-overview/UploadProjectForm";

// const ProjectUpload = () => (
    
//     <div>
//         {/* <Container fluid className="px-0">
//         <Alert className="mb-0">
//             <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
//         </Alert>
//         </Container> */}
//         <Container fluid className="main-content-container px-4">
//         <Row noGutters className="page-header py-4">
//             <PageTitle
//             sm="4"
//             title="Upload Project"
//             subtitle="Let's"
//             className="text-sm-left"
//             />
//         </Row>

//         <Row>
//             <Col lg="12" className="mb-4">

//             {/* Complete Form Example */}
//             <Card small>
//                 <CardHeader className="border-bottom">
//                 <h6 className="m-0">Zipped Project</h6>
//                 </CardHeader>
//                 <UploadProjectForm />
//             </Card>
//             </Col>
//         </Row>
//         </Container>
//     </div>
// );

// export default ProjectUpload;


import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
} from "shards-react";

import { Redirect } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import UploadProjectForm from "../components/components-overview/UploadProjectForm";

const ProjectUpload = () => {
  const [result, setResult] = useState(null);
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
              {!result && <UploadProjectForm onIngest={setResult} />}
              {result &&  <Redirect to="/blog-overview" />}
                
              
              {result && (
                <div className="bg-gray-100 p-4 rounded-md shadow">
                  <h2 className="text-xl font-bold mb-2">Ingest Result</h2>
                  <pre className="text-sm whitespace-pre-wrap">{result}</pre>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectUpload;
