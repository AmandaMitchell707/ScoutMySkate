export const createSkateRoute = skateRoute => (
  $.ajax({
    url: '/api/skate_routes',
    method: 'POST',
    data: { skateRoute },
    error: (err) => console.log(err),
  })
);

export const fetchAllSkateRoutes = () => (
  $.ajax({
    url: '/api/skate_routes',
    method: 'GET',
    error: (err) => console.log(err),
  })
);

export const fetchSkateRoute = routeId => (
  $.ajax({
    url: '/api/skate_routes/${routeId}',
    method: 'GET',
    error: (err) => console.log(err),
  })
);


export const updateSkateRoute = skateRoute => (
  $.ajax({
    url: '/api/skate_routes/${skateRoute.id}',
    method: 'PATCH',
    data: { skateRoute },
    error: (err) => console.log(err),
  })
);

export const deleteSkateRoute = routeId => (
  $.ajax({
    url: '/api/skate_routes/${routeId}',
    method: 'DELETE',
    error: (err) => console.log(err),
  })
);
