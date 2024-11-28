import React from "react";
import { Container, Navbar, Nav, Tab, Row, Col } from "react-bootstrap";
import ListItem from "./components/ListItem";
import ViewItems from "./components/ViewItems";
import Reports from "./components/Reports";
import EditItem from "./components/EditItem";
import PurchaseItem from "./components/PurchaseItem";
import WithdrawFunds from "./components/WithdrawFunds";
import DeleteItem from "./components/DeleteItem";
import GetOwner from "./components/GetOwner";

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Item Marketplace</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Tab.Container defaultActiveKey="list">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="list">List Item</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="view">View Items</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="edit">Edit Item</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="purchase">Purchase Item</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reports">Reports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="withdraw">Withdraw</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="delete">Delete</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="getOwner">GetOwner</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="list">
                  <ListItem />
                </Tab.Pane>
                <Tab.Pane eventKey="view">
                  <ViewItems />
                </Tab.Pane>
                <Tab.Pane eventKey="edit">
                  <EditItem />
                </Tab.Pane>
                <Tab.Pane eventKey="purchase">
                  <PurchaseItem />
                </Tab.Pane>
                <Tab.Pane eventKey="reports">
                  <Reports />
                </Tab.Pane>
                <Tab.Pane eventKey="withdraw">
                  <WithdrawFunds />
                </Tab.Pane>
                <Tab.Pane eventKey="getOwner">
                  <GetOwner />
                </Tab.Pane>
                <Tab.Pane eventKey="delete">
                  <DeleteItem />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default App;