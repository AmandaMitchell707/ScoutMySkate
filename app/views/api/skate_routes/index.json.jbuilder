@skate_routes.each do |skate_route|
  json.set! skate_route.id do
    json.partial! 'api/skate_routes/skate_route', skate_route: skate_route
  end
end
