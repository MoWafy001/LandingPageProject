/**
 * Define Global Variables
 * 
*/
const nav = document.querySelector("#navbar__list") // the ul element the will store the links
const sections = document.querySelectorAll("section") // all the sections in the page
const fragment = document.createDocumentFragment() // a fragment to add the links to instead of adding them one by one

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach((section)=>{ // it creates a link for each section
    const item = document.createElement("a") //creates an a element
    item.setAttribute("href", "#"+section.id) // assigns the id of the section to its href attribute
    item.textContent = section.getAttribute("data-nav") //gets the data from data-nav and use it as a name for the button/link
    fragment.appendChild(item) // add it to the fragment before adding all the link at once
})
nav.appendChild(fragment) // all the links are added together for better performance

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",function() { //the function runs every time the user scrolls
    sections.forEach((section)=>{
        const top = section.getBoundingClientRect().top
        const bottom = section.getBoundingClientRect().top + section.getBoundingClientRect().height
        if ( (top <= 10 && bottom > 100) || (top>=0 && bottom<=window.innerHeight) ) {
            section.classList.remove("your-active-class")
            section.classList.add("your-active-class")
        }else{
            section.classList.remove("your-active-class")
        }
    })
    //adds an active class to the section of it is in the view and removes it if it is not
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu #

// Scroll to section on link click #

// Set sections as active #


