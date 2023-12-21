from django.db import models

# Create your models here.


class MentorProfile(models.Model):
    name = models.CharField(max_length=255,blank=False,default="")
    fullname=models.CharField(max_length=255,blank=False,default="")
    bio = models.TextField(max_length=500,blank=False,default="")
    email = models.EmailField(max_length=255, unique=True,default="")
    expertise = models.CharField(max_length=255,blank=False,default="")
    experience = models.TextField(max_length=200,default="")
    age=models.IntegerField(default=23)
    image=models.ImageField(max_length=500,default="")
    address=models.CharField(max_length=250,blank=True, null=True ,default="")
    certificate=models.FileField(max_length=500,default=" ")
    password = models.CharField(max_length=50)       
    is_approved = models.BooleanField(default=False)
   
    def __str__(self):
        return self.name

