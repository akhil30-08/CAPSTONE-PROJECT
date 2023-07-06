// Declaring variable "footer" to target footer content in all HTMLs
var footer = document.querySelector("#footer");

// Adding HTML content in variable so that it will be injected in all pages
footer.innerHTML = `<!-- footer content -->
<div class="row">
    <div class="col-12 col-sm-12 col-md-3 col-lg-3" id="col4">
        <ul>
        <h3><a href="/WOMEN'S/women-all.html">Women</a></h3>
            <li><a href="/WOMEN'S/women-dresses.html">Dresses</a></li>
            <li><a href="/WOMEN'S/women-pants.html">Pants</a></li>
            <li><a href="/WOMEN'S/women-skirts.html">Skirts</a></li>
        </ul>
    </div>
    <div class="col-12 col-sm-12 col-md-3 col-lg-3 " id="col5">
        <ul>
        <h3><a href="/MEN'S/men-all.html">Men</a></h3>
            <li><a href="/MEN'S/men-shirts.html">Shirts</a></li>
            <li><a href="/MEN'S/men-pants.html">Pants</a></li>
            <li><a href="/MEN'S/men-hoodies.html">Hoodies</a></li>
        </ul>
    </div>

    <div class="col-12 col-sm-12 col-md-3 col-lg-3" id="col6">
        <ul>
            <h4><a href="/KID's/kids.html">Kids</a></h4>
        </ul>
    </div>

    <div class="col-12 col-sm-12 col-md-3 col-lg-3" id="col7">
        <ul>
        <h3>Links</h3>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/Other Pages/login.html">Login</a></li>
            <li><a href="/Other Pages/contact.html">Contact</a></li>
        </ul>
    </div>
</div>
<hr>
<div class="container-fluid d-flex justify-content-center">
    <h6>Copyright <i class="fa-regular fa-copyright"></i>HANAK 2022-23</h6>
</div>`