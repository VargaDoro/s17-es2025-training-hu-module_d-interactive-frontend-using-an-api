import React from 'react'
import { Outlet } from "react-router";
import Navigation from './Navigation';

export default function Layout() {
  return (
    <main className="container">
      <header>
        <Navigation />
      </header>

      <main className="">
        <Outlet />
      </main>
    </main>
  );
}
