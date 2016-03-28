import { Dispatcher } from "flux"
import assign from "react/lib/Object.assign"

export default assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})
