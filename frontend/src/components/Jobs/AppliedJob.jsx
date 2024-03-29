import React, { useEffect, useState } from "react";
import "../Home.css";
const AppliedJob = () => {
  const bookUser = JSON.parse(localStorage.getItem("userId"));
  const [book, setBook] = useState();
  useEffect(() => {
    bookUser &&
      fetch(
        `https://daily-wager.onrender.com/api/v1/book/?bookingUserId=${bookUser?.data?._id}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setBook(json.data);
        });
  }, []);

  const deleteBooking = (e) => {
    const id = e.target.value;
    fetch(`https://daily-wager.onrender.com/api/v1/book/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((response) => {
        const id = response.data._id;
        const dltItem = book.filter((val) => {
          return val._id !== id;
        });
        setBook(dltItem);
      });
    console.log("job deleted");
    alert("work deleted successfully");
  };

  return (
    <div className="container my-3">
      <table className="table table-hover form-size1">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Job Name</th>
            <th scope="col">Job Type</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {bookUser && (
          <>
            {book &&
              book?.map((val) => {
                return (
                  <tbody>
                    <tr>
                      <td>{val.workBookDetail[0].date}</td>
                      <td>{val.workBookDetail[0].workName}</td>
                      <td>{val.workBookDetail[0].workType}</td>
                      <td>{val.workBookDetail[0].salary} Rs/Day</td>
                      <td>
                        <button
                          type="button"
                          className=" btn btn-danger"
                          style={{
                            borderRadius: "10px",
                          }}
                          onClick={deleteBooking}
                          value={val._id}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </>
        )}
        {bookUser == null ? <h1>Please login in to continue</h1> : ""}
      </table>
    </div>
  );
};

export default AppliedJob;
