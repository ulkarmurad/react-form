import { useReducer } from "react"
import { AuthReducer, initial } from "../store/store"

export default function Form() {
    const [state, dispatch] = useReducer(AuthReducer, initial)

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: 'submit'})
    }
    return (
            <form style={{ display: 'flex' }}>
                <label >
                    Name:
                    <input value={state.username} type="text" name="username" onChange={(event) => dispatch({ type: event.target.name, payload: event.target.value })} />
                </label>
                <label>
                    Password:
                    <input value={state.password} type="password" name="password" onChange={(event) => dispatch({ type: event.target.name, payload: event.target.value })} />
                </label>
                <label>
                    Email:
                    <input value={state.email} type="email" name="email" onChange={(event) => dispatch({ type: event.target.name, payload: event.target.value })} />
                </label>
                <button onClick={(e) => handleSubmit(e)} type="submit" value="submit">Submit</button>
            </form>

    )
}