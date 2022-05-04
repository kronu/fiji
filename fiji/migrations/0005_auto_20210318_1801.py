# Generated by Django 3.1.1 on 2021-03-18 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiji', '0004_auto_20210318_1756'),
    ]

    operations = [
        migrations.AddField(
            model_name='wishactivities',
            name='actiimage',
            field=models.TextField(blank=True, max_length=2048, null=True),
        ),
        migrations.AddField(
            model_name='wishevents',
            name='eventimage',
            field=models.TextField(blank=True, max_length=2048, null=True),
        ),
        migrations.AddField(
            model_name='wishfood',
            name='foodimage',
            field=models.TextField(blank=True, max_length=2048, null=True),
        ),
        migrations.AddField(
            model_name='wishhotel',
            name='hotelimage',
            field=models.TextField(blank=True, max_length=2048, null=True),
        ),
    ]
