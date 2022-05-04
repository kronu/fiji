document.addEventListener('DOMContentLoaded', function() {
    // Select trip
    one.addEventListener("click", () => {
        selectTrip(one);
    });
    two.addEventListener("click", () => {
        selectTrip(two);
    });

    // Make realistic flight date
    depart.addEventListener("click", () => {
        todayDate(depart);
        startDate(depart);
    });
    flightReturn.addEventListener("click", () => {
        todayDate(flightReturn);
        finishDate(flightReturn);
    });

    // Origin search
    var airports = ["Apia (APW), Samoa", "Auckland (AKL), New Zealand", "Berlin (BER), Germany", "Brisbane (BNE), Australia", 
    "Christchurch (CHC), New Zealand", "Hong Kong (HKG), Hong Kong", "Honiara (HIR), Solomon Islands", "Honolulu (HNL), USA", 
    "Kiritimati (CXI), Kiribati", "London (LHR), United Kingdom", "Los Angeles (LAX), USA", "Melbourne (MEL), Australia", "New Delhi (DEL), India",
    "Noumea (NOU), New Caledonia, France", "Nukualofa (TBU), Tonga", "Port Moresby (POM), Papua New Guinea", "Port Vila (VLI), Vanuatu", 
    "San Francisco (SFO), USA", "Seoul (ICN), South Korea", "Shanghai (PVG), China", "Singapore (SIN), Singapore", "Sydney (SYD), Australia", 
    "Tarawa (TRW), Kiribati", "Tokyo (NRT), Japan", "Vavau (VAV), Tonga", "Wallis and Futuna Islands (WLS), Wallis and Futuna Islands, France",  
    "Wellington (WLG), New Zealand"];
    airportSearch(from, airports);

    // Origin must exist
    from.addEventListener("input", () => {
        disableButton(airports);
    });


});

// Global variables
var myForm = document.getElementById("myForm");
var one = document.getElementById("one");
var two = document.getElementById("two");
var from = document.getElementById("from");
var to = document.getElementById("to");
var depart = document.getElementById("depart");
var flightReturn = document.getElementById("return");
var flightClass = document.getElementById("class");
var adults = document.getElementById("adults");
var children = document.getElementById("children");
var wishButton = document.getElementById("wishButton");
var mySearch = document.getElementById("mySearch");

function selectTrip(element) {
    // Swap classes and enable/disable flight-return
    if (element.textContent.includes("One Way")) {
        if (one.classList.contains("nope")) {
            two.classList.remove("flightchoose");
            two.classList.add("nope");
            one.classList.remove("nope");
            one.classList.add("flightchoose");
            flightReturn.disabled = true;
        }
    }
    else if (element.textContent.includes("Round Trip")) {
        if (two.classList.contains("nope")) {
            one.classList.remove("flightchoose");
            one.classList.add("nope");
            two.classList.remove("nope");
            two.classList.add("flightchoose");
            flightReturn.disabled = false;
        }
    }
};

function todayDate(selected) {
    // Get today's date and set it as minimum flight-depart
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if(dd < 10) {
        dd = '0' + dd
    } 
    if(mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    selected.setAttribute("min", today);
};

function startDate(depart) {
    // If flight-return is selected first, flight-depart must be max the same day
    if (flightReturn.value.length !== 0) {
        depart.setAttribute("max", flightReturn.value)
    }
};

function finishDate(flightReturn) {
    // Flight-return must be after flight-depart
    if (depart.value.length !== 0) {
        flightReturn.setAttribute("min", depart.value)
    }
};

function airportSearch(from, airports) {
    var currentFocus;
    // Check for any input
    from.addEventListener("input", function() {
        // Get letter, close previous lists
        var letter = this.value;
        closeAllLists();
        // If no letter in searchbar, stop function
        if (!letter) {return false};
        currentFocus = -1;
        // Create div that will contain airports
        var a = document.createElement("div");
        a.setAttribute("id", this.id + "autoair-list");
        a.setAttribute("class", "autoair-items");
        this.parentNode.appendChild(a);
        // Get every destination
        for (var i = 0; i < airports.length; i++) {
            // Check if letter is their first letter too
            if (airports[i].substr(0, letter.length).toUpperCase() === letter.toUpperCase()) {
                // Create item that will display airport
                var b = document.createElement("div");
                // Create little flaggie
                var image = document.createElement("img");
                image.width = 25;
                image.height = 15;
                image.style = "margin: -3px 8px 0 0";
                if (airports[i].includes("Australia")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/280px-Flag_of_Australia.svg.png"}
                else if (airports[i].includes("New Zealand")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg"}
                else if (airports[i].includes("Hong Kong")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1200px-Flag_of_Hong_Kong.svg.png"}
                else if (airports[i].includes("USA")) {image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"}
                else if (airports[i].includes("New Caledonia")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/a/a4/New_caledonia_flag_large.png"}
                else if (airports[i].includes("Wallis")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Wallis_and_Futuna.svg/1200px-Flag_of_Wallis_and_Futuna.svg.png"}
                else if (airports[i].includes("Samoa")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg"}
                else if (airports[i].includes("Solomon Islands")) {image.src = "https://www.countryflags.com/wp-content/uploads/solomon-islands-flag-png-large.png"}
                else if (airports[i].includes("Kiribati")) {image.src = "https://www.countryflags.com/wp-content/uploads/kiribati-flag-png-large.png"}
                else if (airports[i].includes("Singapore")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Singapore_%28bordered%29.svg/1200px-Flag_of_Singapore_%28bordered%29.svg.png"}
                else if (airports[i].includes("Tonga")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg"}
                else if (airports[i].includes("Papua New Guinea")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1200px-Flag_of_Papua_New_Guinea.svg.png"}
                else if (airports[i].includes("Vanuatu")) {image.src = "https://www.countryflags.com/wp-content/uploads/vanuatu-flag-jpg-xl.jpg"}
                else if (airports[i].includes("Japan")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_Japan_%28with_border%29.png"}
                else if (airports[i].includes("South Korea")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_South_Korea_%28bordered%29.svg/1200px-Flag_of_South_Korea_%28bordered%29.svg.png"}
                else if (airports[i].includes("China")) {image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png"}
                else if (airports[i].includes("India")) {image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"}
                else if (airports[i].includes("Germany")) {image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"}
                else if (airports[i].includes("United Kingdom")) {image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"}
                b.appendChild(image);
                // Add text
                b.innerHTML += "<strong>" + airports[i].substr(0, letter.length) + "</strong>";
                b.innerHTML += airports[i].substr(letter.length);
                b.innerHTML += "<input type='hidden' value='" + airports[i] + "'>";
                // If item is clicked, use their value in searchbar and close list
                b.addEventListener("click", function(e) {
                    from.value = this.getElementsByTagName("input")[0].value;
                    wishButton.disabled = false;
                    closeAllLists();
                })
                a.appendChild(b);
                var ok = "ok";
            };
        }
        // If no items are compatible, display "no result"
        if (ok !== "ok") {
            var b = document.createElement("div");
            b.innerHTML = "<p style='cursor: auto; margin-bottom: 0'>No result found.</p>";
            a.appendChild(b);
        }
    });

    // If user uses "up" or "down" keys, move active item
    from.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autoair-list");
        if (x) { var x = x.getElementsByTagName("div") };
        if (e.keyCode == 40) { 
            currentFocus++;
            addActive(x);
        }
        else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        }
        // If "enter" key is pressed, simulate click
        else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) {x[currentFocus].click()};
            }
        }
    });

    // Adds "active" class to item
    function addActive(x) {
        if (!x) { return false };
        removeActive(x);
        if (currentFocus >= x.length) { currentFocus = 0 };
        if (currentFocus < 0) { currentFocus = (x.length - 1) };
        x[currentFocus].classList.add("autoair-active");
    };
    
    // Removes "active" class to item
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autoair-active");
        }
    };
    
    // Closes all item lists
    function closeAllLists(element) {
        var x = document.getElementsByClassName("autoair-items");
        for (var i = 0; i < x.length; i++) {
            if (element != x[i] && element != from) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    };

    // If user clicks away, close list
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    })
};

function disableButton(airports) {
    // If starting city isn't selected, disable "add to wishlist"
    if (airports.includes(from.value) === false) {
        wishButton.disabled = true;
    }
};