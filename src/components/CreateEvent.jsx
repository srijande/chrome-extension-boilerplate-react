import React, { Component } from 'react';

const {fs} = require('fs');
// import { GoogleApis } from 'googleapis';
// const {google} = require('googleapis');

class CreateEvent extends Component {

  // If modifying these scopes, delete token.json.
  SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  TOKEN_PATH = 'token.json';




// // Load client secrets from a local file.
// fs.readFile('credentials.json', (err, content) => {
//   if (err) return console.log('Error loading client secret file:', err);
//   // Authorize a client with credentials, then call the Google Calendar API.
//   authorize(JSON.parse(content), listEvents);
// });

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
authorize = (credentials, callback) => {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}





  CLIENT_ID = '751778157838-o0okmukfksh1hp0floeqvsm18nvrlj7k.apps.googleusercontent.com';
  API_KEY = 'AIzaSyD9r0fUXtY0E0i-jgcVxJI_4HLfNDoXkiM';
  SCOPES = 'https://www.googleapis.com/auth/calendar';
  // oauth2Client = new google.auth.OAuth2(
  //   CLIENT_ID,
  //   CLIENT_ID,
  //   CLIENT_ID
  // );
  intializeGapiClient = () => {
    gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    // maybeEnableButtons();
  }
  gapiLoaded = () => {
    gapi.load('client', intializeGapiClient);
  }

  handleAuthClick = () => {
    gapi.load('client', intializeGapiClient);
    console.log('Authorize');
    gapi.auth2.getAuthInstance().signIn();
  }
  handleSignoutClick = () => {
    console.log('Sign Out');
    gapi.auth2.getAuthInstance().signOut();
  }
  

  
  state = {
    name: 'dev',
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}!</p>
        
        <button onClick={this.handleAuthClick}>Authorize</button>
        <button onClick={this.handleSignoutClick}>Sign Out</button>


      </div>
    );
  }
}

export default CreateEvent;
