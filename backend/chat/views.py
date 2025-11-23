from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import Message

@csrf_exempt
@require_http_methods(["POST"])
def send_message(request):
    try:
        data = json.loads(request.body)
        user = data.get('user')
        message_text = data.get('message')
        
        if not user or not message_text:
            return JsonResponse({'error': 'Usuário e mensagem são obrigatórios'}, status=400)
        
        if user not in ['A', 'B']:
            return JsonResponse({'error': 'Usuário inválido'}, status=400)
        
        # Para salvar a msg do usuário
        user_message = Message.objects.create(
            user=user,
            message=message_text,
            is_response=False
        )
        
        # Resposta dependendo do usuário
        if user == 'A':
            response_text = "Obrigado por seu contato, Usuário A. Em breve responderemos."
        else:
            response_text = "Agradecemos sua mensagem, Usuário B. Retornaremos em breve."
        
        bot_response = Message.objects.create(
            user=user,
            message=response_text,
            is_response=True
        )
        
        return JsonResponse({
            'user_message': {
                'id': user_message.id,
                'user': user_message.user,
                'message': user_message.message,
                'is_response': user_message.is_response,
                'created_at': user_message.created_at.isoformat()
            },
            'bot_response': {
                'id': bot_response.id,
                'user': bot_response.user,
                'message': bot_response.message,
                'is_response': bot_response.is_response,
                'created_at': bot_response.created_at.isoformat()
            }
        }, status=201)
    
    except json.JSONDecodeError:
        return JsonResponse({'error': 'JSON inválido'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@require_http_methods(["GET"])
def get_history(request, user):
    if user not in ['A', 'B']:
        return JsonResponse({'error': 'Usuário inválido'}, status=400)
    
    messages = Message.objects.filter(user=user).values(
        'id', 'user', 'message', 'is_response', 'created_at'
    )
    
    return JsonResponse({
        'user': user,
        'messages': list(messages)
    })