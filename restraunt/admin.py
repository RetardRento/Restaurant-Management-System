from django.contrib import admin
from .models import RestrauntDB
# Register your models here.
class RestrauntData(admin.ModelAdmin):
    list_display = ['name', 'email']

admin.site.register(RestrauntDB, RestrauntData)