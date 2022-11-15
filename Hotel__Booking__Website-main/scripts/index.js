var moreCityOption = document.getElementById("city-cards2");
moreCityOption.style.display = "none";
var ViewLessButton = document.getElementById("viewLessButton");
var ViewMoreButton = document.getElementById("viewMoreButton");

function showMoreOption() {
  moreCityOption.style.display = "flex";
  ViewMoreButton.style.display = "none";
  ViewLessButton.style.display = "block";
}

function showLessOption() {
  moreCityOption.style.display = "none";
  ViewMoreButton.style.display = "block";
  ViewLessButton.style.display = "none";
}

function handleSearch(event){
  var searchCity=document.getElementById("searchCity").value;
  if(searchCity.length>=3){
        const xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange= ()=>{
          if(xhr.readyState==4 && xhr.status==200){
            var response = xhr.responseText;
            let parseResponse= JSON.parse(response);
            var suggestionCard ="";
            for(var i=0;i<parseResponse.data.length;i++){
              if(parseResponse.data[i].result_object.name!=undefined){
                suggestionCard=suggestionCard+`<p class="suggestion" onclick="getList(event)">${parseResponse.data[i].result_object.name}</p>`
              }
            }
            document.getElementById("searchItem").innerHTML=suggestionCard; 
          }
        }
        xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=${searchCity}`);
        xhr.setRequestHeader("X-RapidAPI-Key", "86a8adac7cmshbdc3f1ea8b8506bp19d5fajsn2316bc2b9626");
        xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
        xhr.send();    
  } 
  if(searchCity.length==0){
    document.getElementById("searchItem").innerHTML=""; 
  }
}

function getList(event){
  window.location.href=`list.html?city=${event.target.innerHTML}`;
}


