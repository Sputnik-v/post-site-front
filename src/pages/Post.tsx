import React from "react";
import { useParams } from "react-router-dom";

export const Post = () => {

    const {id} = useParams();
    // let [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('port'));
    // let navigate = useNavigate();
    // useEffect(() => {
    //     if (!searchParams.get('port')){
    //         return navigate("/");
    //     }
    // },[]);

    return (
        <div>
            Post {id}
        </div>
    )
}