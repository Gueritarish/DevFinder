# AMA---Exercice
AMA BE - Final interview - Exercice

Le but de cet exercice est de reproduire l'interface présenté à ce lien : 
'https://www.figma.com/design/PT9ES9hdd3PR97xGuw6Oxf/Test-Dev-Front-End?node-id=0-1&t=TpEYE2FkQCZPLTuh-0'

Si vous possedez NodeJs, vous pouvez lancer:
node server.js

Ceci lancera le fichier main.html sur 'http://localhost:8080/' 


Pour firefox si NodeJs non possdé ( seul navigateur testé avec cette methode )( méthode déconseillée ):
A cause de la manière dont l'api de Github fonctionne, il faut se rendre sur 'about:config' puis rechercher "security.fileuri.strict_origin_policy" et passer cette option en False.
Il est ensuite possible d'excuter 
firefox main.html
Puis d'utiliser l'interface.

Voici quelques logins intéressant à tester :
- Gueritarish ( le mien ), permet d'afficher un utilisateur sans Name, et dont la description atteint la limite de caractères possible.
- Octocat (celui de l'exemple), bien qu'il n'ait plus de Lorem Ipsum en biographie, cela reste celui de l'exemple et permet de voir ce qu'il se passe pour un utilisateur sans biographie.
- Tractor, profil trouvé au hazard, dont le lien du blog ne commence pas par "http" ni "https" (a posé des problèmes pour l'hyperlien a un moment car non anticipé).
- Twitter, afin d'observer un profil qui a un twitter_username lié à un compte.
- Un simple espace pour voir le comportement lors d'un login invalide.

Plusieurs remarques sur mon rendu:
- Le "Joined on" n'est pas régulier et bouge légérement de haut en bas selon la taille de la biographie

- J'ai pris la décision de laisser des borders blanches, car pour une raison qui m'a échappé, les gradient dans les borders ne s'affichait pas, et je n'ai donc pas réussi à les afficher.

- La version mobile n'a pas été développé du tout, et est donc impossible à utiliser.

- Les requêtes sur l'API de Github sont aux nombres de 60 par heure glissante, il aurait fallut que je passe par un systeme d'identification par token, en utilisant du YAML ou du REST afin de pouvoir être considéré comme identifié par l'API ayant ainsi à 5000 requêtes par heure glissante.
