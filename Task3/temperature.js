function conversion(){
        
    let inputnumber = document.getElementById("tempReader1").value;
    let fahrenheit = (inputnumber * 9/5) + 32;
    let celsius = (inputnumber - 32) * 5/9;
      var f = document.getElementById("fahrenheit1")
      f.innerHTML = 'Fahrenheit: ' + fahrenheit;
      var c = document.getElementById("celsius1")
      c.innerHTML = 'Celsius: ' + celsius;
  }