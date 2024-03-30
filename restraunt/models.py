from django.db import models

# Create your models here.
class RestrauntDB(models.Model):
    name = models.CharField(max_length=35)
    email = models.EmailField()
    phone = models.IntegerField()
    address = models.CharField(max_length=1000)

    def __str__(self):
        return f"{self.name} {self.email}"