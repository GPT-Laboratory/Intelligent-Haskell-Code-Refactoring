// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
// } from "shards-react";

// import { Redirect } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import PageTitle from "../components/common/PageTitle";
// import UploadProjectForm from "../components/components-overview/UploadProjectForm";

// const ProjectUpload = () => {
//   const [uploadStarted, setUploadStarted] = useState(false);
//   const [step, setStep] = useState(0);
//   const [result, setResult] = useState(null);
//   const [completed, setCompleted] = useState(false);

//   const steps = [
//     "Context and Analysis (Code Smells)",
//     "Refactor Strategies",
//     "Refactoring",
//   ];

//   // Progress through steps regardless of when result is received
//   useEffect(() => {
//     if (uploadStarted) {
//       let current = 0;
//       setStep(0);
//       const interval = setInterval(() => {
//         current++;
//         if (current < steps.length) {
//           setStep(current);
//         } else {
//           clearInterval(interval);
//           setCompleted(true); // All steps visually completed
//         }
//       }, 5000);

//       return () => clearInterval(interval);
//     }
//   }, [uploadStarted]);

//   const handleUploadStart = () => {
//     setUploadStarted(true);
//     setStep(0);
//     setCompleted(false);
//     setResult(null);
//   };

//   const handleIngest = (res) => {
//     setResult(res);
//   };

//   return (
//     <div>
//       <Container fluid className="main-content-container px-4">
//         <Row noGutters className="page-header py-4">
//           <PageTitle
//             sm="4"
//             title="Upload Project"
//             subtitle="Let's"
//             className="text-sm-left"
//           />
//         </Row>

//         <Row>
//           <Col lg="12" className="mb-4">
//             <Card small>
//               <CardHeader className="border-bottom">
//                 <h6 className="m-0">Zipped Project</h6>
//               </CardHeader>

//               {!uploadStarted && (
//                 <UploadProjectForm
//                   onUploadStart={handleUploadStart}
//                   onIngest={handleIngest}
//                 />
//               )}

//               {uploadStarted && (
//                 <div className="p-4">
//                   <h5 className="mb-3 font-weight-bold">Processing Steps</h5>
//                   <div className="position-relative pl-4 border-left border-primary" style={{ marginLeft: '1rem' }}>
//                     {steps.map((label, index) => (
//                       <div key={index} className="mb-4 d-flex align-items-start">
//                         <div
//                           className="d-flex align-items-center justify-content-center mr-3"
//                           style={{
//                             width: '1.5rem',
//                             height: '1.5rem',
//                             backgroundColor: index < step ? '#28a745' : index === step ? '#007bff' : '#ccc',
//                             color: '#fff',
//                             fontSize: '0.75rem',
//                             borderRadius: '50%',
//                             flexShrink: 0,
//                           }}
//                         >
//                           {index < step ? (
//                             <i className="fas fa-check" />
//                           ) : index === step ? (
//                             <i className="fas fa-spinner fa-spin" />
//                           ) : (
//                             <span>{index + 1}</span>
//                           )}
//                         </div>
//                         <div className="text-sm" style={{ marginTop: '0.2rem' }}>{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {result && completed && (
//                 <div className="p-4 bg-light rounded shadow-sm mt-3">
//                   <h6 className="font-weight-bold mb-2">Ingest Result</h6>
//                   <pre className="small text-monospace">{result}</pre>
//                 </div>
//               )}

//               {/* Final redirect after both steps & result */}
//               {completed && result && <Redirect to="/blog-overview" />}
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ProjectUpload;


// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
// } from "shards-react";
// import { Redirect } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import PageTitle from "../components/common/PageTitle";
// import UploadProjectForm from "../components/components-overview/UploadProjectForm";

// // Import step images for each flowchart
// import f1_1 from "../assets/flowchart1/1flowchart-1.png";
// import f1_2 from "../assets/flowchart1/1flowchart-2.png";
// import f1_3 from "../assets/flowchart1/1flowchart-3.png";
// import f1_4 from "../assets/flowchart1/1flowchart-4.png";
// import f1_5 from "../assets/flowchart1/1flowchart-5.png";
// import f1_6 from "../assets/flowchart1/1flowchart-6.png";
// import f1_7 from "../assets/flowchart1/1flowchart-7.png";
// import f1_8 from "../assets/flowchart1/1flowchart-8.png";
// import f1_9 from "../assets/flowchart1/1flowchart-9.png";

// import f2_1 from "../assets/flowchart1/1flowchart-1.png";
// import f2_2 from "../assets/flowchart1/1flowchart-2.png";
// import f2_3 from "../assets/flowchart1/1flowchart-3.png";
// import f2_4 from "../assets/flowchart1/1flowchart-4.png";
// import f2_5 from "../assets/flowchart1/1flowchart-5.png";
// import f2_6 from "../assets/flowchart1/1flowchart-6.png";
// import f2_7 from "../assets/flowchart2/2flowchart-7.png";
// import f2_8 from "../assets/flowchart2/2flowchart-8.png";
// import f2_9 from "../assets/flowchart2/2flowchart-9.png";
// import f2_10 from "../assets/flowchart2/2flowchart-10.png";
// import f2_11 from "../assets/flowchart2/2flowchart-11.png";
// import f2_12 from "../assets/flowchart2/2flowchart-12.png";
// import f2_13 from "../assets/flowchart2/2flowchart-13.png";

// import f3_1 from "../assets/flowchart1/1flowchart-1.png";
// import f3_2 from "../assets/flowchart1/1flowchart-2.png";
// import f3_3 from "../assets/flowchart1/1flowchart-3.png";
// import f3_4 from "../assets/flowchart1/1flowchart-4.png";
// import f3_5 from "../assets/flowchart1/1flowchart-5.png";
// import f3_6 from "../assets/flowchart1/1flowchart-6.png";
// import f3_7 from "../assets/flowchart2/2flowchart-7.png";
// import f3_8 from "../assets/flowchart2/2flowchart-8.png";
// import f3_9 from "../assets/flowchart2/2flowchart-9.png";
// import f3_10 from "../assets/flowchart2/2flowchart-10.png";
// import f3_11 from "../assets/flowchart2/2flowchart-11.png";
// import f3_12 from "../assets/flowchart2/2flowchart-12.png";
// import f3_13 from "../assets/flowchart3/3flowchart-13.png";
// import f3_14 from "../assets/flowchart3/3flowchart-14.png";
// import f3_15 from "../assets/flowchart3/3flowchart-15.png";
// import f3_16 from "../assets/flowchart3/3flowchart-16.png";

// // Array of arrays for each chart
// const charts = [
//   [f1_1, f1_2, f1_3, f1_4, f1_5, f1_6, f1_7, f1_8, f1_9], // 9 steps
//   [f2_1, f2_2, f2_3, f2_4, f2_5, f2_6, f2_7, f2_8, f2_9, f2_10, f2_11, f2_12, f2_13], // 13 steps
//   [f3_1, f3_2, f3_3, f3_4, f3_5, f3_6, f3_7, f3_8, f3_9, f3_10, f3_11, f3_12, f3_13, f3_14, f3_15, f3_16], // 16 steps
// ];

// const ProjectUpload = () => {
//   const [uploadStarted, setUploadStarted] = useState(false);
//   const [chartIndex, setChartIndex] = useState(0);
//   const [stepIndex, setStepIndex] = useState(0);
//   const [result, setResult] = useState(null);
//   const [completed, setCompleted] = useState(false);

//   // On upload start, pick a random chart and reset step
//   useEffect(() => {
//     if (uploadStarted) {
//       const rnd = Math.floor(Math.random() * charts.length);
//       setChartIndex(rnd);
//       setStepIndex(0);
//       setCompleted(false);
//       setResult(null);

//       const interval = setInterval(() => {
//         setStepIndex(prev => {
//           const max = charts[rnd].length - 1;
//           if (prev < max) return prev + 1;
//           clearInterval(interval);
//           return prev;
//         });
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [uploadStarted]);

//   const handleUploadStart = () => {
//     setUploadStarted(true);
//   };

//   const handleIngest = (res) => {
//     setResult(res);
//     setCompleted(true);
//   };

//   const currentImages = charts[chartIndex];
//   const totalSteps = currentImages.length;

//   return (
//     <Container fluid className="main-content-container px-4">
//       <Row noGutters className="page-header py-4">
//         <PageTitle sm="4" title="Upload Project" subtitle="Let's" className="text-sm-left" />
//       </Row>
//       <Row>
//         <Col lg="12" className="mb-4">
//           <Card small>
//             <CardHeader className="border-bottom">
//               <h6 className="m-0">Zipped Project</h6>
//             </CardHeader>

//             {!uploadStarted && (
//               <UploadProjectForm onUploadStart={handleUploadStart} onIngest={handleIngest} />
//             )}

//             {uploadStarted && (
//               <div className="p-4 text-center">
//                 <h5 className="mb-3 font-weight-bold">
//                   {/* Processing Flowchart {chartIndex + 1}, Step {stepIndex + 1} of {totalSteps} */}
//                   Processing Step {stepIndex + 1}
//                 </h5>
//                 <img
//                   src={currentImages[stepIndex]}
//                   alt={`Flowchart ${chartIndex+1} - Step ${stepIndex+1}`}
//                   style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//               </div>
//             )}

//             {completed && result && (
//               <div className="p-4 bg-light rounded shadow-sm mt-3">
//                 <h6 className="font-weight-bold mb-2">Ingest Result</h6>
//                 <pre className="small text-monospace">{result}</pre>
//               </div>
//             )}

//             {completed && result && <Redirect to="/blog-overview" />}
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProjectUpload;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   Button,
// } from "shards-react";
// import { Redirect } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import PageTitle from "../components/common/PageTitle";
// import UploadProjectForm from "../components/components-overview/UploadProjectForm";

// // // Import step images for each flowchart
// import f1_1 from "../assets/flowchart1/1flowchart-1.png";
// import f1_2 from "../assets/flowchart1/1flowchart-2.png";
// import f1_3 from "../assets/flowchart1/1flowchart-3.png";
// import f1_4 from "../assets/flowchart1/1flowchart-4.png";
// import f1_5 from "../assets/flowchart1/1flowchart-5.png";
// import f1_6 from "../assets/flowchart1/1flowchart-6.png";
// import f1_7 from "../assets/flowchart1/1flowchart-7.png";
// import f1_8 from "../assets/flowchart1/1flowchart-8.png";
// import f1_9 from "../assets/flowchart1/1flowchart-9.png";

// import f2_1 from "../assets/flowchart1/1flowchart-1.png";
// import f2_2 from "../assets/flowchart1/1flowchart-2.png";
// import f2_3 from "../assets/flowchart1/1flowchart-3.png";
// import f2_4 from "../assets/flowchart1/1flowchart-4.png";
// import f2_5 from "../assets/flowchart1/1flowchart-5.png";
// import f2_6 from "../assets/flowchart1/1flowchart-6.png";
// import f2_7 from "../assets/flowchart2/2flowchart-7.png";
// import f2_8 from "../assets/flowchart2/2flowchart-8.png";
// import f2_9 from "../assets/flowchart2/2flowchart-9.png";
// import f2_10 from "../assets/flowchart2/2flowchart-10.png";
// import f2_11 from "../assets/flowchart2/2flowchart-11.png";
// import f2_12 from "../assets/flowchart2/2flowchart-12.png";
// import f2_13 from "../assets/flowchart2/2flowchart-13.png";

// import f3_1 from "../assets/flowchart1/1flowchart-1.png";
// import f3_2 from "../assets/flowchart1/1flowchart-2.png";
// import f3_3 from "../assets/flowchart1/1flowchart-3.png";
// import f3_4 from "../assets/flowchart1/1flowchart-4.png";
// import f3_5 from "../assets/flowchart1/1flowchart-5.png";
// import f3_6 from "../assets/flowchart1/1flowchart-6.png";
// import f3_7 from "../assets/flowchart2/2flowchart-7.png";
// import f3_8 from "../assets/flowchart2/2flowchart-8.png";
// import f3_9 from "../assets/flowchart2/2flowchart-9.png";
// import f3_10 from "../assets/flowchart2/2flowchart-10.png";
// import f3_11 from "../assets/flowchart2/2flowchart-11.png";
// import f3_12 from "../assets/flowchart2/2flowchart-12.png";
// import f3_13 from "../assets/flowchart3/3flowchart-13.png";
// import f3_14 from "../assets/flowchart3/3flowchart-14.png";
// import f3_15 from "../assets/flowchart3/3flowchart-15.png";
// import f3_16 from "../assets/flowchart3/3flowchart-16.png";

// // Loader and icon
// import loaderGif from "../assets/gpt-loader.gif";
// import iconImg from "../assets/gpt-icon.png";

// // Array of arrays for each chart
// const charts = [
//   [f1_1, f1_2, f1_3, f1_4, f1_5, f1_6, f1_7, f1_8, f1_9],                 // 9 steps
//   [f2_1, f2_2, f2_3, f2_4, f2_5, f2_6, f2_7, f2_8, f2_9, f2_10, f2_11, f2_12, f2_13], // 13 steps
//   [f3_1, f3_2, f3_3, f3_4, f3_5, f3_6, f3_7, f3_8, f3_9, f3_10, f3_11, f3_12, f3_13, f3_14, f3_15, f3_16], // 16 steps
// ];




// const ProjectUpload = () => {
//     const [uploadStarted, setUploadStarted] = useState(false);
//     const [chartIndex, setChartIndex] = useState(0);
//     const [stepIndex, setStepIndex] = useState(0);
//     const [result, setResult] = useState(null);
//     const [completed, setCompleted] = useState(false);
//     const [redirect, setRedirect] = useState(false);
  
//     useEffect(() => {
//       if (!uploadStarted) return;
//       const rnd = Math.floor(Math.random() * charts.length);
//       setChartIndex(rnd);
//       setStepIndex(0);
//       setCompleted(false);
//       setResult(null);
  
//       const interval = setInterval(() => {
//         setStepIndex(prev => {
//           const max = charts[rnd].length - 1;
//           if (prev < max) return prev + 1;
//           clearInterval(interval);
//           return prev;
//         });
//       }, 3000);
//       return () => clearInterval(interval);
//     }, [uploadStarted]);
  
//     const handleUploadStart = () => setUploadStarted(true);
//     const handleIngest = res => { setResult(res); setCompleted(true); };
  
//     const currentImages = charts[chartIndex];
//     const totalSteps = currentImages.length;
  
//     if (redirect) return <Redirect to="/dashboard" />;
  
//     return (
//       <>
//         <style>{`
//           @keyframes flip {
//             0% { transform: scaleX(1); }
//             50% { transform: scaleX(-1); }
//             100% { transform: scaleX(1); }
//           }
//           @keyframes flipV {
//             0% { transform: scaleY(1); }
//             50% { transform: scaleY(-1); }
//             100% { transform: scaleY(1); }
//           }
//           .flip {
//             animation: flip 6s infinite;
//           }
//           .flipV {
//             animation: flipV 6s infinite;
//           }
//         `}</style>
  
//         <Container fluid className="main-content-container px-4">
//           <Row noGutters className="page-header py-4">
//             <PageTitle sm="4" title="Upload Project" subtitle="Let's" className="text-sm-left" />
//           </Row>
//           <Row>
//             <Col lg="12" className="mb-4">
//               <Card small>
//                 <CardHeader className="border-bottom">
//                   <h6 className="m-0">Zipped Project</h6>
//                 </CardHeader>
  
//                 {!uploadStarted && (
//                   <UploadProjectForm onUploadStart={handleUploadStart} onIngest={handleIngest} />
//                 )}
  
//                 {uploadStarted && !completed && (
//                   <div className="p-4 text-center">
//                     <img src={loaderGif} alt="Loading" style={{ width: 50, height: 50 }} />
//                     <img src={iconImg} alt="Icon" className="flipV" style={{ width: 50, height: 50, marginLeft: 12 }} />
//                   </div>
//                 )}
  
//                 {uploadStarted && !completed && stepIndex >= 0 && (
//                   <div className="p-4 text-center">
//                     <h5 className="mb-3 font-weight-bold">
//                       Processing Step {stepIndex + 1}
//                     </h5>
//                     <img
//                       src={currentImages[stepIndex]}
//                       alt={`Step ${stepIndex + 1}`}
//                       style={{ maxWidth: '100%', height: 'auto' }}
//                     />
//                   </div>
//                 )}
  
//                 {completed && result && (
//                   <>
//                     <div className="p-4 text-center">
//                       <h5 className="mb-3 font-weight-bold">
//                         Final Step {totalSteps}
//                       </h5>
//                       <img
//                         src={currentImages[totalSteps - 1]}
//                         alt={`Final Step`}
//                         style={{ maxWidth: '100%', height: 'auto' }}
//                       />
//                     </div>
  
//                     <div className="p-4 bg-light rounded shadow-sm mt-3">
//                       <h6 className="font-weight-bold mb-2">Ingest Result</h6>
//                       <pre className="small text-monospace">{result}</pre>
//                     </div>
  
//                     <div className="px-4 pb-4 text-right">
//                       <Button onClick={() => setRedirect(true)} theme="primary">
//                         Go to Dashboard
//                       </Button>
//                     </div>
//                   </>
//                 )}
  
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   };
  
//   export default ProjectUpload;


import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
} from "shards-react";
import { Redirect } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageTitle from "../components/common/PageTitle";
import UploadProjectForm from "../components/components-overview/UploadProjectForm";

import f1_1 from "../assets/flowchart1/1flowchart-1.png";
import f1_2 from "../assets/flowchart1/1flowchart-2.png";
import f1_3 from "../assets/flowchart1/1flowchart-3.png";
import f1_4 from "../assets/flowchart1/1flowchart-4.png";
import f1_5 from "../assets/flowchart1/1flowchart-5.png";
import f1_6 from "../assets/flowchart1/1flowchart-6.png";
import f1_7 from "../assets/flowchart1/1flowchart-7.png";
import f1_8 from "../assets/flowchart1/1flowchart-8.png";
import f1_9 from "../assets/flowchart1/1flowchart-9.png";

import f2_1 from "../assets/flowchart1/1flowchart-1.png";
import f2_2 from "../assets/flowchart1/1flowchart-2.png";
import f2_3 from "../assets/flowchart1/1flowchart-3.png";
import f2_4 from "../assets/flowchart1/1flowchart-4.png";
import f2_5 from "../assets/flowchart1/1flowchart-5.png";
import f2_6 from "../assets/flowchart1/1flowchart-6.png";
import f2_7 from "../assets/flowchart2/2flowchart-7.png";
import f2_8 from "../assets/flowchart2/2flowchart-8.png";
import f2_9 from "../assets/flowchart2/2flowchart-9.png";
import f2_10 from "../assets/flowchart2/2flowchart-10.png";
import f2_11 from "../assets/flowchart2/2flowchart-11.png";
import f2_12 from "../assets/flowchart2/2flowchart-12.png";
import f2_13 from "../assets/flowchart2/2flowchart-13.png";

import f3_1 from "../assets/flowchart1/1flowchart-1.png";
import f3_2 from "../assets/flowchart1/1flowchart-2.png";
import f3_3 from "../assets/flowchart1/1flowchart-3.png";
import f3_4 from "../assets/flowchart1/1flowchart-4.png";
import f3_5 from "../assets/flowchart1/1flowchart-5.png";
import f3_6 from "../assets/flowchart1/1flowchart-6.png";
import f3_7 from "../assets/flowchart2/2flowchart-7.png";
import f3_8 from "../assets/flowchart2/2flowchart-8.png";
import f3_9 from "../assets/flowchart2/2flowchart-9.png";
import f3_10 from "../assets/flowchart2/2flowchart-10.png";
import f3_11 from "../assets/flowchart2/2flowchart-11.png";
import f3_12 from "../assets/flowchart2/2flowchart-12.png";
import f3_13 from "../assets/flowchart3/3flowchart-13.png";
import f3_14 from "../assets/flowchart3/3flowchart-14.png";
import f3_15 from "../assets/flowchart3/3flowchart-15.png";
import f3_16 from "../assets/flowchart3/3flowchart-16.png";

// Loader and icon
import loaderGif from "../assets/gpt-loader.gif";
import iconImg from "../assets/gpt-icon.png";

// Array of arrays for each chart
const charts = [
  [f1_1, f1_2, f1_3, f1_4, f1_5, f1_6, f1_7, f1_8, f1_9],                 // 9 steps
  [f2_1, f2_2, f2_3, f2_4, f2_5, f2_6, f2_7, f2_8, f2_9, f2_10, f2_11, f2_12, f2_13], // 13 steps
  [f3_1, f3_2, f3_3, f3_4, f3_5, f3_6, f3_7, f3_8, f3_9, f3_10, f3_11, f3_12, f3_13, f3_14, f3_15, f3_16], // 16 steps
];

const ProjectUpload = () => {
    const [uploadStarted, setUploadStarted] = useState(false);
    const [chartIndex, setChartIndex] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const [result, setResult] = useState(null);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [ingestFinished, setIngestFinished] = useState(false);
    const [redirect, setRedirect] = useState(false);
  
    // Start animation when upload starts
    useEffect(() => {
      if (!uploadStarted) return;
      const rnd = Math.floor(Math.random() * charts.length);
      setChartIndex(rnd);
      setStepIndex(0);
      setAnimationFinished(false);
      setIngestFinished(false);
      setResult(null);
  
      const interval = setInterval(() => {
        setStepIndex(prev => {
          const maxIndex = charts[rnd].length - 1;
          if (prev < maxIndex) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setAnimationFinished(true);
            return prev;
          }
        });
      }, 4500);
  
      return () => clearInterval(interval);
    }, [uploadStarted]);
  
    // Handle ingestion result
    const handleUploadStart = () => setUploadStarted(true);
    const handleIngest = res => {
      setResult(res);
      setIngestFinished(true);
    };
  
    const currentImages = charts[chartIndex];
    const totalSteps = currentImages.length;
    const completed = animationFinished && ingestFinished;
  
    if (redirect) return <Redirect to="/blog-overview" />;
  
    return (
      <>
        <style>{`
          @keyframes flipV {
            0% { transform: scaleY(1); }
            50% { transform: scaleY(-1); }
            100% { transform: scaleY(1); }
          }
          .flipV { animation: flipV 1s infinite; }
        `}</style>
  
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Upload Project" subtitle="Let's" />
          </Row>
          <Row>
            <Col lg="12" className="mb-4">
              <Card small>
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Zipped Project</h6>
                </CardHeader>
  
                {/* Upload form */}
                {!uploadStarted && (
                  <UploadProjectForm
                    onUploadStart={handleUploadStart}
                    onIngest={handleIngest}
                  />
                )}
  
                {/* Loader while animation hasn't started */}
                {uploadStarted && !animationFinished && !completed && (
                  <div className="p-4 text-center">
                    <img src={loaderGif} alt="Loading" style={{ width: 50, height: 50 }} />
                    {/* <img src={iconImg} alt="Icon" className="flipV" style={{ width: 50, height: 50, marginLeft: 12 }} /> */}
                  </div>
                )}
  
                {/* Show steps during animation */}
                {uploadStarted && !animationFinished && stepIndex > 0 && (
                  <div className="p-4 text-center">
                    <h5 className="mb-3 font-weight-bold">
                      Processing Step {stepIndex + 1}
                    </h5>
                    <img
                      src={currentImages[stepIndex]}
                      alt={`Step ${stepIndex + 1}`}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                )}
  
                {/* Final step still shown while waiting for ingest */}
                {uploadStarted && animationFinished && !ingestFinished && (
                  <div className="p-4 text-center">
                    <h5 className="mb-3 font-weight-bold">
                      Final Step {totalSteps}
                    </h5>
                    <img
                      src={currentImages[totalSteps - 1]}
                      alt="Final Step"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                )}
  
                {/* Show result once both animation and ingest complete */}
                {completed && (
                  <>
                     <div className="p-4 text-center">
                        <h5 className="mb-3 font-weight-bold">
                            Final Process
                        </h5>
                        <img
                        src={currentImages[totalSteps - 1]}
                        alt="Final Step"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="p-4 bg-light rounded shadow-sm mt-3">
                      <h6 className="font-weight-bold mb-2">Ingest Result</h6>
                      <pre className="small text-monospace">{result}</pre>
                    </div>
                    <div className="px-4 pb-4 text-right">
                      <Button onClick={() => setRedirect(true)} theme="primary">
                        Go to Dashboard
                      </Button>
                    </div>
                  </>
                )}
  
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default ProjectUpload;







