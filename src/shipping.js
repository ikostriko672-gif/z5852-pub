// Shipping API
/** GET /shipments - list shipments for the account */
app.get('/shipments', (req,res)=>res.json(db.shipments.list()));
/** POST /shipments - create a shipment {orderId, carrier, address} */
app.post('/shipments', (req,res)=>res.json(db.shipments.create(req.body)));
/** GET /shipments/:id/track - carrier tracking events */
app.get('/shipments/:id/track', (req,res)=>res.json(db.shipments.track(req.params.id)));
