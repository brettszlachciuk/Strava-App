const auth_link = "https://www.strava.com/oauth/token";

function getActivities(res) {
  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;

  fetch(activities_link).then((res) => console.log(res));
}

getActivities();

function reAuthorize() {
  fetch(auth_link, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content type": "application/json",
    },

    body: JSON.stringify({
      client_id: "84686",
      client_secret: "9fcbbcdd437f9aa1c5e6146dc4254cd0d59a9829",
      refresh_token: "cfc19366ca63e850cc6a4fd7aaca324f72864323",
      grant_type: "refresh_token",
    }),
  })
    .then((res) => res.json())
    .then((res) => getActivities(res));
}

reAuthorize();
