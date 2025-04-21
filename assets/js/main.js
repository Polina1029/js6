function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function my() {
    document.getElementById("my").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var opneDropdown = dropdowns[i];
            if (opneDropdown.classList.contains('show')) {
                opneDropdown.classList.remove('show')
            }
        }
    }
}


function myFunction3() {
    document.getElementById("myDropdown_3").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn_3')) {
        var dropdowns = document.getElementsClassName(".dropdown_content_3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-two");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var opneDropdown = dropdowns[i];
            if (opneDropdown.classList.contains('show')) {
                opneDropdown.classList.remove('show')
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const accardions = document.querySelectorAll(".accardion");

    accardions.forEach(accardion => {
        const button = accardion.querySelector(".accardion_txt");
        const content = accardion.querySelector(".cc");

        button.addEventListener("click", () => {
         
            accardions.forEach(otherAccardion => {
                if (otherAccardion !== accardion) {
                    otherAccardion.querySelector(".cc").style.display = "none";
                }
            });

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});