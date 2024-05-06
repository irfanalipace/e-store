import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const itemslist = useSelector((state) => state.product.items);

  console.log(itemslist, "itemslist");

  return (
    <div style={{ background: "#0f6433", color: "white" }}>
      Home page
      <ul>
        {itemslist.map((item) => (
          <React.Fragment key={item.id}>
            <li style={{ color: "white" }}>{item.id}</li>
            <li style={{ color: "white" }}>{item.name}</li>
            <li style={{ color: "white" }}>{item.age}</li>
            <li style={{ color: "white" }}>{item.fatherName}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Home;
