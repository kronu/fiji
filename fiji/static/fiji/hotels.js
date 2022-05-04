document.addEventListener('DOMContentLoaded', function() {
    // Filter 
    var check = document.querySelectorAll(".check");
    check.forEach((element) => {
        element.addEventListener("click", () => {
            filterHotel(element);
        });
    });
});

// Global variables
var starRating = [];
var islandChoice = [];
var okFirst;
var okSecond;

function filterHotel(element) {
    var hotellist = document.querySelectorAll(".hotellisting");
    var count = hotellist.length;

    // If checkbox is checked
    if (element.checked) {
        // Push whatever id was selected
        if (element.id == "three" || element.id == "four" || element.id == "five") {
            starRating.push(element.id);
        }
        else if (element.id == "viti" || element.id == "vanua" || element.id == "taveuni" || element.id == "others") {
            islandChoice.push(element.id);
        };
    }
    // If checkbox is deselected
    else {
        // Remove id from array
        if (element.id == "three" || element.id == "four" || element.id == "five") {
            var indexSecond = starRating.indexOf(element.id)
            if (indexSecond > -1) {
                starRating.splice(indexSecond, 1);
            };
        }
        else if (element.id == "viti" || element.id == "vanua" || element.id == "taveuni" || element.id == "others") {
            var indexFirst = islandChoice.indexOf(element.id)
            if (indexFirst > -1) {
                islandChoice.splice(indexFirst, 1);
            };
        };
    };

    // If star rating, island of choice or both were selected
    if (starRating !== 'undefined' && starRating.length > 0 && islandChoice !== 'undefined' && islandChoice.length > 0) {

        // Select every hotel
        for (var i = 0; i < count; i++) {

            // Select star rating filter
            for (var j = 0; j < starRating.length; j++) {

                // Select island of choice filter
                for (var k = 0; k < islandChoice.length; k++) {

                    // Check if first condition is satisfied
                    if (hotellist[i].id.includes(islandChoice[k])) {
                        var okFirst = "ok";
                    };
                };

                // Check if second condition is satisfied
                if (hotellist[i].id.includes(starRating[j])) {
                    var okSecond = "ok";
                };
            };

            // If both condition are satisfied, display result
            if (okFirst === "ok" && okSecond === "ok") {
                hotellist[i].style.display = "";
            }
            else {
                hotellist[i].style.display = "none";
            };
            okFirst = undefined;
            okSecond = undefined;
        };
    }

    // If only star rating was selected
    else if (starRating !== 'undefined' && starRating.length > 0) {

        // Select every hotel
        for (var i = 0; i < count; i++) {

            // Select star rating filter
            for (var j = 0; j < starRating.length; j++) {

                // Check if selected conditions are satisfied
                if (hotellist[i].id.includes(starRating[j])) {
                    var okSecond = "ok";
                };
            };

            // If condition is satisfied, display results
            if (okSecond === "ok") {
                hotellist[i].style.display = "";
            }
            else {
                hotellist[i].style.display = "none";
            };
            okSecond = undefined;
        };
    }

    // If only island of choice is selected
    else if (islandChoice !== 'undefined' && islandChoice.length > 0) {

        // Select every hotel
        for (var i = 0; i < count; i++) {

            // Select island of choice filter
            for (var k = 0; k < islandChoice.length; k++) {

                // Check if selected conditions are satisfied
                if (hotellist[i].id.includes(islandChoice[k])) {
                    var okFirst = "ok";
                };
            };

            // If condition is satisfied, display results
            if (okFirst === "ok") {
                hotellist[i].style.display = "";
            }
            else {
                hotellist[i].style.display = "none";
            };
            okFirst = undefined;
        };
    }

    // If every checkbox is not selected
    else if (starRating.length === 0 && islandChoice.length === 0) {
        
        // Display every hotel
        for (var i = 0; i < count; i++) {
            hotellist[i].style.display = "";
        }
    }
};
