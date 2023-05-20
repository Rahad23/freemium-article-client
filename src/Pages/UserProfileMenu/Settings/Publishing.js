import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Checkbox from "../Checkbox/Checkbox";

const Publishing = () => {
  const [checkboxState, setCheckboxState] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Manage publications</h1>
      <Checkbox
        label="Allow readers to leave private notes on your stories"
        label2="Private notes are visible to you and (if left in a publication) all Editors of the publication."
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      />
      <div className="divider"></div>
      <Checkbox
        label="Allow email replies"
        label2="Let readers reply to your stories directly from their email."
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      />
      <div className="flex justify-between">
        <p>
          ‘Reply To’ email address
          <br />
          Shown to your subscribers when they reply.
        </p>
        <p>{user.email}</p>
      </div>
      <div className="divider"></div>
      <h1 className="py-8">Promote email subscriptions</h1>
      <div className="flex justify-between py-8">
        <p>
          Share your subscribe page
          <br />
          This page allows readers to subscribe to you via email.
        </p>
        <p>https://freemiumarticles.web.app/</p>
      </div>
      <Checkbox
        label="Display a subscription promotion message"
        label2="A message will display after the second story on your profile and at the bottom of every story page."
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      />
    </div>
  );
};

export default Publishing;
