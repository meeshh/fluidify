you can change the loading.gif image with any convenient gif. of course it is ideal for it to be small in size with optimized resolution

as for the images, you gotta suffix them with a numbers series.
and example of the first two images names

interactive_image_frame_01.jpg
interactive_image_frame_02.jpg

look at the code and fine the imagesData object. replace the options inside of it with the ones you need.

the images array must contain the numbers (suffixes) of the images with leading zeroes as shown in the example. 01, 02, 03 ... 10, 11  and so on...
make sure to repeat the index of the images in a decreasing order as well. 
in the provided example in the code, you will notice that we reached image 40 and then started to decrement again 39, 38, 37 ... all the way to 00
this is very important for the continuity of the flow.


the function FluidifyAlt takes 3 parameters
the image data set which is the object containing the options i described above,
the image container ID. the ID of the html div that you want to load the images in, make sure to keep the leading # while passing it to the FluidifyAlt
a flag that could be true or false. this one decides whether to loop over the animation of end it when you reach the scroll end. 


an example of calling the function is on line 364 of the file index.html
open index.html with a text editor and you will see a working example with all of the code

the code is pretty old a little bit and might need optimization, please feel free to do anything you want with it

Cheers