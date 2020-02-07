import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Navigation = styled.div`
  nav {
    padding: 20px;
    ul {
      display: flex;
      li {
        list-style: none;
        margin-right: 25px;
        a {
          text-decoration: none;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/swapi">
              <a>Swapi</a>
            </Link>
          </li>
          <li>
            <Link href="/pokemon">
              <a>Pokemon</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
};

export default Nav;
