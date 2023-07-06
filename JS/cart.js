count = 1;
let x = document.getElementById("productquantity");
let y = document.getElementById("span");
let z = document.getElementById("result");

// Increment function to increase products quantities in cart.html
function increment() {
  count++;
  x.value = count;
  y.innerHTML = 15 * count;
  z.innerHTML = parseInt(y.innerHTML) + 5;
}

// Decrement function to decrease products quantities in cart.html
function decrement() {
  if (x.value > 1) {
    count--;
    x.value = count;
    y.innerHTML = y.innerHTML - 15;
    z.innerHTML = parseInt(y.innerHTML) + 5;
  }
}
