import { useParams } from "react-router";

export default function UsersPage() {
    const { username } = useParams();
    return (
        <div>
            <h1>UsersPage: {username}</h1>
        </div>
    )
}
