from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.db import IntegrityError
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
import json
from django.http import JsonResponse

from .models import User, Wishflights, Wishhotels, Wishactivities, Wishevents, Wishfood


def index(request):
    return render(request, "fiji/index.html")


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "fiji/register.html", {
                "message": "Password must match confirmation!"
            })
        if len(password) < 6:
            return render(request, "fiji/register.html", {
                "message": "Password must be at least 6 character longs!"
            })
        
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "fiji/register.html", {
                "message": "Username is already taken"
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    return render(request, "fiji/register.html")
        

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "fiji/login.html", {
                "message": "Invalid username and/or password"
            })
    return render(request, "fiji/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def search(request):
    return render(request, "fiji/search.html")


def flights(request):
    if request.method == "POST":
        # If flightreturn is present
        try:
            # Check if item is already in database
            if Wishflights.objects.filter(user = request.user, flightorigin = request.POST["flightorigin"], 
            flightdestination = request.POST["flightdestination"], flightarrival = request.POST["flightarrival"], 
            flightreturn = request.POST["flightreturn"], flightclass = request.POST["flightclass"], flightadults = request.POST["flightadults"],
            flightchildren = request.POST["flightchildren"]).exists():
                return render(request, "fiji/flights.html", {
                    "message": "Item is already in your wishlist"
                })
            # Add item if item isn't in database
            else:
                Wishflights(user = request.user, flightorigin = request.POST["flightorigin"], flightdestination = request.POST["flightdestination"],
                flightarrival = request.POST["flightarrival"], flightreturn = request.POST["flightreturn"], 
                flightclass = request.POST["flightclass"], flightadults = request.POST["flightadults"], 
                flightchildren = request.POST["flightchildren"]).save()
                return render(request, "fiji/flights.html", {
                    "message": "Item added to your wishlist"
                })
        # If flightreturn isn't present
        except:
            if Wishflights.objects.filter(user = request.user, flightorigin = request.POST["flightorigin"], 
            flightdestination = request.POST["flightdestination"], flightarrival = request.POST["flightarrival"],
            flightclass = request.POST["flightclass"], flightadults = request.POST["flightadults"], 
            flightchildren = request.POST["flightchildren"]).exists():
                return render(request, "fiji/flights.html", {
                    "message": "Item is already in your wishlist"
                })
            else:
                Wishflights(user = request.user, flightorigin = request.POST["flightorigin"], flightdestination = request.POST["flightdestination"],
                flightarrival = request.POST["flightarrival"], flightclass = request.POST["flightclass"], flightadults = request.POST["flightadults"], 
                flightchildren = request.POST["flightchildren"]).save()
                return render(request, "fiji/flights.html", {
                    "message": "Item added to your wishlist"
                })
    return render(request, "fiji/flights.html")


def hotels(request):
    if request.method == "POST":
        # Check if item already in database
        if Wishhotels.objects.filter(user = request.user, hotelimage = request.POST["wishimage"], hotelname = request.POST["wishname"],
        hotelstars = request.POST["wishstars"], hotellocation = request.POST["wishlocation"]).exists():
            return render(request, "fiji/hotels.html", {
                "message": "Item is already in your wishlist"
            })
        # Add item in database
        else:
            Wishhotels(user = request.user, hotelimage = request.POST["wishimage"], hotelname = request.POST["wishname"],
                hotelstars = request.POST["wishstars"], hotellocation = request.POST["wishlocation"]).save()
            return render(request, "fiji/hotels.html", {
                "message": "Item added to your wishlist"
            })
    return render(request, "fiji/hotels.html")


def activities(request):
    if request.method == "POST":
        # Check if item already in database
        if Wishactivities.objects.filter(user = request.user, activity = request.POST["activity"], actiimage = request.POST["actiimage"],
        actidestination = request.POST["actidestination"]).exists():
            return render(request, "fiji/activities.html", {
                "message": "Item is already in your wishlist"
            })
        # Add item in database
        else:
            Wishactivities(user = request.user, activity = request.POST["activity"], actiimage = request.POST["actiimage"],
            actidestination = request.POST["actidestination"]).save()
            return render(request, "fiji/activities.html", {
                "message": "Item added to your wishlist"
            })
    return render(request, "fiji/activities.html")


def events(request):
    if request.method == "POST":
        # Check if item already in database
        if Wishevents.objects.filter(user = request.user, eventimage = request.POST["eventimage"], eventtitle = request.POST["eventtitle"]).exists():
            return render(request, "fiji/events.html", {
                "message": "Item is already in your wishlist"
            })
        # Add item in database
        else:
            Wishevents(user = request.user, eventimage = request.POST["eventimage"], eventtitle = request.POST["eventtitle"]).save()
            return render(request, "fiji/events.html", {
                "message": "Item added to your wishlist"
            })
    return render(request, "fiji/events.html")


def food(request):
    if request.method == "POST":
        # Check if item already in database
        if Wishfood.objects.filter(user = request.user, foodimage = request.POST["foodimage"], foodtitle = request.POST["foodtitle"]).exists():
            return render(request, "fiji/food.html", {
                "message": "Item is already in your database"
            })
        # Add item in database
        else:
            Wishfood(user = request.user, foodimage = request.POST["foodimage"], foodtitle = request.POST["foodtitle"]).save()
            return render(request, "fiji/food.html", {
                "message": "Item added to your wishlist"
            })
    return render(request, "fiji/food.html")


def wishlist(request, username):
    # If user isn't searched user, raise error
    myself = User.objects.get(id=request.user.id)
    searchedUser = get_object_or_404(User, username=username)
    if searchedUser != myself:
        raise PermissionDenied

    # If POST, remove item
    if request.method == "POST":
        data = json.loads(request.body)
        if data.get("flightorigin") is not None:
            postorigin = data.get("flightorigin")
            postarrival = data.get("flightarrival")
            postreturn = data.get("flightreturn")
            postclass = data.get("flightclass")
            postadults = data.get("flightadults")
            postchildren = data.get("flightchildren")
            updateflight = Wishflights.objects.filter(user=request.user, flightorigin=postorigin, flightarrival=postarrival, flightreturn=postreturn, 
            flightclass=postclass, flightadults=postadults, flightchildren=postchildren)
            updateflight.delete()
            return JsonResponse({}, status=200)
        elif data.get("hotelname") is not None:
            posthotel = data.get("hotelname")
            updatehotel = Wishhotels.objects.filter(user=request.user, hotelname=posthotel)
            updatehotel.delete()
            return JsonResponse({}, status=200)
        elif data.get("activity") is not None:
            postacti = data.get("activity")
            updateactivity = Wishactivities.objects.filter(user=request.user, activity=postacti)
            updateactivity.delete()
            return JsonResponse({}, status=200)
        elif data.get("eventtitle") is not None:
            postevent = data.get("eventtitle")
            updateevent = Wishevents.objects.filter(user=request.user, eventtitle=postevent)
            updateevent.delete()
            return JsonResponse({}, status=200)
        elif data.get("foodtitle") is not None:
            postfood = data.get("foodtitle")
            updatefood = Wishfood.objects.filter(user=request.user, foodtitle=postfood)
            updatefood.delete()
            return JsonResponse({}, status=200)
    
    # Load wishlist page
    myflight = Wishflights.objects.filter(user=request.user)
    myhotel = Wishhotels.objects.filter(user=request.user)
    myactivity = Wishactivities.objects.filter(user=request.user)
    myevent = Wishevents.objects.filter(user=request.user)
    myfood = Wishfood.objects.filter(user=request.user)
    return render(request, "fiji/wishlist.html", {
        "flights": myflight,
        "hotels": myhotel,
        "activities": myactivity,
        "events": myevent,
        "foods": myfood
    })


def help(request):
    return render(request, "fiji/help.html")


def aboutus(request):
    return render(request, "fiji/aboutus.html")