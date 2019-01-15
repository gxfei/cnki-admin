const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tags.visitedViews,
  routers: state => state.routers.routers
}
export default getters
