from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Wishflights(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    flightorigin = models.TextField(blank=True, null=True, max_length=256)
    flightdestination = models.TextField(blank=True, null=True, max_length=256)
    flightarrival = models.DateField(blank=True, null=True)
    flightreturn = models.DateField(blank=True, null=True)
    flightclass = models.TextField(blank=True, null=True, max_length=256)
    flightadults = models.IntegerField(blank=True, null=True)
    flightchildren = models.IntegerField(blank=True, null=True)
    
class Wishhotels(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    hotelimage = models.TextField(blank=True, null=True, max_length=2048)
    hotelname = models.TextField(blank=True, null=True, max_length=512)
    hotelstars = models.IntegerField(blank=True, null=True)
    hotellocation = models.TextField(blank=True, null=True, max_length=1024)

# ACTIVITIES
class Wishactivities(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    activity = models.TextField(blank=True, null=True, max_length=256)
    actiimage = models.TextField(blank=True, null=True, max_length=2048)
    actidestination = models.TextField(blank=True, null=True, max_length=512)

# EVENTS 
class Wishevents(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    eventimage = models.TextField(blank=True, null=True, max_length=2048)
    eventtitle = models.TextField(blank=True, null=True, max_length=512)

# FOOD
class Wishfood(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    foodimage = models.TextField(blank=True, null=True, max_length=2048)
    foodtitle = models.TextField(blank=True, null=True, max_length=512)
