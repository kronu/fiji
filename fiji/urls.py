from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("register", views.register, name="register"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("search", views.search, name="search"),
    path("flights", views.flights, name="flights"),
    path("activities", views.activities, name="activities"),
    path("hotels", views.hotels, name="hotels"),
    path("events", views.events, name="events"),
    path("food", views.food, name="food"),
    path("<username>/wishlist", views.wishlist, name="wishlist"),
    path("help", views.help, name="help"),
    path("aboutus", views.aboutus, name="aboutus")
]