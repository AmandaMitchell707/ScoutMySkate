export const fetchSkateRoutes = () => (
  $.ajax({
    url: '/api/skate_routes',
    method: 'GET',
    error: (err) => console.log(err),
  })
);
