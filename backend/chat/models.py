from django.db import models

class Message(models.Model):
    USER_CHOICES = [
        ('A', 'Usuário A'),
        ('B', 'Usuário B'),
    ]
    
    user = models.CharField(max_length=1, choices=USER_CHOICES)
    message = models.TextField()
    is_response = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_at']
    
    def __str__(self):
        return f"{self.user} - {self.message[:50]}"