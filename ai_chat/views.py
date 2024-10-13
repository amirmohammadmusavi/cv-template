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