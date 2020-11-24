# TODO

- implémenter un cpuMonitor utilisant l'api rest openWeather
https://codetree.dev/rest-http-api-calls-with-typescript/
https://openweathermap.org/current


24.11.2020

implémenter l'appel HTTP REST à un service distant,  pour test integration
- discuter les cas où on n'a pas accès à la valeur (timeout, erreur reseau, erreur de format de données recues); comment coder propre , exception ou autre chose?

API doc:  https://openweathermap.org/current
API Key: e520db8276ed57321d8dddb2cc362cc9
tuto call HTTP REST API en typescript:  https://codetree.dev/rest-http-api-calls-with-typescript/
j'ai trouvé un service gratuit de fake API;  pas besoin de key ni d'abonnement; et je pense que ca nous suffit largement
https://jsonplaceholder.typicode.com/

j'ai aussi trouvé un autre article (court) d'example de code d'appel http avec async/await (je pourrai vous expliquer ce que c'est car c'est la même chose en C#)
https://www.carlrippon.com/fetch-with-async-await-and-typescript/




- discuter de l'opportunité de positionner une interface systématique (quand? pourquoi? comment?)