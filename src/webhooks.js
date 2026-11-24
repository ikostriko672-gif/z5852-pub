/**
 * Webhooks subsystem.
 *
 * ReadMe projects can subscribe to lifecycle events. This module registers the
 * webhook routes, verifies the HMAC signature, and dispatches to subscribers.
 */

/** List all webhook subscriptions for the current project. */
app.get('/webhooks', (req, res) => res.json(db.webhooks.list(req.project.id)));

/** Create a subscription. Body: {url, events:[...], secret}. Returns {id, status}. */
app.post('/webhooks', (req, res) => {
  const { url, events, secret } = req.body;
  const sub = db.webhooks.create(req.project.id, { url, events, secret });
  return res.status(201).json(sub);
});

/** Rotate the signing secret for a subscription. */
app.post('/webhooks/:id/rotate', (req, res) => res.json(db.webhooks.rotate(req.params.id)));

/** Verify an incoming webhook signature using the shared secret (HMAC-SHA256). */
function verify(req, secret) {
  const sig = req.headers['x-rdme-signature'];
  return hmac(secret, req.rawBody) === sig;
}

/** Delete a subscription. */
app.delete('/webhooks/:id', (req, res) => res.json(db.webhooks.remove(req.params.id)));
