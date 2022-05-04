document.addEventListener('DOMContentLoaded', function() {
    // Rotate arrow
    var btntoggle = document.querySelectorAll(".btntoggle");
    btntoggle.forEach((element) => {
        element.addEventListener("click", () => {
            rotateArrow(element);
        })
    });

    // Change image on option
    var selecting = document.querySelectorAll(".selecting");
    selecting.forEach((element) => {
        element.addEventListener("change", () => {
            setImage(element);
        });
        setImage(element);
    });

    // Get option text inside input
    var hovering = document.querySelectorAll("#hovering");
    hovering.forEach((element) => {
        element.addEventListener("mouseover", () => {
            getOptionText(element);
        })
    })
});

function rotateArrow(element) {
    var info = element.getAttribute("info");
    var arrow = document.getElementById(`arrow-${info}`);
    arrow.classList.toggle("down");
};

function setImage(element) {
    var number = element.getAttribute("number");
    var select = document.getElementById(`select-${number}`);
    var image = document.getElementById(`image-${number}`);
    var option = select.value;
    image.src = option;
};

function getOptionText(element) {
    var des = element.getAttribute("des");
    var selecting = document.querySelectorAll(".selecting");
    selecting.forEach((e) => {
        if (e.getAttribute("number") === des) {
            var selectedText = e.options[e.selectedIndex].text;
            var myHiddenInput = document.getElementById(`actidestination-${des}`);
            myHiddenInput.value = selectedText;
        }
    })
}