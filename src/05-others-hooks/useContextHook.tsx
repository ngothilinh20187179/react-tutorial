// 🚩 Prop Drilling Problem (Without useContext)
const AppWithoutContext = () => {
    const userData = {
        name: "John Doe",
        age: 30,
    };
    return (<SecondComponent user={userData} />)
}
const SecondComponent = (props: any) => {
    return (<ThirdComponent user={props.user} />)
}
const ThirdComponent = ({ user }: { user: { name: string; age: number } }) => {
    return (
        <div>
            <h1>User Info (Without useContext)</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

// ✅ useContext Solution (No Prop Drilling)
import { createContext, useContext } from "react";

const UserContext = createContext<{ name: string; age: number } | null>(null);


const AppWithContext = () => {
    const userData = {
        name: "Jane Smith",
        age: 25,
    };
    return (
        <UserContext.Provider value={userData}>
            <SecondComponentWithContext />
        </UserContext.Provider>
    )
}

const SecondComponentWithContext = () => {
    return (<ThirdComponentWithContext />) // No props needed
}
const ThirdComponentWithContext = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>User Info (With useContext)</h1>
            <p>Name: {user?.name}</p>
            <p>Age: {user?.age}</p>
        </div>
    )
}
export { AppWithContext, AppWithoutContext };