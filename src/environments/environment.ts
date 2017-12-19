// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDgsQGCJB0w7tNpjye8rQd-WY6hZeZJVAA',
    authDomain: 'base-chat-dano.firebaseapp.com',
    databaseURL: 'https://base-chat-dano.firebaseio.com',
    projectId: 'base-chat-dano',
    storageBucket: 'base-chat-dano.appspot.com',
    messagingSenderId: '683827470159'
  }
};
