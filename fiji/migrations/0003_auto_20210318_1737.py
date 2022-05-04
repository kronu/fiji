# Generated by Django 3.1.1 on 2021-03-18 16:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fiji', '0002_auto_20210318_1727'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wishactivities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.TextField(blank=True, max_length=256, null=True)),
                ('actiimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('actidestination', models.TextField(blank=True, max_length=512, null=True)),
                ('user', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Wishevents',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('eventimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('eventtitle', models.TextField(blank=True, max_length=512, null=True)),
                ('user', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Wishflight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flightorigin', models.TextField(blank=True, max_length=256, null=True)),
                ('flightdestination', models.TextField(blank=True, max_length=256, null=True)),
                ('flightarrival', models.DateField(blank=True, null=True)),
                ('flightreturn', models.DateField(blank=True, null=True)),
                ('flightclass', models.TextField(blank=True, max_length=256, null=True)),
                ('flightadults', models.IntegerField(blank=True, null=True)),
                ('flightchildren', models.IntegerField(blank=True, null=True)),
                ('user', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Wishfood',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foodimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('foodtitle', models.TextField(blank=True, max_length=512, null=True)),
                ('user', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Wishhotel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hotelimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('hotelname', models.TextField(blank=True, max_length=512, null=True)),
                ('hotelstars', models.IntegerField(blank=True, null=True)),
                ('hotellocation', models.TextField(blank=True, max_length=1024, null=True)),
                ('user', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='wishlist',
            name='activities',
        ),
        migrations.RemoveField(
            model_name='wishlist',
            name='events',
        ),
        migrations.RemoveField(
            model_name='wishlist',
            name='food',
        ),
        migrations.RemoveField(
            model_name='wishlist',
            name='myuser',
        ),
        migrations.DeleteModel(
            name='Activities',
        ),
        migrations.DeleteModel(
            name='Events',
        ),
        migrations.DeleteModel(
            name='Food',
        ),
        migrations.DeleteModel(
            name='Wishlist',
        ),
    ]
