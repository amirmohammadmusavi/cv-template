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