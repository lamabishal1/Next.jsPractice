
export default function ComplexDashboardLayout({ children, users, revenue, notification }) {
    return (
        <>
        <div> {children}</div>
        <div className="flex gap-6 mt-4">
            <div className="flex flex-col gap-4">
        <div> {users}</div>
        <div> {revenue}</div>
        </div>
        <div className=" flex flex-1"> 
            {notification}

        </div>
            </div>
        </>
    );
}