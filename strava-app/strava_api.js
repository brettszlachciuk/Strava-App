const auth_link = "https://www.strava.com/oauth/token";

function getActivities(res) {
  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
  //const activities_link =
  //"https://www.strava.com/api/v3/athlete/activities?access_token=26ddfeb56561a1e286a4cc5b4d0d096982de9ecc";
  fetch(activities_link)
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log(res));
}

function reAuthorize() {
  fetch(auth_link, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content type": "application/json",
    },

    body: JSON.stringify({
      client_id: "84686",
      client_secret: "9fcbbcdd437f9aa1c5e6146dc4254cd0d59a9829",
      refresh_token: "e01a7c5501f97ca459dcac5eeca06a84b998d023",
      grant_type: "refresh_token",
    }),
  })
    .then((res) => console.log(res.json()))
    .then((res) => getActivities(res));
}

reAuthorize();
