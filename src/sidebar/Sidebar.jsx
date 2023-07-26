import "./sidebar.css"

export default function Sidebar(){

    return (
        <div className="sidebar">
           <div className="sidebarItem">
            <span className="sidebarTitle"> About Me</span>
           <img src=""></img>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem. Laudantium, natus? Unde laborum porro vel dolore fugiat rem eum aspernatur sed sunt maiores, qui impedit dicta quam. Aut, illo?</p>
           </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li> 

            </ul>
        </div>
        <div className="sidebarItem">FOLLOW US</div>
        <div className="sidebarSocial"></div> 
        </div>
    )


}