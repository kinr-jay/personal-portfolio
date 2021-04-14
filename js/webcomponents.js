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
            background-color: white;
            margin: 10px;
            position: relative;
        }

        img {
            opacity: 1;
            height: auto;
            width: 100%;
            transition: all .5s;
        }

        figcaption {
            opacity: 0;
            padding: 30px;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            transition: all 0.5s;
        }

        figcaption h4 {
            padding: 10% 0;
            margin: 0;
            width: 100%;
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
        }

        figcaption p {
            margin: 0;
            padding: 5% 10%;
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .project-links {
            opacity: 0;
            position: absolute;
            text-align: center;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all .5s;
        }

        .project-links a {
            background-color: #3E4B91;
            border-radius: .8em;
            color: white;
            padding: .5em .75em;
            margin: 20px;
            text-decoration: none;
        }

        ////// Hover effects

        .project-links a:hover {
            background-color: #1e319e
        }

        project-card:hover figcaption {
            opacity: 1;
        }

        project-card:hover img {
            opacity: .2;
        }

        project-card:hover .project-links {
            opacity: 1;
        }

    </style>
    `;

    this.setAttribute("role", "figure");
    this.setAttribute("aria-labelledby", `${this.getAttribute("number")}`);

    this.innerHTML = `
      ${style}
      <img src="${this.getAttribute("image")}" alt="project-image">
      <figcaption id="${this.getAttribute("number")}">
        <h4>${this.getAttribute("name")}</h4>
        <p>${this.getAttribute("description")}</p>
      </figcaption>
      <div class="project-links">
        <a href=${this.getAttribute("liveURL")}>Live App</a>
        <a href=${this.getAttribute("gitURL")}>GitHub Repo</a>
      </div>
        `;
  }
}

/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("project-card", ProjectCard);
