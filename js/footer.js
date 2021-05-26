var texto_footer_html = `<div class="container-fluid vw-100 m-0 p-2 p-lg-2 justify-content-center align-items-center" >
                    
<div class="row justify-content-center align-items-center vw-100 m-0">
        <!--IFRAME SECTION-->


            <iframe class=" col-12 col-lg-6 p-2  embed-responsive-item" id="youtubeiframe" src="https://www.youtube.com/embed/79wd8_lZx3g" style=" margin: 4rem;width: 30rem; height: 20rem;">IFRAME A VIDEO DE YOUTUBE</iframe>
            

        <!--CONTACT SECTION-->
        
            <div class="col-12 col-lg-6 p-2 text-center">
                <h3 class="text-white">CONTACTANOS</h3>
                <br>
                <a href="formulario.html" target="_blank"><button type="button m-1 p-1 " class="btn btn-danger">FORMULARIO</button></a>
                <br>
                <br>
                <a href="mailto.io.codoacodo@bue.edu.ar" target="_blank"></a><button type="button m-1 p-1" class="btn btn-danger">EMAIL</button>
            </div>
</div>

</div>`;

document.getElementById("footer").innerHTML = texto_footer_html;