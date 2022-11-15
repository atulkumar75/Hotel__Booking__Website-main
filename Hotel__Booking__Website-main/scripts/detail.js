var Id = window.location.href.split("=")[2];
var city = window.location.href.split("=")[1].split("&")[0];
var TotalAmount = document.getElementById("total-amount");
const price=1000;
var difference;
function myfunction() {
  var adultInfo = document.getElementById("adults").value;
  TotalAmount.value = "Rs." + adultInfo * price;
}

function currentDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  today =  yyyy + '-' + mm + '-' + dd;
  return today;
}

var fromDate= document.getElementById("from-date");
fromDate.setAttribute("min",currentDate());
function onChangeFromDate(){
  var toDate = document.getElementById("from-date").value;
  document.getElementById("to-date").setAttribute("min",toDate);
}

(function apiCall(){
  document.getElementById("loader").style.display="block";

  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange= ()=>{
    if(xhr.readyState==4 && xhr.status==200){
      var response = xhr.responseText;
      let parseResponse= JSON.parse(response);

      let Rating = response.rating;

      var Star = ["checked", "checked", "checked", "checked", "checked"];
      var RatingStar = [];
      let Ratings = parseInt(Rating);
      for (i = 0; i < Ratings; i++) {
        RatingStar[i] = Star[i];
      }
      var HOTELNAME = response.name;
      var imageDetailPage = `<div class="carousel-item active">
      <img id="hotel-detail-image" src=${parseResponse.photo.images.medium.url} class="d-block w-100" alt="${HOTELNAME}">
    </div>
    <div class="carousel-item ">
      <img id="hotel-detail-image" src="https://tse4.mm.bing.net/th?id=OIP.CeGhihymqbuaodsq-C6L_AHaEK&pid=Api&P=0"class="d-block w-100" alt="${HOTELNAME}">
    </div>
    <div class="carousel-item ">
      <img id="hotel-detail-image" src="https://tse4.mm.bing.net/th?id=OIP.CD2uQ41LA2Lxmq1ltnYMQwHaEo&pid=Api&P=0"class="d-block w-100" alt="${HOTELNAME}">
    </div>`
       document.getElementById("innerCarousel").innerHTML=imageDetailPage;

      var detailPage = `<h2 style="font-weight: bold; font-family: cursive;">${parseResponse.name}</h2>
      <div style="font-weight: bold; font-family: cursive;">RATING</div>
      <br>
      <div>
            <span id="star" class="fa fa-star ${RatingStar[0]}"></span>
            <span id="star" class="fa fa-star ${RatingStar[1]}"></span>
            <span id="star" class="fa fa-star ${RatingStar[2]}"></span>
            <span id="star" class="fa fa-star ${RatingStar[3]}"></span>
            <span class="fa fa-star ${RatingStar[4]}"></span>
      </div>
      <br>
      <div>
          <span style="font-weight: bold; font-family: cursive;">AMENITIES</span>
          <ul id="amenities">
          
          </ul>
      </div>
      <br>
      <div style="font-weight: bold; font-family: cursive;">DESCRIPITION</div>
      <p>
          ${parseResponse.description}
      </p>
  </div>`
  
  document.getElementById("description").innerHTML=detailPage;
      var Info = "";
      for (i = 0; i < 10; i++) {
        Info = Info + "<li>" + parseResponse.amenities[i].name + "</li>";
      }
      document.getElementById("amenities").innerHTML = Info;
      document.getElementById("loader").style.display="none";
    }
  }
  
  xhr.open("GET", `https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=${Id}`);
  xhr.setRequestHeader("X-RapidAPI-Key", "86a8adac7cmshbdc3f1ea8b8506bp19d5fajsn2316bc2b9626");
  xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
  
  xhr.send();
  })();

  function bookTicket() {
    var NoOfAdults = document.getElementById("adults").value;
    localStorage.setItem("no of adults", NoOfAdults);
    var cusName = document.getElementById("name").value;
    localStorage.setItem("customer Name", cusName);
    var date1 = document.getElementById("from-date").value;
    localStorage.setItem("check In date", date1);
    var date2 = document.getElementById("to-date").value;
    localStorage.setItem("to date", date2);
    var amount = document.getElementById("total-amount").value;
    localStorage.setItem("total amount", amount);
  }

  function handlePaymentPage(event){
    event.preventDefault();
    window.location.href=`payment.html?city=${city}&id=${Id}`;
  }