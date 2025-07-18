export default function Card({children}) {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    return (
        
            <div style={cardStyle}>{children}</div>
        
    );
}