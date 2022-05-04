# Generated by Django 3.1.1 on 2021-03-18 16:09

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Activities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.TextField(blank=True, max_length=256, null=True)),
                ('actiimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('actidestination', models.TextField(blank=True, max_length=512, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('eventimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('eventtitle', models.TextField(blank=True, max_length=512, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foodimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('foodtitle', models.TextField(blank=True, max_length=512, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Wishlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flightorigin', models.TextField(blank=True, max_length=256, null=True)),
                ('flightdestination', models.TextField(blank=True, max_length=256, null=True)),
                ('flightarrival', models.DateField(blank=True, null=True)),
                ('flightreturn', models.DateField(blank=True, null=True)),
                ('flightclass', models.TextField(blank=True, max_length=256, null=True)),
                ('flightadults', models.IntegerField(blank=True, null=True)),
                ('flightchildren', models.IntegerField(blank=True, null=True)),
                ('hotelimage', models.TextField(blank=True, max_length=2048, null=True)),
                ('hotelname', models.TextField(blank=True, max_length=512, null=True)),
                ('hotelstars', models.IntegerField(blank=True, null=True)),
                ('hotellocation', models.TextField(blank=True, max_length=1024, null=True)),
                ('activities', models.ManyToManyField(to='fiji.Activities')),
                ('events', models.ManyToManyField(to='fiji.Events')),
                ('food', models.ManyToManyField(to='fiji.Food')),
                ('wishuser', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='wishuser', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
