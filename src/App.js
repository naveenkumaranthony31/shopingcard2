import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./navigation";
import Header from "./header";
import Section from "./section";

function App() {
  const Product = [
    {
      id: 1,
      name: "Fancy Product",
      price1: "$40.00 -$80.00 ",
      isEnable: true,
      ratingStar: false,
      sale: false,
    },
    {
      id: 2,
      name: "Special Item",
      price: "$20.00",
      price1: " $18.00",
      isEnable: false,
      ratingStar: true,
      sale: true,
    },
    {
      id: 3,
      name: "Sale Item",
      price: "$50.00 ",
      price1: "$25.00",
      isEnable: false,
      ratingStar: false,
      sale: true,
    },
    {
      id: 4,
      name: "Popular Item",
      price1: "$40.00",
      isEnable: false,
      ratingStar: true,
      sale: false,
    },
    {
      id: 5,
      name: "Sale Item",
      price: "$50.00",
      price1: " $25.00",
      isEnable: false,
      ratingStar: false,
      sale: true,
    },
    {
      id: 6,
      name: "Fancy Product",
      price1: "$40.00 -  $80.00",
      isEnable: true,
      ratingStar: false,
      sale: false,
    },
    {
      id: 7,
      name: "Special Item",
      price: "$20.00",
      price1: " $18.00",
      isEnable: false,
      ratingStar: true,
      sale: true,
    },
    {
      id: 8,
      name: "Popular Item",
      price1: "$40.00",
      isEnable: false,
      ratingStar: true,
      sale: false,
    },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Navigation></Navigation>
      </nav>
      <Header></Header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Product.map((item) => {
              return <Section item={item}></Section>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
