(function () {
  var pricePounds;
  var exchangeRate = 0.87;
  var priceEuros = 0;

  var convertForm = document.getElementById("myForm");
  var msg = document.getElementById("msg");

  convertForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.dir(ev);
    pricePounds = parseFloat(document.getElementById("pounds").value);

    if (isNaN(pricePounds)) {
      msg.style.display = "block";
      msg.innerHTML = "You must enter a number";
      msg.setAttribute("class", "error");
    } else {
      msg.removeAttribute("class");
      priceEuros = pricePounds * exchangeRate;
      console.info(priceEuros);
      priceEuros = priceEuros.toFixed(2);
      msg.innerHTML = `&euro; ${priceEuros}`;
    }
  });

  document.getElementById("pounds").addEventListener("focus", function(){
      this.value = ""
  })
})();
