# How to use the analogClock plug in

The plug in is used for generating analog watches for web pages to improve the overall design and make them more appealing

This plug in offers a possible 8 different watches by editing the various options that is without considering colors

The <b><u>[tree.json](https://github.com/njaneambrose/AnalogClock/blob/master/tree.json)</u><b> attempts to simply the complicated web of things to allow you to edit the watch with your own styles and express yourself, this makes it easy to even access the very small details in your watch.
The file is self explanatory with selectors to edit each component if you have problems using it raise an issue.

##  Installation

     $ npm install webclock

## Usage
A simple walk through of the options

1: <b>watch</b>: 'large'/'small'/'medium'(Default)/'extend' -> choose any of the four 
       *extend is different because the values are placed inside the watch not outside like the rest(check 4 for its options)
       
 2:<b>minor</b>: true/false -> removes all minor values leaving on 3,6,9,12
 
 3: <b>major</b>: true/false -> removes the major values leaving none or only the
 minor values

 4 <b>extended</b> if you use extend watch configure the watch style from here : 
 
``` 
  {
    x_size: 'normal' || 'large', // sets the size of the watch
    inner_minor: true || false, // removes the shortest sticks
    inner_major: true || false, // removes the longer sticks (affects sticks only)
    inner_major_type: 'sticks' || 'number' // choose inner symbols to use
  }
 ```
 5: <b>effect</b>: 'tick' || 'flow' -> flow(continuous + runs on high CPU utilization)
 
 6: <b>logo</b>: true || false
 
 7: <b>logo_text</b>: if logo true input the text here
 
 8: <b>GMT</b>: true || false ->set true if you do not want to use local time
 
 9: <b>GMT_offset</b>: if GMT is true input the gmt offset of the time in the other location you want to use
 
Below are the defaults: 

```
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

## CAUTION

If you use logo_text the logo may not be centrally placed, find your watch in [tree.json](https://github.com/njaneambrose/AnalogClock/blob/master/tree.json) to see a way to edit it's position

Do not edit fonts unless you are willing to change the whole layout everything but you can edit almost anything else without worry.

Do not use with bootstrap > 3.3.7 yet it may result to improper clock alignment still trying to find a way round this if you have a solution do not hesitate

## Example

```html
 <script src="jquery.js"></script>
 <script src="analogclock.js"></script>
 .......................
 <body>
   <div id="clock"></div> <!-- You want the clock to be placed here -->
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