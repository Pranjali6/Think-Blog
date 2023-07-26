import "./header.css"

export default function Header(){

    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headTitleSmall"> React & Node</span>
                <span className="headTitleLarge">Blog</span>
            </div>

            <img
            className="headerImg"
            src="https://www.pexels.com/photo/beach-under-blue-and-white-sky-1835718/"
            alt=""
            />
        </div>
    )


}