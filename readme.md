# FLUIDIFY

FLUIDIFY is a small tool that creates a timelapse effect on scroll OR on drag and move. It is a useful tool for interior and exterior designers.

A good use case is a panorama that has shadows changing according to different lighting angles. With FLUIDIFY, this effect is showcased by scrolling the mousewheel on the desktop version or touch and move on mobile.

## How to use FLUIDIFY

* include ```main.css``` and ```main.js``` in your html
* create the images dataset object based on the following example
```
var imagesData = {
    imageDirectoryPath: "images/",
    imagePrefix: "interactive_image_frame_",
    imageExtension: ".jpg",
    images: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "39", "38", "37", "36", "35", "34", "33", "32", "31", "30", "29", "28", "27", "26", "25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01"
        ]
    };
```

where 
* ```imageDirectoryPath``` is the path of the directory to your images dataset
* ```imagePrefix``` is the prefix of the images file names
* ```imageExtension``` is the extension used for the image files
* ```images``` is an array of the images with their indexes. These indexes mus be part of the images names.

An example of an images dataset with their full path and names: 
```
images/interactive_image_frame_01.jpg
images/interactive_image_frame_02.jpg
...
```
The images array must index the images according to an ascending order and then when it reaches the last image index, starts a descending order untill it reaches the first index again. Example:
```
images: ["01", "02", "03", "04", "03", "02", "01"]
```

### Calling the function
in order to initialize FLUIDIFY, have a ```div``` with a specific. This div will serve as the container to the images.
example: 
```
<div id="imagesContainer1"></div>
```
Then inside your script, call the function ```Fluidify``` passing the image dataset object to it and some options like the following
```
Fluidify(imagesData, {
    container: '#imagesContainer1',
    loopable: false, //Optional
    spinnerUrl: 'https://i.redd.it/o6m7b0l6h6pz.gif', //Optional
    width: '700px', //could be percentage. Optional
});
```
the options passed to the function are explained as follows:
* ```container``` the div ID that must hold the images
* ```loopable``` set it to true if you want to reset the scroll action once you reach the last frame
* ```spinnerUrl``` pass the path to a spinner gif image to be loaded before the images entirely load
* ```width``` set it to the desirable width for the container

## For a clearer example, look to the index file in this repo.
