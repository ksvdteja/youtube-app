import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Live",
  "Gaming",
  "AI",
  "Mixes",
  "Recently Uploaded",
  "Watched",
  "Information",
  "JavaScript",
  "DSA",
  "React"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}

      {/* <Button name="All"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="Gaming"/>
      <Button name="AI"/>
      <Button name="Mixes"/>
      <Button name="Recently Uploaded"/>
      <Button name="Watched"/> */}
    </div>
  );
};

export default ButtonList;
