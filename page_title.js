window.onload = function getName() {
    var x = document.title;
    name = document.getElementById("name");
    if (x === 'Lukas Rimkus | UX/UI Designer & Full Stack Engineer') {
        document.getElementById("name").innerHTML = 'UX/UI Designer & Full Stack Engineer';
    }
    else {
        document.getElementById("name").innerHTML = document.title;}
}
