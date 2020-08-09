import requests
import json

import graphene


class Query(graphene.ObjectType):
    quote = graphene.String()

    def resolve_quote(root, info):
        x = requests.get(
            "https://quote-garden.herokuapp.com/api/v2/quotes/random")
        x = x.json()["quote"]["quoteText"]
        # print(x)
        return x


schema = graphene.Schema(query=Query)

result = schema.execute('''
{
    quote
}
''')

print(result.data)
