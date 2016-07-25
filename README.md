# P2Netflix
Netflix N Chill

This application searches the global database of Netflix and it allows Netflix subscribers from around the globe rate and comment on movies that are available on Netflix 

On the front end I made an empty array that will hold all of the objects an empty objects to store the results from the API. 

The input box value is used to complete the server to server call that occurs on the backend. This happens during our submit click event, the event takes the input value parses through $.Post. The value that's parsed through post is added to the query search and that's where the API call begins.

I made two functions and both are called after the click event has been initiated. The makeObj function is a filter of the data that I want from the response, the displayO function appends the data from the filter makeObj. The result is all Netflix movie matches in all regions. 

User can add favorite movies they watched from the Netflix database.
