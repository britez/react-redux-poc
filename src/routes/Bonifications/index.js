import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/bonifications',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Bonification = require('./components/Bonification').default
      const reducer = require('./modules/bonification').default
      const specialBonificationReducer = require('./modules/specialBonification').default
      const bonificationModalReducer = require('./modules/bonification').bonificationModalReducer

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'bonification', reducer })
      injectReducer(store, { key: 'specialBonification', reducer: specialBonificationReducer })
      injectReducer(store, { key: 'bonificationModal', reducer: bonificationModalReducer })

      /*  Return getComponent   */
      cb(null, Bonification)

    /* Webpack named bundle   */
    }, 'bonitication')
  }
})
