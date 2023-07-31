import "./write.css"

export default function Write(){
    return(
        <div className="write">
            <form className="form">
                <div className="formgroup">
                    {/*in one way programming a icon such that if we click on it files from the computer open*/}
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                     </label>
                    {/*used to add file input from the computer */}
                    <input type="file" id="fileInput"/>
                    {/*a placeholder used to enter text kindoff like a box for input */}
                    <input type="text" placeholder="Title"/>
                </div>
            </form>

        </div>


    )
}   