 <!DOCTYPE html>

<html>
<body>

<head>
    <style>
        .font12 {
            font-size: 12px;
        }
        .font24 {
            font-size: 24px;
        }
    </style>
</head>
<body>
    <span class="font12">12px size font</span><br />
    <span class="font24">24px size font</span>


<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click this for date and time.</button>

<p id="demo"></p>


<button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'">Turn off the light</button>



<p>Click the "Try it" button to hide/reveal the message:</p>

<button onclick="myFunction()">Try it</button>

<div id="myDIV">
This is my hidden message.
</div>


<script>
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



</script>

</body>
</html>

