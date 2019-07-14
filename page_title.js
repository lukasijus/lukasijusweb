window.onload = function getName() {
    name = document.getElementById("name");
    if (name = 'Lukas Rimkus Web Dev | Computer Vision') {
        document.getElementById("name").innerHTML = 'Web Development & Computer Vision';
    }
    else {
        document.getElementById("name").innerHTML = document.title;}
}
