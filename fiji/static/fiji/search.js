document.addEventListener('DOMContentLoaded', function() {
    // Search
    var search = document.getElementById("search");
    var possibleAnswers = ["Home Page", "Index", "Flights", "Hotels", "Accomodations", "Things to do", "Activities", "Festivals", "Events", "Cuisine", 
    "Food", "Help", "Guide", "Coconut Beach Resort (Hotel)", "Aroha Taveuni (Hotel)", "Oarsmans Bay Lodge Fiji (Hotel)", "Gecko Lodge Fiji (Hotel)", 
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
    "Sigatoka (City)", "New Year's Eve (Event)", "Holi Festival (Event)", "Easter (Event)", "Bula Festival (Event)", 
    "Friendly North Festival (Event)", "Hibiscus Carnival (Event)", "Costitution Day (Event)", "Fiji Day (Event)", 
    "Mawlid / Prophet's Birthday (Event)", "Diwali (Event)", "BlueSky Fiji Music Festival (Event)", "Christmas (Event)", "Kokoda (Food)", 
    "Lovo (Food)", "Topoi (Food)", "Rourou (Food)", "Palusami (Food)", "Cassava Cake (Food)", "Fijian Chicken Curry (Food)", "Roti (Food)", 
    "Suruwa (Food)", "Fijian Chop Suey (Food)"];
    autocompleteSearch(search, possibleAnswers);

    // Submit button
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        goToSearch(search.value);
    });
});

function autocompleteSearch(search, possibleAnswers) {
    var currentFocus;
    // Check for any input
    search.addEventListener("input", function() {
        // Get letter, close previous lists
        var letter = this.value;
        closeAllLists();
        // If no letter in searchbar, stop function
        if (!letter) {return false};
        currentFocus = -1;
        // Create div that will contain results
        var a = document.createElement("div");
        a.setAttribute("id", this.id + "autosearch-list");
        a.setAttribute("class", "autosearch-items");
        this.parentNode.appendChild(a);
        // Get every result
        for (var i = 0; i < possibleAnswers.length; i++) {
            // Check if letter is their first letter too
            if (possibleAnswers[i].substr(0, letter.length).toUpperCase() === letter.toUpperCase()) {
                // Create item that will display result
                var b = document.createElement("div");
                b.innerHTML = "<strong>" + possibleAnswers[i].substr(0, letter.length) + "</strong>";
                b.innerHTML += possibleAnswers[i].substr(letter.length);
                b.innerHTML += "<input type='hidden' value='" + possibleAnswers[i] + "'>";
                // If item is clicked, use their value in searchbar and close list
                b.addEventListener("click", function(e) {
                    search.value = this.getElementsByTagName("input")[0].value;
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
    search.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autosearch-list");
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
        x[currentFocus].classList.add("autosearch-active");
    };
    
    // Removes "active" class to item
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autosearch-active");
        }
    };
    
    // Closes all item lists
    function closeAllLists(element) {
        var x = document.getElementsByClassName("autosearch-items");
        for (var i = 0; i < x.length; i++) {
            if (element != x[i] && element != search) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    };

    // If user clicks away, close list
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    })
};

function goToSearch(input) {
    // Send user to desired input
    if (input.includes("Home Page") || input.includes("Index")) {
        window.location.replace("/");
    }
    else if (input.includes("Flights")) {
        window.location.replace("/flights");
    }
    else if (input.includes("(Hotel)") || input.includes("Hotels") || input.includes("Accomodations")) {
        window.location.replace("/hotels");
    }
    else if (input.includes("(Diving)") || input.includes("(Surf)") || input.includes("(Hiking)") || input.includes("(Rafting)") || 
    input.includes("(Kayaking)") || input.includes("(Golf)") || input.includes("(Beach)") || input.includes("(Park)") || 
    input.includes("(Waterfall)") || input.includes("(Birdwatching)") || input.includes("(Village)") || input.includes("(Market)") || 
    input.includes("(Landmark)") || input.includes("(City)") || input.includes("Things to do") || input.includes("Activities")) {
        window.location.replace("/activities");
    }
    else if (input.includes("(Event)") || input.includes("Festivals") || input.includes("Events")) {
        window.location.replace("/events");
    }
    else if (input.includes("(Food)") || input.includes("Cuisine") || input.includes("Food")) {
        window.location.replace("/food");
    }
    else if (input.includes("Help") || input.includes("Guide")) {
        window.location.replace("/help");
    }
    else if (input.length === 0) {
        alert("Must type something to search");
    }
    else {
        alert("Couldn't find any results");
    }
}