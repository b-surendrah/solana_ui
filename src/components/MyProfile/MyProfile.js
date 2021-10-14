import React from "react";
import { ButtonGroup } from "reactstrap";
import Badge from "reactstrap/lib/Badge";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import Label from "reactstrap/lib/Label";
import Progress from "reactstrap/lib/Progress";
import Row from "reactstrap/lib/Row";
import Table from "reactstrap/lib/Table";
import UncontrolledButtonDropdown from "reactstrap/lib/UncontrolledButtonDropdown";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import Widget from "../../components/Widget/Widget";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from 'reactstrap';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import ToggleSwitch from "../../pages/toggleSwitch/toggleSwitch";
import more from "../../images/more.png";
import search from "../../images/loupe.png";
const SortableItem = SortableElement(({ value }) => (
  <li className="list-group-item">
    <button className="close flex-last ml-auto" data-dismiss="alert">
      <ToggleSwitch />
    </button>
    {value.text}
  </li>
));

const SortableList = SortableContainer(({ items }) => (
  <ul className="list-group list-group-sortable mt-xs">
    {items.map((value, index) => (
      <SortableItem
        key={`item-${index.toString()}`}
        index={index}
        value={value}
      />
    ))}
  </ul>
));

class MyProfile extends React.Component {
  constructor() {
    super();
    localStorage.setItem('pathName', '1');
    this.state = {
      sortableList: [
        {
          id: "03",
          text: "Is entity an offshore trust?",
        },
        {
          id: "01",
          text: "Does entity have complex structure if ownership?",
        },
        {
          id: "04",
          text: "Is the entity an unregulated investment / fund manager?",
        },
        {
          id: "02",
          text: "Is entity an FGO or Embassy or Consulate from a high risk country?",
        },
      ],
    };
  }

  render() {
    return (
      <div>
       {/* <Modal size="sm" isOpen={true}>
          <ModalHeader>Small modal</ModalHeader>
          <ModalBody className="bg-white">
            No Profile exist , click CONTINUE to create profile and submit for KYC
          </ModalBody>
          <ModalFooter>
            <Button color="default">Close</Button>
            <Button color="primary">
              <a className="nav-link" href="#/app/basic-details">
                CONTINUE
              </a>
            </Button>
          </ModalFooter>
        </Modal> */}
        <div className="col-12">
          <div className="text-center py-4 clients__sec">
            <h3 className="cli__hdr">My Profile Shared with</h3>
            <span>
              Entities which have been provided consent to access my KYC profile{" "}
            </span>
          </div>

          <Table className="fatca__Table">
            <thead>
              <tr className="fs-sm">
                <th className="hidden-sm-down">Entity Name</th>
                <th>Country</th>
                <th>Consent Date</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="fs-sm">
                <td className="hidden-sm-down">
                  <a href="#">XYZ Company Private Limited</a>
                </td>
                <td className="hidden-sm-down">Australia</td>

                <td className="hidden-sm-down">10 Jul 2021</td>
                <td className="hidden-sm-down">
                  <Button color="danger" type="submit" className="btn-sm mr-xs">
                    Revoke
                  </Button>
                </td>
                <td className="hidden-sm-down">
                  <img src={more} width="15" alt="options" />
                </td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">
                  <a href="#">XYZ Company Private Limited</a>
                </td>
                <td className="hidden-sm-down">Australia</td>

                <td className="hidden-sm-down">10 Jul 2021</td>
                <td className="hidden-sm-down">
                  <Button color="danger" type="submit" className="btn-sm mr-xs">
                    Revoke
                  </Button>
                </td>
                <td className="hidden-sm-down">
                  <img src={more} width="15" alt="options" />
                </td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">
                  <a href="#">XYZ Company Private Limited</a>
                </td>
                <td className="hidden-sm-down">Australia</td>

                <td className="hidden-sm-down">10 Jul 2021</td>
                <td className="hidden-sm-down">
                  <Button color="danger" type="submit" className="btn-sm mr-xs">
                    Revoke
                  </Button>
                </td>
                <td className="hidden-sm-down">
                  <img src={more} width="15" alt="options" />
                </td>
              </tr>
              <tr className="fs-sm">
                <td className="hidden-sm-down">
                  <a href="#">XYZ Company Private Limited</a>
                </td>
                <td className="hidden-sm-down">Australia</td>

                <td className="hidden-sm-down">10 Jul 2021</td>
                <td className="hidden-sm-down">
                  <Button color="danger" type="submit" className="btn-sm mr-xs">
                    Revoke
                  </Button>
                </td>
                <td className="hidden-sm-down">
                  <img src={more} width="15" alt="options" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default MyProfile;
