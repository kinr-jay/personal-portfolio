// Ajax call
const apiKey = "AIzaSyBqHAi91PdvmMVdaStfqh-yrk6SZ8AIFkk"

$.ajax(
  `https://sheets.googleapis.com/v4/spreadsheets/1zFakTubjCSGQGx/values/Sheet1?alt=json&key=${apiKey}`
)
  .then((data) => {
    // map over data to create simpler dataset

    const projects = data.feed.entry.map((project) => {
      return {
        id: project.gsx$id.$t,
        name: project.gsx$project.$t,
        liveURL: project.gsx$liveurl.$t,
        gitURL: project.gsx$giturl.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
      };
    });

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
