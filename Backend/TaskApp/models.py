from django.db import models

# Create your models here.
class Task(models.Model):
    name=models.CharField( max_length=50,unique=True,blank=False,null=False)
    done=models.BooleanField(default=False)

    def __str__(self):
        return self.name
