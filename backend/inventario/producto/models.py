from django.db import models
from django.db.models.functions import Lower

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()
    descripcion = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                Lower('nombre'),
                name='unique_nombre_insensible'
            )
        ]
    

    def __str__(self):
        return self.nombre