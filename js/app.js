$.ajax(
  "https://spreadsheets.google.com/feeds/list/1zFakTubjCSGQGx_-CoiBPoo3KNy9gMjIZ1mugdTxSD0/1/public/full?alt=json"
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
  })
  .catch((error) => console.error(error));
