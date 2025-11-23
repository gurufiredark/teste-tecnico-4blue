from django.contrib import admin
from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ['user', 'message', 'is_response', 'created_at']
    list_filter = ['user', 'is_response', 'created_at']
    search_fields = ['message']