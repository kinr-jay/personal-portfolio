# Project Overview

**PROJECT NAME:** Personal Portfolio

**PROJECT AUTHOR:** Connor Jacobs

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Friday| Project Description | Complete
|Day 3 - Sunday| Wireframes / Priority Matrix / Timeline | Complete
|Day 4 - Monday| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 5 - Tuesday| MVP & Bug Fixes | Incomplete
|Day 6 - Wednesday| Post-MVP | Incomplete
|Day 7 - Thursday| Final Touches | Incomplete
|Day 8 - Friday| Present | Incomplete


## Project Description

This result of this project will be a personal portfolio site displaying my various software development projects. It will also contain About Me, Contact Me, and Frontend/Backend Skills information. It will initially be built as a single static page application. It will be built mobile-first with responsive design for larger devices using CSS flex and grid displays. It will use API calls to a Google Sheet where the various projects will be stored. It will be deployed via GitHub to Netlify and/or Vercel.

## Google Sheet

https://docs.google.com/spreadsheets/d/1zFakTubjCSGQGx_-CoiBPoo3KNy9gMjIZ1mugdTxSD0/edit#gid=0

## Portfolio I want to Emulate

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [mattfarley.ca](http://mattfarley.ca/) |  skills section, responsive behavior, general layout
| [jkeohan.com](http://jkeohan.com/) | mouseover on a project triggers animations
| [dcfonts.com](https://www.dcfonts.com/)| auto-scrolling carousel to highlight projects

---

## Wireframes

- [Mobile](https://res.cloudinary.com/kinr-jay/image/upload/v1618199143/GA/IMG_8617_whqdvy.heic)
- [Tablet](https://res.cloudinary.com/kinr-jay/image/upload/v1618199142/GA/IMG_8618_wgfz9p.heic)
- [Desktop](https://res.cloudinary.com/kinr-jay/image/upload/v1618199142/GA/IMG_8619_ilyayx.heic)

## Time/Priority Matrix 

[Link](https://res.cloudinary.com/kinr-jay/image/upload/v1618198406/GA/time-priority-matrix.heic)


### MVP/PostMVP - 5min
#### MVP

- Skeleton HTML
- Implement CSS Flex + Grid
- Render project info with jQuery
- Build basic Navbar
- General CSS styling
- Responsive CSS styling
- Build Contact form
- Build Footer

#### PostMVP 

- Build a carousel of top projects
- Upgrade the Navbar
- Add additional pages for About and Contact

## Functional Components

The main functional components of this website will be related to the rendering of the portfolio projects. This includes an AJAX call to the Google Spreadsheet file to obtain the data and jQuery methods to create and modify the necessary HTML elements. Beyond this, there will be click handling functions for the various links, as well as the project cards/tiles

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Skelton HTML | H | 1.5hr | 1.5hr |
| CSS Flex + Grid Design | H | 1.5hr | hr |
| Render project info w/ jQuery | H | 1.5hr | hr |  
| Basic Navbar | H | 2hr|  1.5hr | 
| General CSS Styling | H | 2hr | hr|
| Responsive CSS Styling | H | 1.5hrs|  hr | 
| Build Contact Form | M | 2hr | hr |
| Build Footer | L | 1hr |  hr |
| Total | H | 13hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Carousel | L | 2hr | hr | hr |
| Upgrade Navbar | L | 2hr | hr |
| Mouseover effects | L | 2.5hr | hr |
| Separate page for About | M | 1.5hr | hr |
| Separate page for Contact | M | 1.5hr | hr |
| Total | H | 9.5hrs| hrs |

## Additional Libraries

- Bootstrap 5.0: used to develop the Navigation Bar
- 

## Code Snippet

While I didn't end up using it, it took me a while to figure this out: how to use passed attributes to dynamically label individual instances of a Javascript web component so that each could be styled individually within the web component constructor method.

```js
// Styling for using Background Image
const style = `
<style>
    div[id="${this.getAttribute("id")}"] {
        background-image: url(${this.getAttribute("image")});
        background-size: cover;
        background-position: center;
        height: 300px;
        width: 100%;
    }
</style>
`
`
...
<div class="project" id="${this.getAttribute("id")}">
...
`
```

## Issues and Resolutions

At one point I got a CORS error Pinterest when trying to source an image through my Google Sheet. So I learned what the heck CORS means: Cross-Origin Resource Sharing. I didn't want to dig too deep into Pinterests' CORS policies, so I moved all my images over to Cloudinary. Strangely enough, then the Google Sheet itself was throwing CORS errors, but after reloading the application, things were in order. Unfortunately I did not think to capture the individual error messages.


