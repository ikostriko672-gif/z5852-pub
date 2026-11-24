# Orders API reference

The Orders API lets integrators create, list, update and cancel orders. All endpoints require a bearer token.

## List orders

`GET /orders` returns the current order list with pagination via the `page` and `per_page` query parameters.

## Create an order

`POST /orders` with a JSON body `{"sku": "ABC", "qty": 2}` creates an order and returns its id.

## Cancel an order

`DELETE /orders/{id}` cancels the order and returns the updated status.

## Interactive status widget

<z262out2 />

The widget above shows live order status for your project.
