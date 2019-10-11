import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SearchAndFilter from './SearchAndFilter';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchAndFilter = new SearchAndFilter();
    this.subject = React.createRef();
    this.minimumCredits = React.createRef();
    this.search = React.createRef();
  }

  setLocations() {
    this.props.setLocations(this.searchAndFilter.searchAndFilter(this.props.locations, this.search.current.value, this.subject.current.value, this.minimumCredits.current.value));
  }

  handleCreditsKeyDown(e) {
    if(['0','1','2','3','4','5','6','7','8','9','Backspace','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab'].indexOf(e.key) === -1)
      e.preventDefault();
  }

  getLocationOptions() {
    let locationOptions = [];
    // console.log(this.props.listStates);
    for(const statecode of this.props.listStates) {
      locationOptions.push(<option key={statecode}>{statecode}</option>);
    }

    return locationOptions;
  }

  render() {
    return (
      <>
      {/* calc(100vh - 10px) */}
        <Card style={{width: 'calc(25vw - 1px)', marginLeft: '0.1px', marginBottom:"2rem", height: '10vh-1px', position: 'absolute'}}>
          <Card.Body>
            <Card.Title>Search and Filter</Card.Title>
            <Form>
              <Form.Group controlId="formKeywords" onChange={() => this.setLocations()} style={{width: '100%'}}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Search" autoComplete="off" ref={this.search}/>
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" ref={this.subject} onClick={() => this.setLocations()}>
                  {this.getLocationOptions()}
                </Form.Control>
              </Form.Group>

              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Form.Group controlId="minimumCredits" onChange={() => this.setLocations()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Zip" autoComplete="off" ref={this.minimumCredits}/>
                </Form.Group>
                {/* <div style={{marginLeft: '5px', marginRight: '5px', marginTop: '38px'}}>to</div>
                <Form.Group controlId="maximumCredits" style={{marginTop: '32px'}} onChange={() => this.setLocations()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Control type="text" placeholder="maximum" autoComplete="off" ref={this.maximumCredits}/>
                </Form.Group> */}
              </div>
            </Form>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Sidebar;
