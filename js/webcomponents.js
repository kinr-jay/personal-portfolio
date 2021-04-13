// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class ProjectCard extends HTMLElement {
  constructor() {
    super();


    // Styling for using Background Image
    // const style = `
    // <style>
    //     div[id="${this.getAttribute("id")}"] {
    //         background-image: url(${this.getAttribute("image")});
    //         background-size: cover;
    //         background-position: center;
    //         height: 300px;
    //         width: 100%;
    //     }
    // </style>
    // `

    // Styling for using <img>
    const style = `
    <style>
        project-card {
            background-color: rgba(255,255,255,1);
            border-radius: .5em;
            margin: 10px;
        }
        .project {
            padding: 1em;
            margin: 1em;
        }
        img {
            height: auto;
            width: 100%;
        }
        .project-links a {
            text-decoration: none;
            color: black;
            background-color: #287be7;
            color: white;
            padding: .5em .75em;
            border-radius: .8em;
        }
    </style>
    `

    this.innerHTML = `
      ${style}
      <div class="project" id="${this.getAttribute("id")}">
        <img src="${this.getAttribute("image")}" alt="project-image">
        <h4>${this.getAttribute("name")}</h4>
        <p>${this.getAttribute("description")}</p>
        <div class="project-links">
            <a href=${this.getAttribute("liveURL")}>Live App</a>
            <a href=${this.getAttribute("gitURL")}>GitHub Repo</a>
        </div>
      </div>
        `;
  }
}

/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("project-card", ProjectCard);
