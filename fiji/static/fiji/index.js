document.addEventListener('DOMContentLoaded', function() {

    // Slideshow 
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
    next.addEventListener("click", () => {
        plusSlides(1);
    });
    showSlides(slideIndex);

    // Confirm before leaving
    var confirmation = document.querySelectorAll("#goodbye");
    confirmation.forEach((element) => {
        element.addEventListener("click", () => {
            goodbye();
        })
    });

    // Change map image
    var categories = document.querySelectorAll("#changing");
    categories.forEach((category) => {
        category.addEventListener("click", () => {
            changeMap(category);
        })
    });

    // Autocomplete search bar
    var searchDestinations = document.getElementById("searchDestinations");
    var destinations = ["Coconut Beach Resort (Hotel)", "Aroha Taveuni (Hotel)", "Oarsmans Bay Lodge Fiji (Hotel)", "Gecko Lodge Fiji (Hotel)", 
    "The Palms Denarau Fiji (Hotel)", "Over The Horizon (Hotel)", "Beqa Lagoon Island Resort (Hotel)", "Bedarra Beach Inn (Hotel)", 
    "Vakanananu Retreat (Hotel)", "Oneta Resort (Hotel)", "The Remote Resort (Hotel)", "Private Holiday House (Hotel)",
    "Lomani Island Resort (Hotel)", "Navutu Stars Resort (Hotel)", "Bularangi Villa (Hotel)", "Castaway Island (Hotel)",
    "Taveuni Dive Resort (Hotel)", "Platinum Cawa Apartments (Hotel)", "Likuliku Lagoon Resort (Hotel)", "Tokoriki Island Resort (Hotel)", 
    "Sea Winds Villa (Hotel)", "Yasawa Island Resort & Spa (Hotel)", "Vomo Island Resort (Hotel)", "Radisson Blu Resort Fiji (Hotel)", 
    "Fiji Marriot Resort Momi Bay (Hotel)", "InterContinental Fiji Golf Resort & Spa (Hotel)", "Tadrai Island Resort (Hotel)", 
    "Sheraton Denarau Villas (Hotel)", "Grand Pacific Hotel (Hotel)", "Taveuni Palms Resort (Hotel)", "Vatu-i-ra Passage (Diving)", 
    "Nigali Passage (Diving)", "Bligh Water and Koro Sea (Diving)", "Beqa Lagoon (Diving)", "Cakaulevu Reef (Diving)", 
    "Great Astrolabe Reef - Diving", "Grand Central Station (Diving)", "Cloudbreak (Surf)", "Namotu Lefts (Surf)", "Natadola (Surf)",
    "Vunaniu Pass (Surf)", "King Kong Left & Right (Surf)", "Lavena Coastal Walk (Hiking)", "Tavoro Waterfalls (Hiking)", "Mount Tomanivi (Hiking)",
    "Mount Batilamu (Hiking)", "Matangi Island (Hiking)", "Qamea Island (Hiking)", "Upper Navua River (Rafting)", "Middle Navua River (Kayaking)",
    "Luva River (Kayaking)", "Denarau Golf & Racket Club (Golf)", "The Pearl South Pacific Fiji Resort (Golf)", "Natadola Bay Club (Golf)",
    "The Fiji Golf Club (Golf)", "Nadi Airport Golf Club (Golf)", "Laucala Island (Golf)", "Yasawa Island (Beach)", "Vomo Island (Beach)", 
    "Malolo Island (Beach)", "Tokoriki Island (Beach)", "Monuriki Island (Beach)", "Castaway Island (Beach)", "Natadola Bay (Beach)",
    "Koroyanitu National Park (Parks)", "Sigatoka Sand Dunes National Park (Park)", "Colo-i-Suva Forest Reserve (Park)", "Nausori Highlands (Park)",
    "Bouma National Park (Park)", "Lovoni Trail (Park)", "Savulelele Waterfalls (Waterfall)", "Biausevu Waterfall (Waterfall)", 
    "Nakagawa Waterfalls (Waterfall)", "Tavoro Waterfalls (Waterfall)", "Wainibau Falls (Waterfall)", "Waisali Rainforest Reserve (Birdwatching)",
    "Sovi Basin Protected Area (Birdwatching)", "Kadavu Rainforest (Birdwatching)", "Bouma National Heritage Park (Birdwatching)", 
    "Navala (Village)", "Savusavu / Vuadomo (Village)", "Levuka (Village)", "Yasawa Villages (Village)", "Nadi Produce Markets (Market)", 
    "ROC Market (Market)", "Handicraft Market (Market)", "Curio & Handicraft Market (Market)", "Lawai Pottery Village (Market)", 
    "Sacred Heart Cathedral (Landmark)", "Sri Siva Subramaniya Temple (Landmark)", "Suva Fiji Temple (Landmark)", "Naag Mandir Temple (Landmark)",
    "Udre Udre's Grave (Landmark)", "Naihehe Caves (Landmark)", "Savusavu Hot Springs (Landmark)", "Tavuni Hill Fort (Landmark)", 
    "Momi Bay Gun Site (Landmark)", "B26 Bomber Wreck (Landmark)", "Suva (City)", "Nadi (City)", "Denarau (City)", "Lautoka (City)", 
    "Sigatoka (City)"];
    autocomplete(searchDestinations, destinations);

    // Submit button to go to destination
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", () => {
        goToDestination(searchDestinations.value);
    });
});

var slideIndex = 1;

function showSlides(n) {
    // If click on arrow, show new image
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slides[slideIndex - 1].style.display = "block";
};

function plusSlides(n) {
    // Updating slide-index
    showSlides(slideIndex += n);
};

function goodbye() {
    // Message before leaving website
    window.onbeforeunload = function() {
        return "Are you sure you want to leave?";
    };
};

function sleep(ms) {
    // Sleeping function
    return new Promise(resolve => setTimeout(resolve, ms));
};

function changeMap(category) {
    // If click on category, change image
    var currentActive = document.getElementsByClassName("fade mapimg active")[0];
    if (category.textContent.includes("Sport")) {
        var myClick = document.getElementById("sport2");   
    }
    else if (category.textContent.includes("Nature")) {
        var myClick = document.getElementById("nature2");
    }
    else if (category.textContent.includes("Culture")) {
        var myClick = document.getElementById("culture2");
    }
    else if (category.textContent.includes("Cities")) {
        var myClick = document.getElementById("cities2");
    };
    if (currentActive === myClick) {
        return;
    };
    async function changing(currentActive, myClick) {
        await sleep(160);
        currentActive.classList.remove("active");
        currentActive.classList.add("hidden");
        myClick.classList.remove("hidden");
        myClick.classList.add("active");
    };
    changing(currentActive, myClick);
};

function autocomplete(searchDestinations, destinations) {
    var currentFocus;
    // Check for any input
    searchDestinations.addEventListener("input", function() {
        // Get letter, close previous lists
        var letter = this.value;
        closeAllLists();
        // If no letter in searchbar, stop function
        if (!letter) {return false};
        currentFocus = -1;
        // Create div that will contain destinations
        var a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        // Get every destination
        for (var i = 0; i < destinations.length; i++) {
            // Check if letter is their first letter too
            if (destinations[i].substr(0, letter.length).toUpperCase() === letter.toUpperCase()) {
                // Create item that will display destination
                var b = document.createElement("div");
                b.innerHTML = "<strong>" + destinations[i].substr(0, letter.length) + "</strong>";
                b.innerHTML += destinations[i].substr(letter.length);
                b.innerHTML += "<input type='hidden' value='" + destinations[i] + "'>";
                // If item is clicked, use their value in searchbar and close list
                b.addEventListener("click", function(e) {
                    searchDestinations.value = this.getElementsByTagName("input")[0].value;
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
    searchDestinations.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
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
        x[currentFocus].classList.add("autocomplete-active");
    };
    
    // Removes "active" class to item
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    };
    
    // Closes all item lists
    function closeAllLists(element) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (element != x[i] && element != searchDestinations) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    };

    // If user clicks away, close list
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    })
};

function goToDestination(destination) {
    // Send user to desired page
    if (destination.includes("(Hotel)")) {
        window.location.replace("/hotels");
    }
    else if (destination.includes("(Diving)") || destination.includes("(Surf)") || destination.includes("(Hiking)") || 
    destination.includes("(Rafting)") || destination.includes("(Kayaking)") || destination.includes("(Golf)") || 
    destination.includes("(Beach)") || destination.includes("(Park)") || destination.includes("(Waterfall)") || 
    destination.includes("(Birdwatching)") || destination.includes("(Village)") || destination.includes("(Market)") || 
    destination.includes("(Landmark)") || destination.includes("(City)")) {
        window.location.replace("/activities");
    }
    else if (destination.length === 0) {
        alert("Type a destination")
    }
    else {
        alert("Couldn't find any results")
    }
}