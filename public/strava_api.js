const auth_link = "https://www.strava.com/oauth/token";

const apiData = {
  url: "https://www.strava.com/api/v3/athlete/activities?access_token=",
  type: "athlete",
  id: "9151844",
};

const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

function getActivities(res) {
  //const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
  const activities_link =
    "https://www.strava.com/api/v3/athlete/activities?access_token=c7aa973dc1bc636a02040e40670753ba8b27c17b";
  fetch(activities_link)
    .then((res) => {
      return res.json();
    })
    .then((res) => generateHtml(res));
}
getActivities();

const generateHtml = (res) => {
  console.log(res);
  const html = `
    <div class='name'>${res[0].name}</div>
    <div class='stats'>
      <span>Heartrate: ${res[0].average_heartrate}bpm</span>
      <span>Distance: ${res[0].distance}m</span>
    </div>
  `;
  const activityDiv = document.querySelector(".activity");
  activityDiv.innerHTML = html;
};

/*
function reAuthorize() {
  fetch(auth_link, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
*/
