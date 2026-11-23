// Widgets API
// GET /v1/widgets/{id} returns a widget by id. Requires header X-Api-Key.
// POST /v1/widgets creates a widget. Body: {name: string, color: string}.
// DELETE /v1/widgets/{id} deletes a widget (admin only).
export function getWidget(id){ return fetch('/v1/widgets/'+id); }
export function createWidget(name,color){ return fetch('/v1/widgets',{method:'POST',body:JSON.stringify({name,color})}); }
