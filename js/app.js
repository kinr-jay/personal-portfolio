// Ajax call
const apiKey = "AIzaSyBqHAi91PdvmMVdaStfqh-yrk6SZ8AIFkk"

$.ajax(
  `https://sheets.googleapis.com/v4/spreadsheets/1zFakTubjCSGQGx_-CoiBPoo3KNy9gMjIZ1mugdTxSD0/values/Sheet1?alt=json&key=${apiKey}`
)
  .then((data) => {
    // map over data to create simpler dataset

    const projects = data.values.map((project) => {
      return {
        id: project[0],
        name: project[1],
        liveURL: project[2],
        gitURL: project[3],
        image: project[4],
        description: project[5],
      };
    });
  
    // Remove first item in projects array that stores google spreadsheet column titles
    projects.shift()

    /////////////////////////////
    // jQuery to render projects
    /////////////////////////////

    for (project of projects) {
      const card = $(
        `<project-card number="${project.id}" name="${project.name}" liveURL="${project.liveURL}" gitURL="${project.gitURL}" image="${project.image}" description="${project.description}">`
      );
      $(".deck").append(card)
    }

    // Dynamic Copyright Text
    $("footer").append($("<p>").text(`Connor Jacobs \u00A9 ${new Date().getFullYear()}`))
  })
  .catch((error) => console.error(error));
