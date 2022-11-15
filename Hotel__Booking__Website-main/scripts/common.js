var isLogin = false;
function containerHeader(){
document.getElementById("header").innerHTML=`<nav id="nav-bar"> 
<div id="marginspace1">
   <!-- logo  -->
   <a href="index.html"><img src="assests/images/logo.png" id="logo-image" alt="logo" height="200px" width="150px"></a>
   <!-- logo  -->
</div>
   <!-- login  -->
   <div id="marginspace">
     ${isLogin ? '<button class="btn btn-light" id="btnLogout" onclick="handleLogOut()">Logout</button>':
     '<button class="btn btn-light" data-toggle="modal" data-target="#loginModel">Login</button>'
     }
    <!-- login  -->
</div>
</nav>`;
}
containerHeader();

 function containerFooter() {
  document.getElementById("footer").innerHTML= `<div id="contact">   <!--  contact div -->
 <button id="contact-us-btn" class="btn btn-info" data-toggle="modal" data-target="#contactModal">Contact Us</button>
</div>   <!--  contact div -->

<div id="copy-right">  <!--  copy rights div -->
 &copy; 2022 ROOM SEARCH PVT. LTD.
</div>  <!--  copy right div -->

<div id="social-media">   <!--  social Media div -->
 <a href="https://www.facebook.com" target="_blank"><img id="social-media-images" src="assests/images/facebook.png" height="20px" width="22px"></a>
 <a href="https://www.instagram.com" target="_blank"><img id="social-media-images" src="assests/images/instagram.png" height="20px" width="22px"></a>
 <a href="https://www.twitter.com" target="_blank"><img id="social-media-images" src="assests/images/twitter.png" height="20px" width="22px"></a>
</div>`;
 }
 containerFooter();


function containerLogin(){
  document.getElementById("loginModel").innerHTML= ` <div class="modal-dialog">
   <div class="modal-content" id="loginModel">
      <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
       <button type="button" class="close" data-dismiss="modal">x</button>
     </div>
     <div class="modal-body" id="login-body">
       <div>
       <label for="user_name">Username:</label>
       <input id="user_name" type="text" name="userName" placeholder="Enter username" required>
     </div>
     <div>
       <label for="user_password">Password:</label>
       <input id="user_password" type="password" name="userPassword" placeholder="Password" required>
     </div>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-primary m-auto" data-dismiss="modal" onclick="handleLogin()">Login</button>
     </div>
   </div>
 </div>`
}
 containerLogin();
  
 function contactUsModal(){
  document.getElementById("contactModal").innerHTML=`<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Get in Touch</h5>
        <button type="button" class="close" data-dismiss="modal">x</button>
      </div>
      <div class="modal-body">
        <div>
          Thank you for reaching out!!!
          <br>
          Please enter your email and we will get back to you
        </div>
        <br>
        <div>
            Email: <input type="email" placeholder="Enter your email id" required>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>`
 } 
contactUsModal();


 function handleLogin(){
  var userName = document.getElementById("user_name").value;
  var password = document.getElementById("user_password").value;
  if(userName==="admin" && password==="admin"){
    alert("Successfully Loggedin!");
    localStorage.setItem("userName",userName);
    localStorage.setItem("password",password);
    isLogin=true;
    containerHeader();
  }
  else{
      alert("Incorrect username or password");
  }
  document.getElementById("payNow-Button").disabled = false;
}

function handleLogOut(){
  localStorage.removeItem("userName");
  localStorage.removeItem("password");
  isLogin=false;
  containerHeader();
  document.getElementById("payNow-Button").disabled = true;
}




