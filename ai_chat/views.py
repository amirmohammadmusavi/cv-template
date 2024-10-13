import openai 
import os
from django.http import JsonResponse,HttpResponse,HttpResponseRedirect

openai.api_key = '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'


def create_embeddings(data):
    #print(data[])
    embeddings = []
    for item in data:
        response = openai.Embedding.create(
            model="text-embedding-ada-002",
            input=item["content"]
        )
        item_embedding = response["data"][0]["embedding"]
        embeddings.append({"text": item["content"], "embedding": item_embedding})
    return embeddings


def ai_chat(request):
    print(create_embeddings([{"content":"amir"}]))
    return HttpResponse(create_embeddings([{"content":"amir"}]))