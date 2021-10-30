import { Link } from "react-router-dom";

const ShowProducs = ({ allData, filter, setFilter }) => {
  const filterProduct = category => {
    const updatedList = allData.filter(x => x.category === category);
    setFilter(updatedList);
  };

  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark" onClick={() => setFilter(allData)}>
          All
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct("jewelery")}>
          Jewelery
        </button>
        <button className="btn btn-outline-dark ms-2" onClick={() => filterProduct("electronics")}>
          Electronic
        </button>
      </div>
      {filter.map(product => (
        <>
          <div className="col-md-3 mb-4">
            <div class="card h-100 text-center p-4" key={product.id}>
              <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
              <div class="card-body">
                <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                <p class="card-text lead fw-bold">${product.price}</p>
                <Link to={`/products/${product.id}`} class="btn btn-outline-dark">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ShowProducs;
