import "./write.css"

export default function Write(){
    return(
        <div className="write">
            <img
                 className="wImg"
                 src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 alt=""
            />

            <form className="form">
                <div className="FormGroup">
                    {/*in one way programming a icon such that if we click on it files from the computer open*/}
                    <label htmlFor="fileInput">
                        <i className="wIcon fas fa-plus"></i>
                     </label>
                    {/*used to add file input from the computer */}
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    {/*a placeholder used to enter text kindoff like a box for input */}
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

                </div>

                {/* context to enter ones story. or enter ones text*/}
                <div className="FormGroup">
                    <textarea
                      className="writeInput writeText"
                      placeholder="Tell your story..."
                      type="text"
                     autoFocus={true}
                     />
                </div>
                 <button className="pleaseSubmit" type="submit">
                 Publish
                </button>

            </form>

        </div>


    )
}   