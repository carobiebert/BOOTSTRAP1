var texto_navbar_html = `<div class="navbar navbar-expand-lg navbar-light justify-content-between bg-warning w-100">
<a class="navbar-brand" href="INDEX.html">
<img src="img/logoba.png" class="rounded BAlogo">
</a>

<div class="align-self-center">

<!-- SOCIAL MEDIA LINKS LIST-->

<ul class="list-unstyled list-inline bg-warning text-center text-lg-end m-3" id="medialinks">

    <li class="list-inline-item ">
        <a href="https://www.facebook.com/codoacodooficial/" title="FACEBOOK" target="blank" class="link-dark"><i class="fab fa-facebook"></i></a>
    </li>

    <li class="list-inline-item ">
        <a href="https://www.instagram.com/programacodoacodo/" title="INSTAGRAM" target="blank" class="link-dark"><i class="fab fa-instagram"></i></a>
    </li>

    <li class="list-inline-item ">
        <a href="mailto.io.codoacodo@bue.edu.ar" title="CORREO ELECTRONICO" class="link-dark"><i class="fas fa-envelope"></i></a>
    </li>


</ul>


</div>


<button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
<span class="navbar-toggler-icon">
</span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <a href="INDEX.html" class="link-dark text-decoration-none m-2"> <b> HOME</b> </a>
    </li>

     <li class="list-inline-item">
        <a href="acercade.html" class="link-dark text-decoration-none m-2"> <b>ACERCA DEL PROGRAMA</b> </a>
    </li>

    <li class="list-inline-item">
        <a href="https://aulasvirtuales.bue.edu.ar/" class="link-dark text-decoration-none m-2" target="blank"> <b>AULA VIRTUAL</b> </a>
    </li>
        
    <li class="list-inline-item">
        <a href="faqs.html" class="link-dark text-decoration-none m-2"> <b>PREGUNTAS FRECUENTES</b> </a>
    </li>

    <li class="list-inline-item">
        <a href="formulario.html" class="link-dark text-decoration-none m-2"> <b>CONTACTO</b> </a>
    </li>

</ul>
</div>
</div>`;

document.getElementById("navbar").innerHTML = texto_navbar_html;