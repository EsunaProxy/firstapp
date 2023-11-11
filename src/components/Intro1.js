import Card from "./Card";
function Intro1() {
        return (
            <div className="blog-post-intro">
                <h1>
                    Task: Add three Card elements.
                    <Card h2="First card's h2" h3="First card's h3"/>
                    <Card h2="Second card's h2" h3="Second card's h3"/>
                    <Card h2="Third card's h2" h3="Third card's h3"/>
                </h1>
                <h2>I've become a React developer!</h2>
                <div>
                    <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                    <p className="link">Read more...</p>
                </div>
            </div>
        );
    };
    
    export default Intro1;