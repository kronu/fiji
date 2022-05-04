document.addEventListener('DOMContentLoaded', function() {
    // FLIGHTS
    var deleteflight = document.querySelectorAll("#deleteflight");
    deleteflight.forEach((element) => {
        var num = element.getAttribute("num");
        element.addEventListener("click", () => {
            deleteFlightItem(num);
        })
    });

    // HOTELS
    var deletehotel = document.querySelectorAll("#deletehotel");
    deletehotel.forEach((element) => {
        var num2 = element.getAttribute("num");
        element.addEventListener("click", () => {
            deleteHotelItem(num2);
        })
    });

    // ACTIVITIES
    var deleteacti = document.querySelectorAll("#deleteacti");
    deleteacti.forEach((element) => {
        var num3 = element.getAttribute("num");
        element.addEventListener("click", () => {
            deleteActiItem(num3);
        })
    });

    // EVENTS
    var deleteevent = document.querySelectorAll("#deleteevent");
    deleteevent.forEach((element) => {
        var num4 = element.getAttribute("num");
        element.addEventListener("click", () => {
            deleteEventItem(num4);
        })
    });

    // FOOD
    var deletefood = document.querySelectorAll("#deletefood");
    deletefood.forEach((element) => {
        var num5 = element.getAttribute("num");
        element.addEventListener("click", () => {
            deleteFoodItem(num5);
        })
    });
});

var myname = document.getElementById("myname").textContent;

function deleteFlightItem(num) {
    // Get elements to delete
    var flightorigin = document.getElementById(`flightorigin-${num}`).textContent;
    var myarrival = document.getElementById(`flightarrival-${num}`).textContent;
    var flightarrival = formatDate(myarrival);
    if (document.getElementById(`flightreturn-${num}`)) {
        var myreturn = document.getElementById(`flightreturn-${num}`).textContent;
        var flightreturn = formatDate(myreturn);
    }
    else {
        var flightreturn = null;
    };
    var flightclass = document.getElementById(`flightclass-${num}`).textContent;
    var flightadults = document.getElementById(`flightadults-${num}`).textContent;
    var flightchildren = document.getElementById(`flightchildren-${num}`).textContent;

    // Get csrf_token
    const csrftoken = getCookie('csrftoken');
    fetch(`/${myname}/wishlist`, {method: 'POST', headers: {'X-CSRFToken': csrftoken}, body: JSON.stringify({
        'flightorigin': flightorigin, 'flightarrival': flightarrival, 'flightreturn': flightreturn, 'flightclass': flightclass,
        'flightadults': flightadults, 'flightchildren': flightchildren, 'csrfmiddlewaretoken': csrftoken,
    }) })
    .then(() => {
        // If there are still other flight tickets, leave them on
        document.querySelector(`#flightticket-${num}`).style.display = "none";
        var checkFlights = document.querySelectorAll('[id^="flightticket-"');
        for (var i = 0; i < checkFlights.length; i++) {
            if (checkFlights[i].style.display !== "none") {
                var ok = "ok";
            }
        };
        // If there aren't, hide flight view
        if (ok !== "ok") {
            document.querySelector("#flighttotal").style.display = "none";
            checkAll();
        };
    })
};

function deleteHotelItem(num) {
    var hotelname = document.getElementById(`hotelname-${num}`).textContent;
    const csrftoken = getCookie('csrftoken');
    fetch(`/${myname}/wishlist`, {method: 'POST', headers: {'X-CSRFToken': csrftoken}, body: JSON.stringify({
        'hotelname': hotelname, 'csrfmiddlewaretoken': csrftoken}) })
    .then(() => {
        document.querySelector(`#hotelticket-${num}`).style.display = "none";
        var checkHotels = document.querySelectorAll('[id^="hotelticket-"').length;
        for (var i = 0; i < checkHotels.length; i++) {
            if (checkHotels[i].style.display !== "none") {
                var ok = "ok";
            }
        };
        if (ok !== "ok") {
            document.querySelector("#hoteltotal").style.display = "none";
            checkAll();
        };
    })
};

function deleteActiItem(num) {
    var actiname = document.getElementById(`actiname-${num}`).textContent;
    const csrftoken = getCookie('csrftoken');
    fetch(`/${myname}/wishlist`, {method: 'POST', headers: {'X-CSRFToken': csrftoken}, body: JSON.stringify({
        'activity': actiname, 'csrfmiddlewaretoken': csrftoken}) })
    .then(() => {
        document.querySelector(`#actiticket-${num}`).style.display = "none";
        var checkActi = document.querySelectorAll('[id^="actiticket-"');
        for (var i = 0; i < checkActi.length; i++) {
            if (checkActi[i].style.display !== "none") {
                var ok = "ok";
            }
        };
        if (ok !== "ok") {
            document.querySelector("#actitotal").style.display = "none";
            checkAll();
        };
    })
};

function deleteEventItem(num) {
    var eventtitle = document.getElementById(`eventtitle-${num}`).textContent;
    const csrftoken = getCookie('csrftoken');
    fetch(`/${myname}/wishlist`, {method: 'POST', headers: {'X-CSRFToken': csrftoken}, body: JSON.stringify({
        'eventtitle': eventtitle, 'csrfmiddlewaretoken': csrftoken}) })
    .then(() => {
        document.querySelector(`#eventticket-${num}`).style.display = "none";
        var checkEvent = document.querySelectorAll('[id^="eventticket-"');
        for (var i = 0; i < checkEvent.length; i++) {
            if (checkEvent[i].style.display !== "none") {
                var ok = "ok";
            }
        };
        if (ok !== "ok") {
            document.querySelector("#eventtotal").style.display = "none";
            checkAll();
        };
    })
};

function deleteFoodItem(num) {
    var foodtitle = document.getElementById(`foodtitle-${num}`).textContent;
    const csrftoken = getCookie('csrftoken');
    fetch(`/${myname}/wishlist`, {method: 'POST', headers: {'X-CSRFToken': csrftoken}, body: JSON.stringify({
        'foodtitle': foodtitle, 'csrfmiddlewaretoken': csrftoken}) })
    .then(() => {
        document.querySelector(`#foodticket-${num}`).style.display = "none";
        var checkFood = document.querySelectorAll('[id^="foodticket-"');
        for (var i = 0; i < checkFood.length; i++) {
            if (checkFood[i].style.display !== "none") {
                var ok = "ok";
            }
        };
        if (ok !== "ok") {
            document.querySelector("#foodtotal").style.display = "none";
            checkAll();
        };
    })
};

function checkAll() {
    // Check if there are still elements inside wishlist
    var checkFlights = document.querySelectorAll('[id^="flightticket-"');
    for (var i = 0; i < checkFlights.length; i++) {
        if (checkFlights[i].style.display !== "none") {var ok1 = "ok";}
    };
    var checkHotels = document.querySelectorAll('[id^="hotelticket-"').length;
    for (var i = 0; i < checkHotels.length; i++) {
        if (checkHotels[i].style.display !== "none") {var ok2 = "ok";}
    };
    var checkActi = document.querySelectorAll('[id^="actiticket-"');
    for (var i = 0; i < checkActi.length; i++) {
        if (checkActi[i].style.display !== "none") {var ok3 = "ok";}
    };
    var checkEvent = document.querySelectorAll('[id^="eventticket-"');
    for (var i = 0; i < checkEvent.length; i++) {
        if (checkEvent[i].style.display !== "none") {var ok4 = "ok";}
    };
    var checkFood = document.querySelectorAll('[id^="foodticket-"');
    for (var i = 0; i < checkFood.length; i++) {
        if (checkFood[i].style.display !== "none") {var ok5 = "ok";}
    };
    // If there aren't, show "your wishlist is empty"
    if (ok1 !== "ok" && ok2 !== "ok" && ok3 !== "ok" && ok4 !== "ok" && ok5 !== "ok") {
        document.querySelector("#appear").style.display = "block";
    }
}


function getCookie(name) {
    // Function to get csrf_token
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

function formatDate(date) {
    // Format date to be recognizable by database
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
};