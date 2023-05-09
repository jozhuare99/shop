import React, {useState} from "react";
import { Nav, Container, Form, Button, InputGroup } from "react-bootstrap";
import NavigationLinkData from "./navigationLinkData";
import {SampleAuthProvider} from "./api/auth"

export default function Header() {
  return (
    <>
      <Container className="my-2 ">
        <Nav
          variant=""
          defaultActiveKey={"/"}
          className="headerMaxHeight user-select-none p-0"
        >
          <div className="d-flex ps-2 flex-nowrap flex-grow-1 ">
            <Nav.Item className="p-0 w-100 mx-auto">
              <Form className="p-0 m-0">
                <InputGroup className="text-input-group-search d-flex justify-content-end align-content-center">
                  <InputGroup.Text className="bg-white border-end-0 border-dark pe-1  ">
                    <i className="bi bi-search text-search-icon my-0 "></i>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Samsung Galaxy"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="textInputSearch rounded-end border-start-0 border-dark py-0 my-0 text-dark"
                  />
                  <Button className="btn-search text-dark bg-white  my-auto border-dark rounded-start">
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Nav.Item>
            <Nav.Item>
              <Container className="cartBagContainer px-2">
                <Nav.Link
                  href="#"
                  onClick={() => {
                    console.log("clicked");
                  }}
                  className="p-0 d-flex text-decoration-none align-items-center text-center justify-content-center"
                >
                  <i
                    role="button"
                    className="fs-1 text-cart-bag text-dark bi bi-bag-fill"
                  ></i>
                  <p
                    role="button"
                    className="cartNumberCount text-white  position-absolute mx-auto mt-4 "
                  >
                    9
                  </p>
                </Nav.Link>
              </Container>
            </Nav.Item>
          </div>
          <div className={`w-auto float-end d-flex flex-nowrap flex-grow-1`}>
            <div className={"mx-auto"}>
              <div className=" h-100  overflow-hidden ">
                <Nav.Link
                  href="account"
                  className="px-1 d-flex justify-content-between align-items-center text-decoration-none"
                >
                  <i
                    role="button"
                    className="text-profile-icon pe-1 text-dark fs-3 bi bi-person-circle"
                  ></i>
                  <p role="button" className="user-name my-auto">
                    name
                  </p>
                </Nav.Link>
              </div>
            </div>
            <NavigationLinkData />
          </div>
        </Nav>
      </Container>
    </>
  );
}

let AuthContext = React.createContext(null)

function AuthProvider({children}){
  let [user, setUser] = useState(null)

  let signin = (newUser, callback) => {
    return SampleAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  let signout = (callback) => {
    return SampleAuthProvider.signout(() => {
      setUser(null);
      callback()
    })
  }

  let value = {
    user, signin, signout
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

