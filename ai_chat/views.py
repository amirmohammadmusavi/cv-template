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