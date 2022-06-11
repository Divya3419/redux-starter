
import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"
import { feedReducer } from "./feeds/feeds.reducer"

const rootReducer = combineReducers({
    auth:authReducer,
    feed:feedReducer
})

export const store =legacy_createStore
(rootReducer,applyMiddleware(thunk))

