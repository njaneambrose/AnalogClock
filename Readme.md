# How to use the analogClock plugin
The plugin is used for generating analog watches for webpages to improve the overall design and make them more appealing

This plugin offers a possible 8 diffrent watches by editing the various options that is without considering colors

The tree.json attempts to simply the complicated web of things to allow you to edit the watch with your own styles and express yourself,
this makes it easy to even acess the very small details in your watch.

To follow take for example to edit small watch:<br>
overall - this is the main wrapper to set the background,border,shadow of the watch<br>
Follow through the branch which all give a self-descriptive name or give a description and sample line to access the element in your watch 

[check tree.json](https://github.com/njaneambrose/AnalogClock/blob/master/tree.json)
##  Installation
     $ bower install analogclock
     
 Or:
 
     $ npm install analogclock

## Usage
A simple walkthrough of the options

1: <b>watch</b>: 'large'/'small'/'medium'(Default)/'extend' -> choose any of the four 
       *extend is different because the values are placed inside the watch not outside like the rest(check 4 for its options)
       
 2:<b>minor</b>: true/false -> removes all minor values leaving on 3,6,9,12
 
 3: <b>major</b>: true/false -> removes the major values leaving none or only the
 minor values

 4 <b>extended</b> if you use extend watch configure the watch style from here : 
 
```json 
  {
    x_size: 'normal'/'large', // sets the size of the watch
    inner_minor: true || false, // removes the small sticks that represent minutes
    inner_major: true || false, // removes the major sticks (affects sticks only)
    inner_major_type: 'sticks' || 'number' // choose one of the two
  }
 ```
 5: <b>effect</b>: 'tick'/'flow' -> flow(continuous + runs on high CPU utilization)
 
 6: <b>logo</b>: true/false
 
 7: <b>logo_text</b>: if logo true input the text here
 
 8: <b>GMT</b>: true/false ->set true if you do not want to use local time
 
 9: <b>GMT_offset</b>: if GMT is true input the gmt offset of the time in the other location you want to use
 
Below are the defaults: 

```json
{
  watch: 'medium',
  minor: true, 
  major: true, 
  effect: 'tick',
  logo: false, 
  logo_text: 'name',
  GMT: false,
  GMT_offset: 0,
  extended:{
   inner_minor: true,
   inner_major: true,
   inner_major_type: 'sticks'
    }
}
```  
Check an example [here](https://github.com/njaneambrose/AnalogClock/blob/master/VisualTests.html)

If you use logo_text the logo may not be centrally placed, follow your watch branch in [tree.json](https://github.com/njaneambrose/AnalogClock/blob/master/tree.json) to see a way to edit it's position

## Example

```html
 <script src="jquery.js"></script>
 <script src="analogclock.js"></script>
 .......................
 <body>
   <div id="clock"></div> <!-- You want the clock to be palced here -->
   ......................
 </body>
 <script>
 $("#clock").analogClock({
      watch: 'medium',
      minor: true, 
      major: true, 
      effect: 'tick',
      logo: true,
      logo_text: 'My website name',
      GMT: true,
      GMT_offset: +3
 });
 </script>
```