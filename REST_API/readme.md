## What is REST API

- It works on Server-Client architecture
- It provides standards for communication btw Server and Client
- If server sends an HTML file to client...then client like browser can use it but clien t like alexa, mobile can't use it.
- So require such a raw format for response that can be useful for all type of client like :- JSON, XML
- If client is surely Browser that is known then we can use HTML format, which reduce client side work
- Always Respect HTTP methods... GET, POST, PUT, PATCH, DELETE
- Don't use POST method to update or delete user.
- for update use : patch method
- for delete use : delete method

## What is a POSTMAN

-It allows users to design, build, and test APIs quickly and efficiently.

- With Postman, developers can create and manage API requests, organize them into collections, and share them with team members.
- It offers features like automated testing, documentation generation, and mock server functionality, making it a valuable tool for API development workflows.

---

## Power of MiddleWare

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

## Headers in HTTP

- Feild of Request and Response
- Headers are META DATA of http request and response
- Headers carry informations for request and response body

- Always add X to custom headers X-headerFiledName
- app.use(express.urlencoded({ extended: false }));
- middleware check content type in headers... if it is HTTP, JSON... then do nothing if it is urlencoded then add in headers

---

## HTTP Status Codes

- Status code tells request sucessfully completed or not

- 200-299 (Sucessful Responses)

  1. 200: sucessfull status ok
  2. 201: sucessfully new resource created...
  3. 202: accepted, data is accepted but not acted upon it
  4. 203: if meta data is not exactly same as server has send
  5. 204: request sucessfully listen but there in no content in response

- 400-499 (Client error responses)

  1. 400: it is about bad request
  2. 401: unauthorised request...like without log-in like post on instagram
  3. 402: payment required
  4. 403: The client does not have access rights to the content that is, it is unauthorized, so the server is refusing to give the requested resource.
  5. 404: Not found requested data

- 500-599 (Server error responses)
  1. 500: it is about internal server error.
  2. 501: this type of request are not supported by user. Means that method not implemented yet
  3. 502: the server received an invalid response from an inbound server.
  4. 503: Service Unavailable like server under maintainance.
  5. 504: gateway timeout.
  6. 505: http version is not supported.
