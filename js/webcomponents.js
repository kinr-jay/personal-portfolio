// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class ProjectCard extends HTMLElement {
  constructor() {
    super();

    // Styling for custom project-card HTML element
    const style = `
    <style>
        project-card {
            background-color: white;
            margin: 10px;
            position: relative;
            border-radius: 1em;
        }

        img {
            opacity: 1;
            height: auto;
            width: 100%;
            transition: all .5s;
            border-radius: 1em 1em 0 0;
        }

        figcaption {
            padding: 10px;
            text-align: center;
        }

        .project-links {
            padding: 0 0 20px;
            text-align: center;
        }

        .project-links a {
            background-color: #3E4B91;
            border-radius: .8em;
            color: white;
            padding: .5em .75em;
            margin: 20px;
            text-decoration: none;
        }

        @media screen and (min-width: 1024px) {
            project-card {
                border-radius: 0;
            }

            .project-details {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }

            img {
                border-radius: 0;
            }

            figcaption {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                opacity: 0;
                height: 100%;
                width: 100%;
                transition: all 0.5s;
                flex-grow: 1;
                padding: 5%;
            }

            figcaption h4 {
                padding: 0;
                margin: 0;
                width: 100%;
                text-align: center;
            }
    
            figcaption p {
                padding: 0;
                width: 100%;
                text-align: center;
            }
    
            .project-links {
                opacity: 0;
                width: 100%;
                transition: all .5s;
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
        }

        

    </style>
    `;

    this.setAttribute("role", "figure");
    this.setAttribute("aria-labelledby", `${this.getAttribute("number")}`);

    this.innerHTML = `
      ${style}
      <img src="${this.getAttribute("image")}" alt="project-image">
      <div class="project-details">
        <figcaption id="${this.getAttribute("number")}">
          <h4>${this.getAttribute("name")}</h4>
          <p>${this.getAttribute("description")}</p>
        </figcaption>
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
