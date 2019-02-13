import React from 'react'

const Validation = {
  email: {
    presence: {
      message: '^Adresse Mail'
    },
    email: {
      message: '^Veuillez insérer votre adresse mail'
    }
  },

  password: {
    presence: {
      message: '^Mot de passe'
    },
    length: {
      minimum: 5,
      message: '^Le mot de passe doit être composé de 5 caractères minimum'
    }
  },

  username: {
    presence: {
      message: '^Nom d\'utilisateur'
    },
    username: {
      message: '^Veuillez insérer votre nom d\'utilisateur'
    }
  },

  nom: {
    presence: {
      message: '^Nom'
    },
    nom: {
      message: '^Veuillez insérer votre nom '
    }
  },

  prenom: {
    presence: {
      message: '^Prénom'
    },
    prenom: {
      message: '^Veuillez insérer votre prénom'
    }
  }

}

export default Validation
