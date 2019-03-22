This directory serves as the base of css files which are to be used in
desigining the website and each one of them will have it's own
name according to the sections they are used for and we need to require it 
to import it to the main styles.css files.


Some Rules for the CSS files to be followed
1. First of all we write the css for the mobile websites and the 
   move onto the desktop prespective. We'll use mediaquery for that.
    Base CSS will refer to the mobile view while as the mediaquery will
    be referring to the desktop site.
      The mixin plugin will be used to manage the mediaquery which 
      will make the work productive.

2. The modules also contains the patterns that are being repeated throughout the course and will be used whenever we need them.
    e.g like left and right padding. Images to be borderless. 