function MyInformation(
    {id, name, email}:{id: string, name: string, email?: string}) {
    return (
    <div>
        <h1 className="my-info">{name} Information</h1>
        <p>id: {id}</p>
        <p style={{background: "purple",color: "white"}}>Name: {name}</p>
        {email ? <p>email: {email}</p>: "No email found"}

    </div>

    );
}

export default MyInformation;