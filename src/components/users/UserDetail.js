import {Link, useParams} from "react-router-dom";

function UserDetail() {
    let { id } = useParams();

    return (
        <>
        User Detail: {id}
            <Link to={'/users'}>Back</Link>
        </>
    )
}

export default UserDetail
