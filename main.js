name_of_the_student_array = [];
function submit() {
    var name1 = document.getElementById("nombre_del-alumno1").value;
    var name2 = document.getElementById("nombre_del-alumno2").value;
    var name3 = document.getElementById("nombre_del-alumno3").value;
    var name4 = document.getElementById("nombre_del-alumno4").value;
    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("button_enviar").style.display = "none";}
     for(var j=1; j<=4; j++) {document.getElementById("lista no ordenada").innerHTML=
     name_of_the_student_array;
console.log(name_of_the_student_array);}}