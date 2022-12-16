const getFeaturedRequest = fetch("https://coral-app-9qyk6.ondigitalocean.app/api/products/getFeatured/");

let featuredProducts=[]

const getFeaturedProductsData = async () => {
    let response = await getFeaturedRequest;
    let data = await response.json();
    localStorage.setItem("featuredProducts",JSON.stringify(data.data));

  };

  const getProductHTMLRow = (p, i) => {
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div class="product-item bg-light mb-4">
        <div class="product-img position-relative overflow-hidden">
            <img class="img-fluid w-100" src="${p.image}" alt="">
            <div class="product-action">
                <a class="btn btn-outline-dark btn-square" href="#" onclick="addSingleProductToCart(${p})"><i class="fa fa-shopping-cart"></i></a>
                <a class="btn btn-outline-dark btn-square" href="#"><i class="far fa-heart"></i></a>
                <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
                <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-search"></i></a>
            </div>
        </div>
        <div class="text-center py-4">
            <a class="h6 text-decoration-none text-truncate" href="">${p.name}</a>
            <div class="d-flex align-items-center justify-content-center mt-2">
                <h5>${p.price-p.price*p.discount}</h5><h6 class="text-muted ml-2"><del>${p.price}</del></h6>
            </div>
            <div class="d-flex align-items-center justify-content-center mb-1">
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small>(${p.rating_count})</small>
            </div>
        </div>
    </div>
</div>`;
  };


  try {
    getFeaturedProductsData()
    featuredProducts = JSON.parse(localStorage.getItem("featuredProducts") || "[]");
    document.getElementById("fProducts").innerHTML = "";
    featuredProducts.forEach((p, i) => {
    document.getElementById("fProducts").innerHTML += getProductHTMLRow(p, i);
  });
  } catch (err) {
    console.log(err);
  }

 




