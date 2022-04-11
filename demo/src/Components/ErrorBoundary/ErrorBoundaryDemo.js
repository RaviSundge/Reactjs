import React from "react";
import ErrorHandling from "./ErrorHandling";
import Product from "./Product";
const ErrorBoundaryDemo = () => {
  return (
    <>
      <section style={{ display: "flex", margin: 10, padding: 10 }}>
        <ErrorHandling>
          <Product
            title={"Samsung mobile"}
            brand={"samsung"}
            price={"50000"}
            desc={"someting about product"}
          />
        </ErrorHandling>
        <ErrorHandling>
          <Product
            title={"Samsung mobile"}
            brand={"samsung"}
            // price={"50000"}
            desc={"someting about product"}
          />
        </ErrorHandling>
        <ErrorHandling>
          <Product
            title={"Samsung mobile"}
            brand={"samsung"}
            price={"50000"}
            desc={"someting about product"}
          />
        </ErrorHandling>
        <ErrorHandling>
          <Product
            title={"Samsung mobile"}
            brand={"samsung"}
            // price={"50000"}
            desc={"someting about product"}
          />
        </ErrorHandling>
      </section>
    </>
  );
};

export default ErrorBoundaryDemo;
