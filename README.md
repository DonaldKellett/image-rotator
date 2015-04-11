# Image Rotator
An example of a rotating image in a webpage.  Credit goes to W3Schools (http://w3schools.com)
# How it works
This animation works by using something called a Web Worker.  More information can be found at http://www.w3schools.com/html/html5_webworkers.asp
Basically, every 10 milliseconds, the script sends a message to the HTML file, changing the contents of the HTML file (or rather, the styling of the elements in the HTML file in this case).  This is done without causing the page to become unresponsive, so the image can be constantly rotated even as the user is viewing the page.