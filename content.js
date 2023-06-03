// Fonction pour générer un mot de passe aléatoire
function generer_mot_de_passe() {
  var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-';
  var mot_de_passe = '';
  for (var i = 0; i < 20; i++) {
    mot_de_passe += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return mot_de_passe;
}

// Fonction pour remplir automatiquement les champs de mot de passe sur les pages d'inscription
function remplir_champs_mot_de_passe() {
  var champs_mot_de_passe = document.querySelectorAll('input[type="password"]');
  var mot_de_passe = generer_mot_de_passe(); // Générer un mot de passe unique
  
  // Vérifier le nombre de champs de mot de passe
  if (champs_mot_de_passe.length === 1) {
    // Cas où il y a un seul champ de mot de passe
    champs_mot_de_passe[0].value = mot_de_passe;
  } else if (champs_mot_de_passe.length >= 2) {
    // Cas où il y a deux champs de mot de passe
    for (var i = 0; i < champs_mot_de_passe.length; i++) {
      champs_mot_de_passe[i].value = mot_de_passe;
    }
  }
}

// Exécuter la fonction de remplissage automatique des champs de mot de passe lorsque la page est chargée
window.addEventListener('load', remplir_champs_mot_de_passe);
