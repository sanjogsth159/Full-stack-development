import axios from "axios";
import { useEffect, useState } from "react"; 
import MyInformation from "../../MyInformation"; 

export interface IAuthUserList {
    _id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    role: string;
    __v: number;
}

function AuthHomePage() {
const [users, setUsers] = useState<IAuthUserList[]>([]);

    useEffect(() => {
        
        const accessToken = localStorage.getItem("accessToken");
        async function fetchData() {
            axios.get("http://localhost:3000/users/list", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })
            .then((res) => {
            const userList: IAuthUserList[] = res?.data?.users || [];
            setUsers(userList);
        })
        .catch((err) => {
            console.log("error => ", err);
            const errors = err.response?.data?.message || "An error occurred";
            alert(errors); 
        });
    }
    
    fetchData();
    }, []);

return (
<div>
    {users?.map((user, index) => {
        return (<MyInformation key={index} id={user?._id} name={user?.name} email={user?.email} />
    );
    })}
</div>
);
}

export default AuthHomePage;