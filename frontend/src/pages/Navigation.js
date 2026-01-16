import React from 'react'
import { NavLink } from 'react-router';

export default function Navigation() {
  return (
    <nav className="">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/mentors"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Mentors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
