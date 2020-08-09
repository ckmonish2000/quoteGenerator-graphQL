import requests
import json
from flask_graphql import GraphQLView
from flask import Flask
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

app = Flask(__name__)

app.add_url_rule("/graphql",
                 view_func=GraphQLView.as_view('graphql',
                                               schema=schema,
                                               graphiql=True))

if __name__ == "__main__":
    app.run(debug=True)
