// Orders API
/** GET /orders - list orders */
app.get('/orders', (req,res)=>res.json(db.orders.list()));
/** PUT /orders/:id/archive - archive an order (replaces PATCH) */
app.put('/orders/:id/archive', (req,res)=>res.json(db.orders.archive(req.params.id)));
