import "./navbar.scss"

const Navbar = () => {

    return (
    <div className = "navbar">
        {/*Sidebar */}
     <div className = "wrapper">
            <span> Adam Olson</span>
        <div className= "social">
            <a href = "#"><img src = "facebook.png" alt = "" /> </a>
            <a href = "#"><img src = "linkedIn.png" alt = "" /> </a>
            <a href = "#"><img src = "GitHub.png" alt = "" /> </a>
            <a href = "#"><img src = "YouTube.png" alt = "" /> </a>
        </div>
    </div>
    </div>
    )
}

export default Navbar