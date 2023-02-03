import React, { useState } from "react";

import {
  Header,
  Image,
  Segment,
  Icon,
  Menu,
  Button,
  Container,
  List,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

function NavBar({ loggedUser, handleLogout }) {
  console.log(loggedUser, "<------ LOGGED USER");

  return (
    <>
      <Segment>
        <Menu borderless>
          <Menu.Item name="addSneaker">
            <a href="https://www.nike.com/">
              <span>
                <Icon name="arrow left" size="tiny" />
                Vist Nike.com
              </span>
            </a>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="signup"
              // active={activeItem === 'signup'}
              // onClick={this.handleItemClick}
            >
              <Link to="">
                <Image
                  src={
                    loggedUser?.photoUrl
                      ? loggedUser?.photoUrl
                      : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                  }
                  avatar
                ></Image>
              </Link>
            </Menu.Item>

            <Menu.Item
              name="username"
              // active={activeItem === 'help'}
              // onClick={this.handleItemClick}
            >
              {loggedUser?.username ? loggedUser.username : "User"}
            </Menu.Item>
            <Menu.Item
              name="logout"
              // active={activeItem === 'help'}
              // onClick={this.handleItemClick}
            >
              <Link to="" onClick={handleLogout}>
                Logout
              </Link>
            </Menu.Item>
            <Menu.Item
              name="help"
              // active={activeItem === 'help'}
              // onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {/* <Segment clearing>
      <Segment> */}

        {/* <div>
          <a href="https://www.nike.com/">
            <span>
              <Icon name="arrow left" size="tiny" />
              Vist Nike.com
            </span>
          </a>
          <List horizontal link floated="right">
            <List.Item as="a">
              <Link to="">
                <Image
                  src={
                    loggedUser?.photoUrl
                      ? loggedUser?.photoUrl
                      : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                  }
                  avatar
                ></Image>
              </Link>
            </List.Item>
            <List.Item as="a">
              {loggedUser?.username ? loggedUser.username : "User"}
            </List.Item>
            <List.Item as="a">
              <Link to="" onClick={handleLogout}>
                Logout
              </Link>
            </List.Item>
            <List.Item as="a">Help</List.Item>
            <List.Item as="a">
              <svg
                width="19px"
                height="19px"
                fill="#757575"
                viewBox="0 0 25 32"
              >
                <path d="M23.92 8.64L3.84 5.76 1.2 4.08Q.88 3.92.6 4t-.48.36-.12.6.4.48l2.56 1.6 4.48 11.2-1.6 4q-.16.4.08.76t.64.36h16.48q.32 0 .56-.24t.24-.56-.24-.56-.56-.24H7.68l1.12-2.72h14.32q.32 0 .56-.2t.24-.52l.64-8.8q.08-.32-.12-.56t-.52-.32zM22 23.6q-.88 0-1.56.64t-.68 1.56.68 1.56T22 28t1.56-.64.68-1.56-.68-1.56T22 23.6zm-12.32 0q-.96 0-1.6.64t-.64 1.56.64 1.56 1.56.64 1.56-.64.64-1.56-.64-1.56-1.52-.64z"></path>
              </svg>
            </List.Item>
            <List.Item as="a">
              <svg
                data-qa="locale-selector-pin-icon"
                className="d-sm-ib va-sm-m"
                fill="#757575"
                height="24"
                width="24"
                viewBox="0 0 17 32"
              >
                <path d="M8.48 4Q6.16 4 4.24 5.16T1.16 8.28 0 12.6t1.44 4.6L8.56 28l7.12-10.8q1.36-2.24 1.36-4.6t-1.16-4.32-3.12-3.12T8.48 4z"></path>
              </svg>
              United States
            </List.Item>
          </List>
        </div>
      </Segment> */}

        <Menu>
          <Menu.Item
            name="addSneaker"
            //   active={activeItem === 'browse'}
            //   onClick={this.handleItemClick}
          >
            <Link to="/">
              <Image src="https://i.imgur.com/YjdakSp.png" size="tiny"></Image>
            </Link>
          </Menu.Item>

          <Menu.Menu position="right">
            <Link to="/addsneaker">
              <Menu.Item name="addSneaker">
                <Button secondary>Add Sneaker</Button>
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </Segment>
    </>
  );
}

export default NavBar;
