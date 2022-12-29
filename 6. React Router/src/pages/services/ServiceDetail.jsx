import React from "react";
import { useParams } from "react-router";
import servicesData from "./servicesData";

function ServiceDetail(props) {
  const { serviceID } = useParams();

  const thisService = servicesData.find(service => service.id === serviceID);

  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
    </div>
  );
}

export default ServiceDetail;
