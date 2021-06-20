confirm(`JAVASCRIPT i boshladik ortga yo'l yo'q faqat oldinga, faqat olg'a !!!`);

var form = document.querySelector(".js-form");
var input = document.querySelector(".js-input");

var textCard1 = document.querySelector(".js-card1");
var textCard2 = document.querySelector(".js-card2");
var textCard3 = document.querySelector(".js-card3");
var textCard4 = document.querySelector(".js-card4");

// form.addEventListener('submit',function (event) {
//   event.preventDefault();
//   textCard1.textContent = `${Math.round((Number(input.value) / 3.6))} soat`
//   textCard2.textContent = `${Math.round((Number(input.value) / 20.1))} soat`;
//   textCard3.textContent = `${Math.round((Number(input.value) / 70))} soat`;
//   textCard4.textContent = `${Math.round((Number(input.value) / 800))} soat`;
// })

form.addEventListener("submit", function (params) {
  params.preventDefault();

  var a = input.value;
  var b = Math.floor(Number(a) / 800);
  var s = (Number(a) / 800).toFixed(2);

  var b1 = Math.floor(Number(a) / 70);
  var s1 = (Number(a) / 70).toFixed(2);

  var b2 = Math.floor(Number(a) / 20.1);
  var s2 = (Number(a) / 20.1).toFixed(2);

  var b3 = Math.floor(Number(a) / 3.6);
  var s3 = (Number(a) / 3.6).toFixed(2);

  if (s >= b + 0.6) {
    textCard4.textContent = Math.ceil(s)+" "+"soat";
  } else {
    textCard4.textContent = s+" "+"soat";
  }

  if (s1 >= b1 + 0.6) {
    textCard3.textContent = Math.ceil(s1)+" "+"soat";
  } else {
    textCard3.textContent = s1+" "+"soat";
  }

  if (s2 >= b2 + 0.6) {
    textCard2.textContent = Math.ceil(s2)+" "+"soat";
  } else {
    textCard2.textContent = s2+" "+"soat";
  }

  if (s3 >= b3 + 0.6) {
    textCard1.textContent = Math.ceil(s3)+" "+"soat";
  } else {
    textCard1.textContent = s3+" "+"soat";
  }
});
