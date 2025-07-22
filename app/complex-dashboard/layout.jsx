
export default function ComplexDashboardLayout({ children, users, revenue, notification, login }) {
    
    const isLoggedIn = true;
    
    return isLoggedIn ?(
        <>
            <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
                {children}
            </div>
            <div className="flex gap-6 mt-4">
                <div className="flex flex-col gap-4 w-1/3">
                    <div className="bg-green-100 text-green-800 p-4 rounded shadow">{users}</div>
                    <div className="bg-yellow-100 text-yellow-800 p-4 rounded shadow">{revenue}</div>
                </div>
                <div className="flex flex-1">
                    <div className="bg-red-100 text-red-800 p-4 rounded shadow w-full">
                        {notification}
                    </div>
                </div>
            </div>
        </>
    ):
    (
       login

    );
}