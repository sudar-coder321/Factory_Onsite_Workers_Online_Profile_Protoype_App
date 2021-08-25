const msalConfig = {
    auth: {
      clientId: "32fe0d9a-17ef-4a28-a91e-b2f9c7aa91a6",
      authority: "https://login.microsoftonline.com/199cd65c-6cfa-4af3-8e5f-f279abc07ce8",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };

  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
  };

  
  /*this has been commented because it may not be required for getting only the profile information*/


  // Add here scopes for access token to be used at MS Graph API endpoints.
  /*const tokenRequest = {
    scopes: ["Mail.Read"]  //Mail.Read,"Calendar.Read",, "Groups.Read" 
  };
  */