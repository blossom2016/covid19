# novel-corona
Various datasets were given, and in this datset I needed to make some visual sense out of it.
I worked using node js as the backend and react js for the frontend. For the frontend, i sued ploty js to visualize the dataset. 
#Backend 
Among the files, there was only one that was good enough for me to push to the database.
I tried my best to see what I could do
but it didn’t work. This is what took most of my time. Also, when I extracted the content of the CSV file, it
was matching date to the number and some of the dates were not similar and it will be difficult to label a database for it.
I think it because of the way the data was extracted. 
The "e.js" was the one that had a more sensible record that I could work on. 
The data was too much about 13.000 and I was using a test(free) database "COVID19_open_line_list". 
The number of queries that could be run at once was limited to 50 because I am using a free version. 
I used Postman to test my connection to see if the backend was working well. 
So I uploaded the CSV with a POST request, after which data was extracted from it to see if it can be used to serve the frontend. 

#Frontend
For the frontend, I used react js and ploty js to achieve the graphs that are seen in the project. 
