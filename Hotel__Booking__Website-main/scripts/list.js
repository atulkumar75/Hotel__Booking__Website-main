var cityName = window.location.href.split("=")[1];

(function apiCall(){
  document.getElementById("loader").style.display="block";

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange= ()=>{
      if(xhr.readyState==4 && xhr.status==200){
        var response = xhr.responseText;
        let parseResponse= JSON.parse(response);

        var cards = "";
        for(var i=2;i<parseResponse.data.length;i++){
            cards=cards+`<a style="text-decoration: none; color: black;" href="detail.html?city=${cityName}&id=${parseResponse.data[i].result_object.location_id}">
             <div id="hotel-list-cards">
            <img id="Hotel-images" src= ${parseResponse.data[i].result_object.photo.images.medium.url} alt="Radisson Blu Hotel">
         <figcaption>
                <h3>${parseResponse.data[i].result_object.name}</h3>
                <div>
                 ${parseResponse.data[i].result_object.rating}
                 <span class="fa fa-star checked"> </span>
                </div>
                <div>${parseResponse.data[i].result_object.address}</div>
         </figcaption>
     </div></a> `
        }
        document.getElementById("hotel-list").innerHTML=cards;
        document.getElementById("loader").style.display="none";
      }
    }

    xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`);
    xhr.setRequestHeader("X-RapidAPI-Key", "86a8adac7cmshbdc3f1ea8b8506bp19d5fajsn2316bc2b9626");
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");

    xhr.send();
    })();

