// Declaring variable "header" to target header in all HTMLs
var header = document.querySelector("#header");

// Adding HTML content in variable so that it will be injected in all pages
header.innerHTML = ` <!-- First part of nav bar -->

<nav
class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
data-bs-theme="dark"
>

<div class="container-fluid" id="div1">
<a href="/index.html" class="navbar-brand">
<img
src="/Images/attachment_103854253.png"
alt="Logo"
id="logo"
width="70"
height="60"
/>
</a>

<h4>HANAK</h4>
<button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarTogglerDemo02"
aria-controls="navbarTogglerDemo02"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
<div class="container-fluid" id="div2">
<form class="d-flex" role="search" id="form">
<input
class="form-control me-2"
type="search"
placeholder="Product Name, Category Name,etc."
aria-label="Search"
id="input"
/>
<button class="btn btn-secondary" type="submit">Search</button>
</form>
</div>

<div class="container-fluid" id="div3">
<button
type="submit"
class="btn btn-success"
onclick="location.href='/Other Pages/login.html'"
>
Login
</button>
<a href="/Other Pages/cart.html">
<i class="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>
</a>
</div>
</div>
</div> 
</nav>
        
        
        <!-- Second part of nav bar -->
        
<div id="navigation">

<ul class="nav">
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/index.html">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/ALL PRODUCTS/all-products.html">All Products</a>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
>Women</a>

<ul class="dropdown-menu">
<li><a href="/WOMEN'S/women-all.html" class="dropdown-item">All</a></li>
<li><a href="/WOMEN'S/women-dresses.html" class="dropdown-item">Dresses</a></li>
<li><a href="/WOMEN'S/women-pants.html" class="dropdown-item">Pants</a></li>
<li><a href="/WOMEN'S/women-skirts.html" class="dropdown-item">Skirts</a></li>
</ul>
      
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Men</a>
<ul class="dropdown-menu">
<li><a href="/MEN'S/men-all.html" class="dropdown-item">All</a></li>
<li><a href="/MEN'S/men-shirts.html" class="dropdown-item">Shirts</a></li>
<li><a href="/MEN'S/men-pants.html" class="dropdown-item">Pants</a></li>
<li><a href="/MEN'S/men-hoodies.html" class="dropdown-item">Hoodies</a></li>
</ul>
</li>

<li class="nav-item">
<a class="nav-link" href="/KID's/kids.html">Kids</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/Other Pages/contact.html">Contact</a>
</li>
</ul>
</div> `;
