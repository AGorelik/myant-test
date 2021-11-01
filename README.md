Myant test API

Supports the following endpoints:

GET /contacts
Retrieves the entire list of contacts. Can optionally add query parameters to select specific contacts.

POST /contacts
Creates a new contact. Mandatory fields are first_name, last_name, address, home_phone_number. Optional fields are mobile_phone_number and work_phone_number.

DELETE /contacts/:id 
Deletes a specific contact (specified by an ID).

GET /groups/:id
Retrieves a group and all contacts associated with that group.