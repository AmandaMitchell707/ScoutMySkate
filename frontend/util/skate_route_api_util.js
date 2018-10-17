export const createSkateRoute = skate_route => (
  $.ajax({
    url: '/api/skate_routes',
    method: 'POST',
    data: { skate_route },
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
    url: `/api/skate_routes/${routeId}`,
    method: 'GET',
    error: (err) => console.log(err),
  })
);


export const updateSkateRoute = skate_route => (
  $.ajax({
    url: `/api/skate_routes/${skate_route.id}`,
    method: 'PATCH',
    data: { skate_route },
    error: (err) => console.log(err),
  })
);

export const deleteSkateRoute = routeId => (
  $.ajax({
    url: `/api/skate_routes/${routeId}`,
    method: 'DELETE',
    error: (err) => console.log(err),
  })
);
