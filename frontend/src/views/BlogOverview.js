import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
// import UsersOverview from "./../components/blog/UsersOverview";
import RefactoredFiles from "./../components/blog/RefactoredFiles";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

import CyclomaticComplexityOverview from "./../components/blog/CyclomaticComplexityOverview";

const BlogOverview = ({ smallStats }) => {
  const [result, setResult] = useState(null);
  const [dynamicStats, setDynamicStats] = useState(smallStats);

  useEffect(() => {
    // Fetch the JSON file from FastAPI
    fetch("http://localhost:8000/result_json")
      .then((res) => res.json())
      .then((data) => {
        setResult(data); // formatted
        // Update the smallStats with dynamic value
        const updatedStats = smallStats.map((stat) => {
          const dynamicValueSp =
              data &&
              data.analysis &&
              data.analysis.pre_refactor &&
              data.analysis.pre_refactor.files
                ? data.analysis.pre_refactor.files.toString()
                : null;
          
          let updatedValue = stat.value;
          let updatedIncrease = stat.increase;
          let UpdatedPercentage = stat.percentage;
          let pre_cc = data.analysis.pre_refactor.overall.cyclomatic_complexity.sum;
          let pre_loc = data.analysis.pre_refactor.overall.lines_of_code;
          let pre_issues = data.analysis.pre_refactor.overall.hlint_suggestions.total;
          let pre_score = data.analysis.pre_refactor.overall.code_quality_score;

          if (stat.label === "Files" && dynamicValueSp != null) {
            updatedValue = data.analysis.pre_refactor.files.length.toString();
          }
          if (stat.label === "Cyclomatic Complexity") {
            updatedValue = data.analysis.post_refactor.hybrid.one_shot.overall.cyclomatic_complexity.sum;
            if(updatedValue <= pre_cc){
              updatedIncrease = true;
              UpdatedPercentage = (((pre_cc - updatedValue) / pre_cc) * 100).toFixed(2) + "%";
              UpdatedPercentage = UpdatedPercentage.toString();

            }
            updatedValue = updatedValue.toString();
          }
          if (stat.label === "LOC") {
            updatedValue = data.analysis.post_refactor.hybrid.one_shot.overall.lines_of_code;
            if(updatedValue <= pre_loc){
              updatedIncrease = true;
              UpdatedPercentage = (((pre_loc - updatedValue) / pre_loc) * 100).toFixed(2) + "%";
              UpdatedPercentage = UpdatedPercentage.toString();

            }
            updatedValue = updatedValue.toString();
          }
          if (stat.label === "Issues") {
            updatedValue = data.analysis.post_refactor.hybrid.one_shot.overall.hlint_suggestions.total;
            if(updatedValue <= pre_issues){
              updatedIncrease = true;
              UpdatedPercentage = (((pre_issues - updatedValue) / pre_issues) * 100).toFixed(2) + "%";
              UpdatedPercentage = UpdatedPercentage.toString();

            }
            updatedValue = updatedValue.toString();
          }
          if (stat.label === "Code Quality Score") {
            updatedValue = data.analysis.post_refactor.hybrid.one_shot.overall.code_quality_score;
            if(updatedValue >= pre_score){
              updatedIncrease = true;
              UpdatedPercentage = (((updatedValue - pre_score) / updatedValue) * 100).toFixed(2) + "%";
              UpdatedPercentage = UpdatedPercentage.toString();

            }
            updatedValue = updatedValue.toString();
          }

          console.log("Updating stat:", stat.label, "->", updatedValue);
          return {
            ...stat,
            value: updatedValue,
            percentage: UpdatedPercentage,
            increase: updatedIncrease,
          };
          // return stat;
        });

        setDynamicStats(updatedStats);
      })
      .catch((err) => {
        console.error("Failed to fetch JSON:", err);
      });
  }, []);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Project Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
      </Row>

      {/* Small Stats Blocks */}
      <Row>
        {dynamicStats.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
            <SmallStats
              id={`small-stats-${idx}`}
              variation="1"
              chartData={stats.datasets}
              chartLabels={stats.chartLabels}
              label={stats.label}
              value={stats.value}
              percentage={stats.percentage}
              increase={stats.increase}
              decrease={stats.decrease}
            />
          </Col>
        
        ))}
      </Row>

      {/* Display JSON result from backend */}
      {/* {result && (
        <Row>
          <Col lg="12" className="mb-4">
            <div className="bg-light p-3 border rounded">
              <h5 className="mb-2">Ingest Result</h5>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                {JSON.stringify(result.analysis.pre_refactor.overall, null, 2)}
              </pre>
            </div>
          </Col>
        </Row>
      )} */}

      <Row>
        {/* Users Overview */}
        <Col lg="8" md="12" sm="12" className="mb-4">
          <CyclomaticComplexityOverview />
        </Col>

        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4">
          <RefactoredFiles />
        </Col>

        {/* New Draft */}
        {/* <Col lg="4" md="6" sm="12" className="mb-4">
          <NewDraft />
        </Col> */}

        {/* Discussions */}
        {/* <Col lg="5" md="12" sm="12" className="mb-4">
          <Discussions />
        </Col> */}

        {/* Top Referrals */}
        {/* <Col lg="3" md="12" sm="12" className="mb-4">
          <TopReferrals />
        </Col> */}
      </Row>
    </Container>
  );
};

BlogOverview.propTypes = {
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Files",
      value: "2,390",
      percentage: "",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Cyclomatic Complexity",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "LOC",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Issues",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Code Quality Score",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    }
    // {
    //   label: "LOC",
    //   value: "8,147",
    //   percentage: "3.8%",
    //   increase: true,
    //   decrease: false,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,180,0,0.1)",
    //       borderColor: "rgb(255,180,0)",
    //       data: [2, 3, 3, 3, 4, 3, 3]
    //     }
    //   ]
    // },
    // {
    //   label: "Issues",
    //   value: "29",
    //   percentage: "",
    //   increase: false,
    //   decrease: false,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,65,105,0.1)",
    //       borderColor: "rgb(255,65,105)",
    //       data: [1, 7, 1, 3, 1, 4, 8]
    //     }
    //   ]
    // },
    // {
    //   label: "Subscribers",
    //   value: "17,281",
    //   percentage: "2.4%",
    //   increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgb(0,123,255,0.1)",
    //       borderColor: "rgb(0,123,255)",
    //       data: [3, 2, 3, 2, 4, 5, 4]
    //     }
    //   ]
    // }
  ]
};

export default BlogOverview;
