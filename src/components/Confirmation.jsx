import React, { useState } from "react";

function Confirmation({ reservationNumber, allPersoData }) {
  const [confirmation, setConfirmation] = useState(false);

  let reservationNumberFormatted = { id: reservationNumber };
  //   console.log(reservationNumberFormatted);
  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationNumberFormatted),
  };

  fetch("https://footrypleaseworkanddeletelateron.fly.dev/fullfill-reservation", options)
    .then((response) => response.json())
    .then((response) => setConfirmation(true))
    .catch((err) => console.error(err));

  //   console.log("The reservation number is : ", reservationNumber);

  const data = allPersoData[0];
  let firstNames = [];

  data.map((name) => {
    // console.log(name);
    firstNames.push(name.firstname);
  });

  //   console.log(firstNames);
  return (
    <>
      <h2>Confirmation</h2>
      {confirmation && (
        <div>
          <h3>Your reservation is confirmed.</h3>
          <p>Your reservation number is {reservationNumber}, keep it safe.</p>
          <p>
            {firstNames.map((firstname) => (
              <span>{firstname}, </span>
            ))}
            we look forward to seeing you at LoudCrowdFest this year !!!
          </p>
        </div>
      )}
      {!confirmation && <div>The reservation process failed. We're so sorry for the inconvenience, please try again.</div>}
    </>
  );
}

export default Confirmation;
