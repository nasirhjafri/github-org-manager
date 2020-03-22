from django.contrib.auth import models
from django.db.models import TextField


class User(models.AbstractUser):
    access_token = TextField()
