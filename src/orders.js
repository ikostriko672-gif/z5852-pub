// Orders API
/** GET /orders - list orders */
app.get('/orders', (req,res)=>res.json(db.orders.list()));
/** POST /orders - create an order {sku, qty} */
app.post('/orders', (req,res)=>res.json(db.orders.create(req.body)));
/** DELETE /orders/:id - cancel an order */
app.delete('/orders/:id', (req,res)=>res.json(db.orders.cancel(req.params.id)));
