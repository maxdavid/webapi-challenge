# Self-study Questions

1. Mention two parts of Express that you learned about this week.

Routing and middleware.

1. Describe Middleware?

Middleware are functions that receive the request and response objects to either modify or examine them, before passing them along in the pipeline (either to another middleware or as a response to the caller).

1. Describe a Resource?

Resources are objects with data fields that persist in a database. We have a number of methods to operate on them.

1. What can the API return to help clients know if a request was successful?

Status codes, specifically 200

1. How can we partition our application into sub-applications?

By using routing, we can have a division/hierarchy of needs and responsibilities. For example, a route for all authentication related pages, and another for internal pages.
