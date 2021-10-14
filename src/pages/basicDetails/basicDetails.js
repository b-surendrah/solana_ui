import React from "react";
import { ButtonGroup } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import UncontrolledButtonDropdown from "reactstrap/lib/UncontrolledButtonDropdown";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import Loader from "../../components/Loader/Loader";
import Widget from "../../components/Widget/Widget";

class BasicDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      readOnly: true,
      showLoader: false,
      basicDetails: {
        legalName: 'ABC Corparation',
        leistatus: 'Registered',
        countryName: 'Singapore',
        countryCode: "ABCFXX",
        registrationNum: '1002343-AXZSDF',
        leiNumber: 'ABC4097092374092BDJ3',
        isciCode: '1122 - Food and Beverages',
        incorpationCountry: 'Singapore',
        date: '12 May 2012',
        entityType:'Subsidiary'
      }
    };
  }

  //   _click() {
  //     this.setState((prevState) => ({ readOnly: !prevState.readOnly }));
  //   }
  enableEditOrSaveOption = (caseVal) => {
    if (caseVal === 1) {
      // console.log('edit ption is enabled');
      this.setState((prevState) => { return { readOnly: false } });
    } else if (caseVal === 2) {
      this.setState((prevState) => { return { readOnly: true } });
      this.setState((prevState) => { return { showLoader: true } });
      setTimeout(() => {
        this.setState((prevState) => { return { showLoader: false } });
      }, 3000);
    }
    // this.setState({ readOnly: !this.state.readOnly });
    // setTimeout(() => {
      console.log('edit ption is enabled 111', this.state.readOnly);
    // }, 1000);
  }

  render() {
    return (
      <div>
        <div className="loader">
          { this.state.showLoader &&
            <Loader className="showLoader" size={50}/>
          }
        </div>
        <div className="col-12">
          <HeaderProfile showSaveBtn={this.state.readOnly} handleSaveFeature={this.enableEditOrSaveOption} handleEditFeature={this.enableEditOrSaveOption}/>
          <Widget settings refresh close>
          
            <FormGroup>
              <Form>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Legal Name
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        readOnly={this.state.readOnly}
                        defaultValue={this.state.basicDetails.legalName}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        LEI Registration Status
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        readOnly={this.state.readOnly}
                        defaultValue={this.state.basicDetails.leistatus}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Primary Country of Operations
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.countryName}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Swift Code
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.countryCode}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Registration Number
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.registrationNum}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        LEI
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.leiNumber}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Primary ISIC Code
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.isciCode}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Incorporation Country
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.incorpationCountry}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Incorporation Date
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.date}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="no-borders-input" className="trans-label">
                        Entity Type
                      </Label>
                      <Input
                        type="text"
                        placeholder=""
                        id="no-borders-input"
                        className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                        defaultValue={this.state.basicDetails.entityType}
                        readOnly={this.state.readOnly}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </FormGroup>
          </Widget>
          <Widget settings refresh close>
            <div className="mb-4 border-bottom pb-3">
              <h4 className="sec__hdr">Address</h4>
            </div>
            <FormGroup>
              <Form>
                <Row>
                  <Col md={6}>
                    <h5 className="article__hdr">Registered</h5>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 1
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="22 Street 11"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            City
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="Singapore"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Country
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="Singapore"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Legal Name
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="#22-30"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 2
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="-"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            State
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="112233"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <h5 className="article__hdr">Operational</h5>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 1
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="22 Street 11"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            City
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="Singapore"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Country
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="Singapore"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Legal Name
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="#22-30"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            Address Line 2
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="-"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="no-borders-input" className="trans-label">
                            State
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            id="no-borders-input"
                            className={`${this.state.readOnly === true ? 'input-no-border' : ''} bg-gray-lighter`}
                            defaultValue="112233"
                            readOnly={this.state.readOnly}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </FormGroup>
          </Widget>
        </div>
        <style>
          {
            `
              .loader{
                position: relative;
              }
              .showLoader{
                position: absolute;
                z-index: 999;
                top: 20vh;
              }
            `
          }
        </style>
      </div>
    );
  }
}

export default BasicDetails;
