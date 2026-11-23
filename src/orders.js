// Orders API
/** GET /orders - list orders */
app.get('/orders', (req,res)=>res.json(db.orders.list()));
/** POST /orders - create an order {sku, qty} */
app.post('/orders', (req,res)=>res.json(db.orders.create(req.body)));
/** PATCH /orders/:id - change quantity {qty} (replaces DELETE) */
app.patch('/orders/:id', (req,res)=>res.json(db.orders.update(req.params.id, req.body)));
