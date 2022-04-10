# StreamingApi


## Tech
Implement a sample event sourcing with Browser and Node.js. 


## Graph 

One long lived http connection for the communcation.\
![sse](https://user-images.githubusercontent.com/5093598/162597559-81de4840-f503-4a5b-9e66-2961570c2c92.png)


## SSE VS Websokcet
The Main difference between the Websocket and SSE is bidirection communcation. In some cases server needs to push data back to browser and client (browser) no need to send any messages. 

## Standard
[Html Standard](https://developer.mozilla.org/en-US/docs/Web/API/EventSource), and most of the case
`
* event: notice
* data: useful data
* id: someid
`
are the basic format used. 
