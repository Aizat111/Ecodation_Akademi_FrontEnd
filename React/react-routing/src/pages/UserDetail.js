import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserDetail = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      ({ data }) => {
        setUser(data);
      }
    );
  }, []);
  return (
    <>
      <div className="container mt-5 w-50">
        <h1>{user?.name}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td className="fw-bolder"> Username</td>
              <td> {user?.username}</td>
            </tr>
            <tr>
              <td className="fw-bolder"> Email</td>
              <td> {user?.email}</td>
            </tr>
            <tr>
              <td className="fw-bolder"> Phone</td>
              <td> {user?.phone}</td>
            </tr>
            <tr>
              <td className="fw-bolder"> Website</td>
              <td> {user?.website}</td>
            </tr>
            <tr>
              <td className="fw-bolder"> Company</td>
              <td> {user?.company.name}</td>
            </tr>
            <tr>
              <td colSpan={2} className="fw-bolder">
                {" "}
                Address
              </td>
            </tr>
            <tr>
              <td className="fw-bolder">City</td>
              <td>{user?.address.city}</td>
            </tr>
            <tr>
              <td className="fw-bolder">Street</td>
              <td>{user?.address.street}</td>
            </tr>
            <tr>
              <td className="fw-bolder">Zip Code</td>
              <td>{user?.address.zipcode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
