const course1 = {
    course_name:"PHP",
    course_image:"img/php.jpg",
    course_description:"Acá va la descripción",
    course_class: "col-12 col-md-8 col-lg-2 m-1 m-3-lg card p-2",
};

const course2 = {
    course_name:"JAVA",
    course_image:"img/cardjava.jpg",
    course_description:"Acá va la descripción",
    course_class: "col-12 col-md-8 colg-lg-4 m-1 m-3-lg card p-2",

};

const course3 = {
    course_name:"Python",
    course_image:"img/cardpython.jpg",
    course_description:"Acá va la descripción",
    course_class: "col-12 col-md-8 col-lg-2 m-1 m-3-lg card p-2",
};

const course4 = {
    course_name:"QA Testing",
    course_image:"img/cardtesting.jpg",
    course_description:"Acá va la descripción",
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
    <a href="..." target="blank"></a><button type="button m-1 p-1" class="btn btn-danger hooverb">INSCRIBITE</button>
    </div>
    </div>
    `
}


document.getElementById("cardsection").innerHTML = texto_html_courses;

