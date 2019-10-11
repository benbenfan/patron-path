import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class Locale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [{}]
    };
  }

  // breaking the parent data into course info, it's a little messy but pretty straight forward
  locationInfo() {
    
    // location is my course information
    let location = this.props.data[1];
    // try to escape before errors occur
    if (location === null || typeof location === "undefined" || location.length === 0) {
      return;
    }
    let info = [];
    let city = location.mixedcity;
    let county = location.mixedcounty;
    let zip = location.zipcode;
    let state = location.statecode;
    let countyFIPS = location.countyFIPS;
    let stateFIPS = location.stateFIPS;
    let longitude = location.longitude;
    let latitude = location.latitude;
    let gmt = location.gmt;
    let dst = location.dst;
    info.push({ __html: "Location: " +  city + ", " + state + " " + zip + " - " + stateFIPS});
    info.push({ __html:  "County: " + county + " - " + countyFIPS});
    info.push({ __html:  "Longitutde: " + longitude + "; Latitude " + latitude});
    // info.push({ __html:  "gmt: " + gmt + " and dst: " + dst});
    // info.push({ __html: "Credits: " + credits });
    // info.push({ __html: description });
    // info.push({ __html: "Keywords: " + keywords });
    // info.push({ __html: "Subject: " + sub });
    // let courseList = this.props.courseList;
    // // Map the Requisite Key to the course Name
    // let req = "";
    // for (let requisite of requisites) {
    //   for (let j = 0; j < requisite.length; j++) {
    //     for (let i = 0; i < courseList.length; i++) {
    //       if (requisite[j] === courseList[i].key) {
    //         if (req.length > 0) {
    //           // This test only works for the data provided since we don't have multiple 1D and 1D arrays, would require additional checks if implimeneted
    //           // The list of course requisites consists of 1D lists with AND operations between them. Each 1D list has OR operations between elements. 
    //           if (requisite.length > 1) {
    //             req += ", OR "
    //           } else {
    //             req += ", AND "
    //           }
    //         }
    //         req += courseList[i].props.data[1].name;
    //       }
    //     }
    //   }
    // }
    // if (req.length < 1) {
    //   req = "None"
    // }
    // info.push({ __html: "Prereqs: " + req });

    return info;
  }

  // parse the section data to display a table
  // createTable() {
  //   const html_str_builder = [];
  //   let sec = this.props.data[1].sections;
  //   var keyNames = Object.keys(sec);
  //   let tableCounter = 0;
  //   if (sec !== null && typeof sec !== "undefined") {
  //     const entries = Object.entries(sec);
  //     for (const entry of entries) {
  //       if (tableCounter % 2 === 0 || tableCounter === 0) {
  //         html_str_builder.push("<div class=\"floatLeft\">");
  //       } else {
  //         html_str_builder.push("<div class=\"floatRight\">");
  //       }
  //       const insides = Object.entries(entry[1]);
  //       html_str_builder.push("<table>")
  //       html_str_builder.push("<thead>");
  //       html_str_builder.push("<th>" + keyNames[tableCounter] + "</th>")
  //       html_str_builder.push("<th></th>")
  //       html_str_builder.push("</thead>");
  //       // insides show what each entry holds
  //       for (const inside of insides) {
  //         html_str_builder.push("<tr>")
  //         for (let i = 0; i < 1; i++) {
  //           html_str_builder.push("<td>" + inside[0] + "</td>");
  //           if (inside[1].length > 1) {
  //             html_str_builder.push("<td>" + inside[1] + "</td>");
  //           } else {
  //             const dateTimes = Object.entries(inside[1]);
  //             html_str_builder.push("<td>", "<ul>");
  //             for (const dt of dateTimes) {
  //               if (dt[0].startsWith("DIS") || dt[0].startsWith("LAB")) {
  //                 html_str_builder.push("<li>" + dt[0] + "</li>");
  //               }
  //               else {
  //                 html_str_builder.push("<li>" + dt[0] + ": " + dt[1] + "</li>");
  //               }
  //             }
  //             html_str_builder.push("</ul>", "</td>");
  //           }

  //         }
  //         html_str_builder.push("</tr>");
  //       }
  //       html_str_builder.push("</table></br></div>");
  //       tableCounter++;
  //     }
  //   }
  //   return { __html: html_str_builder.join("") };
  // }

  MyComponent() {
    return <Card style={{
      marginTop: '1rem',
      backgroundColor: '#E2E4D7',
      fontFamily: "Arial, Helvetica, sans-serif",
      color: "#87AE77",
      borderRadius: "8px"
    }}>
      <Card.Body >
        <Card.Title style={
          {
            backgroundColor: '#CAD7B9',
            padding: "15px",
            paddingLeft: "20px",
            textAlign: "center",
            borderRadius: "25px",
            color: "#4f5f76"
          }
        }>
          <div dangerouslySetInnerHTML={this.locationInfo()[0]} />
          <span style={{
            // width: "20rem",
          }
          } dangerouslySetInnerHTML={this.locationInfo()[1]} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span style={{
            paddingLeft: "40px",
            textAlign: "right",
          }
          } dangerouslySetInnerHTML={this.locationInfo()[2]} />
        </Card.Subtitle>
        {/* <p dangerouslySetInnerHTML={this.courseInfo()[2]} /> */}
      </Card.Body>
     {/* <ListGroup variant="flush" style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}> */}
        {/* <ListGroup.Item
          style={{
            backgroundColor: '#DCC7AA',
            color: "#4f5f76",
            borderRadius: "7px"
          }}><span dangerouslySetInnerHTML={this.courseInfo()[3]} /></ListGroup.Item> */}
         {/* <ListGroup.Item
          style={{
            backgroundColor: '#c9af98',
            color: "#4f5f76",
            borderRadius: "7px"
          }}><span dangerouslySetInnerHTML={this.courseInfo()[5]} /></ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: '#acb7bf',
            color: "#4f5f76",
          }}>
          <Accordion>
            <Card
              style={{
                backgroundColor: '#acb7bf',
                color: "#4f5f76",
              }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Schedule(s):
      </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body><div id="insertTable" dangerouslySetInnerHTML={this.createTable()} /></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </ListGroup.Item>*/}
      {/* </ListGroup>  */}
    </Card>;
  }
  alreadyAdded(){
    return true;
  }
  handleClick(){
    alert("something");
    console.log(this.props);
  }

  render() {
   
    return (
      <div id="startDiv">
        {this.MyComponent()}
      </div>
    )
  }
}

export default Locale;
