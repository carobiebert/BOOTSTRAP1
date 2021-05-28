const course1 = {
    course_name:"PHP",
    course_image:"img/php.jpg",
    course_description:"PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.​",
    course_class: "col-12 col-md-8 col-lg-2 m-1 m-3-lg card p-2",
};

const course2 = {
    course_name:"JAVA",
    course_image:"img/cardjava.jpg",
    course_description:"La plataforma Java es el nombre de un entorno o plataforma de computación originaria de Sun Microsystems, capaz de ejecutar aplicaciones desarrolladas usando el lenguaje de programación Java u otros lenguajes que compilen a bytecode y un conjunto de herramientas de desarrollo.",
    course_class: "col-12 col-md-8 colg-lg-4 m-1 m-3-lg card p-2",

};

const course3 = {
    course_name:"Python",
    course_image:"img/cardpython.jpg",
    course_description:"Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.​ Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional.",
    course_class: "col-12 col-md-8 col-lg-2 m-1 m-3-lg card p-2",
};

const course4 = {
    course_name:"QA Testing",
    course_image:"img/cardtesting.jpg",
    course_description:"QA Tester - Quality Assurance - es un asegurador de la calidad. Es un perfil profesional orientado principalmente a la medición de la calidad de los procesos utilizados para crear un producto de calidad. Entre sus funciones se encuentran el diseño y la ejecución integral de pruebas,   la medición sistemática, la comparación con estándares, el seguimiento de los procesos… todas ellas encaminadas a la prevención de errores durante el proceso de desarrollo del producto. Se diferencia del testing (también conocido como ‘Control de la calidad’), en que este último únicamente realiza las actividades orientadas a comprobar la calidad al final del proceso, al producto.",
    course_class: "col-12 col-md-8 colg-lg-4 m-1 m-3-lg card p-2",

};

const courses_list = [course1,course2,course3,course4];
var texto_html_courses = "";

for (course of courses_list){

    texto_html_courses = texto_html_courses + `
    <div class="${course.course_class}" style="max-width: 36rem; min-width: 18rem;" >
    <img src="${course.course_image}" class="card-img-top w-auto" alt="...">
    <div class="card-body">
    <h5 class="card-title">${course.course_name}</h5>
    <p class="card-text">${course.course_description}</p>
    </div>
    <a href="..." target="blank"></a><button type="button m-1 p-1 text-center mb-3" class="btn btn-danger ">INSCRIBITE</button>
 
    </div>
    `
}


document.getElementById("cardsection").innerHTML = texto_html_courses;

