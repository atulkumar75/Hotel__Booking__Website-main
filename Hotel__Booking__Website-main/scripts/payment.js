document.getElementById("loader").style.display="block";
var Id = window.location.href.split("=")[2];

function paymentStatus() {
    return alert("Hi your booking is successfull !!");
}

document.getElementById("NameofCustomer").innerHTML =
  localStorage.getItem("customer Name");
document.getElementById("NumberOfAdults").innerHTML =
  localStorage.getItem("no of adults");
document.getElementById("Check_in_date").innerHTML =
  localStorage.getItem("check In date");
document.getElementById("Check_out_date").innerHTML =
  localStorage.getItem("to date");
document.getElementById("payment").innerHTML =
  localStorage.getItem("total amount");
document.getElementById("breakDown").innerHTML =
  "Rs.1000 x " + localStorage.getItem("no of adults") + "Adults";


(function apiCall(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);

    var paymentPage=`<div>
       <img id="hotel-payment-images" src="${response.photo.images.medium.url}" alt="${response.name}">
    </div>

    <div id="Hotel-Info">
            <h2>${response.name}</h2>
             ${response.address}
    </div>`;
    document.getElementById("hotel-payment").innerHTML = paymentPage;
    document.getElementById("loader").style.display="none";
  }
}

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=${Id}`);
xhr.setRequestHeader("X-RapidAPI-Key", "86a8adac7cmshbdc3f1ea8b8506bp19d5fajsn2316bc2b9626");
xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");

xhr.send();
})();