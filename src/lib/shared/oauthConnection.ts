import { SimplePhrase } from "../../types";

export interface OAuthConnectionPhrases {
  /** English: "Connect" */
  "oAuthConnection.connectButton": SimplePhrase;

  /** English: "Reconnect" */
  "oAuthConnection.reconnectButton": SimplePhrase;

  /** English: "Disconnect" */
  "oAuthConnection.disconnectButton": SimplePhrase;

  /** English: "Sign in" */
  "nonOAuthConnection.signInButton": SimplePhrase;
}

export const oAuthConnectionPhrases: OAuthConnectionPhrases = {
  "oAuthConnection.connectButton": "Connect",
  "oAuthConnection.reconnectButton": "Reconnect",
  "oAuthConnection.disconnectButton": "Disconnect",
  "nonOAuthConnection.signInButton": "Sign in",
};
