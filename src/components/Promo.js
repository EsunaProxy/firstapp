import ReactPlayer from "react-player/youtube";
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                </h1>
                </div>
                <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=FCzT_C9CJew" />
            </div>
        </div>
    );
};

export default Promo;