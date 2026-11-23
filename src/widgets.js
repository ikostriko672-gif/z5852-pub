// Widgets API
// GET /v1/widgets/{id} returns a widget by id. Requires header X-Api-Key.
// POST /v1/widgets creates a widget. Body: {name: string, color: string, size: number}.
// PATCH /v1/widgets/{id} updates a widget's color.
export function getWidget(id){ return fetch('/v1/widgets/'+id); }
export function createWidget(name,color,size){ return fetch('/v1/widgets',{method:'POST',body:JSON.stringify({name,color,size})}); }
export function patchWidget(id,color){ return fetch('/v1/widgets/'+id,{method:'PATCH',body:JSON.stringify({color})}); }
