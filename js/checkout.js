let accessToken;

const loginAPI= fetch("https://coral-app-9qyk6.ondigitalocean.app/api/users/login/",
    {
    method:"POST",
    body: JSON.stringify({"email":"ramymibrahim@yahoo.com","password":"123456"}),
    headers:{
        "Content-Type":"application/json"
      }
    }
);

const loginData = async () => {
    let response = await loginAPI;
    let data = await response.clone().json();
    accessToken =data.token;
    localStorage.setItem("accessToken",accessToken)
  };

  const addOrderAPI= fetch("https://coral-app-9qyk6.ondigitalocean.app/api/orders/",
  {
  method:"POST",
  body:JSON.stringify({
      "sub_total_price": 100.0,
      "shipping": 10.0,
      "total_price": 110.0,
      "user_id": "6346ac23bb862e01fe4b6535",
      "order_date": "2022-01-01",
      "order_details": [
          {
              "product_id": "6346c15ea060efd7cae40589",
              "price": 28,
              "qty": 2
          },
          {
              "product_id": "6346c186a060efd7cae4058b",
              "price": 25,
              "qty": 2
          }
      ],
      "shipping_info": {
          "first_name": "Ramy",
          "last_name": "Ibrahim",
          "email": "ramymibrahim@yahoo.com",
          "mobile_number": "01092812848",
          "address1": "20 M A",
          "address2": "",
          "country": "Egypt",
          "city": "Cairo",
          "state": "Zamalek",
          "zip_code": "11211"
      }
  }),
  headers : { "Content-Type":"application/json","x-access-token":  localStorage.getItem("accessToken")}
  }
);
  
const addOrderData = async () => {
    //console.log( localStorage.getItem("accessToken"))
    let response = await addOrderAPI;
    let data = await response.clone().json();
    console.log(data)
  };
  

placeOrder = ()=>{
  try {
    loginData()
    addOrderData()
  }
  catch(err){
    console.log(err)
  }


}

