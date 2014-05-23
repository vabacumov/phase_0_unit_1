#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

* What's the quick key for your OS to spawn the Dev Tools inspector?

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?


https://raw.githubusercontent.com/vabacumov/phase_0_unit_1/master/week_2/1_Chrome_Dev_Tools/imgs/Points_Total.png


 * "Elements" and "Styles" tabs support the realtime editing of HTML and CSS by letting the user change change or delete any element, property, value, etc.
 * The "Sources" tab allows the user to perform JS debugging.
 * The "Network" tab is responsible for performance optimization.

* Ctrl+Shift+i (Windows).

* The background-color is #0b0f11.

* This text is part of an image, not a paragraph.


* The largest image on www.ticketswizard.com is "sellyourtix_1.sflb.ashx"
* I found this information using the "Network" tab in DevTools, more specifically, by sorting all files by size and then looking up the largest image. The "sellyourtix_1.sflb.ashx" image's size is 214B.

* I really am not sure what answer to choose here... I have a few choices, like defering parsing of JS, minifying HTML, CSS and JS, or even optimizing the images. The latter could save 884.7KiB.