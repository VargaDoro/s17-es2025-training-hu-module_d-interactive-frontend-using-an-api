import React from 'react'
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function DashboardPage( ) {
    const { user, loadUser } = useContext(AuthContext);
    useEffect(() => {
      loadUser();
    }, []);

    if (!user || !user.user  ) {
      return <div>Loading dashboard...</div>;
    }

  return (
    <div>
      <div>
        <h1>Welcome back {user.userName}</h1>
        <h2>Current balance {user.credit}</h2>
      </div>
      <div class="card" style={{ marginTop: "10px" }}>
        <div class="card-body">
          <h5 class="card-title">Enrolled courses</h5>
          <p class="card-text">{user.enrolled}</p>
        </div>
      </div>
      <div class="card" style={{ marginTop: "10px" }}>
        <div class="card-body">
          <h5 class="card-title">Completed chapters</h5>
          <p class="card-text">{user.completedc}</p>
        </div>
      </div>
      <div class="card" style={{ marginTop: "10px" }}>
        <div class="card-body">
          <h5 class="card-title">Total credits earned</h5>
          <p class="card-text">{user.totalcreditse}</p>
        </div>
      </div>
    </div>
    
  )
}
