# TP3 - Messenger

## Présentation
Le but de ce TP est de se familiariser avec les Contexts React ainsi que les Websockets (via SocketIO).

Si les contexts ne sont pas clair, [la doc devrait vous aider](https://reactjs.org/docs/context.html)

La doc de SocketIO: https://socket.io/docs/v4/

## Pour lancer le server
```sh
$ cd server
$ npm install  # yarn
$ npm start    # yarn start
Listening to 8000
```
## Les contexts a remplir
1. UserContext

Contient la liste des users

2. SocketContext

Contient l'objet SocketIO qui vous permettra de communiquer avec le server

3. MainContext

S'occupera surtout lors de votre Login a récupérer votre username et la Room dans laquelle vous allez vous connecter.


## Login

Créer un mini formulaire avec 2 TextInput (un pour username, l'autre pour la room) avec un bouton login.
Au succès du login on se fera rediriger sur la page Chat.

## Chat

Ecouter la reception des messages, ajouter un TextInput + Bouton pour envoyer un message. Afficher les messages réceptionnés avec une FlatList.

Gérer le logout