import React from "react";

function Projects() {
    return (
        <section className='container' id='projects'>
            <div className='row' id='projectHeader'>Projects</div>
            <div className='row projTitles'>Gators Newsletter</div>
            <div className='row projects'> 
                <div className='col proj1'>
                <a className='proj1 left projects' href='https://serendipbrity.github.io/Gators-Newsletter/'>Website Link</a>
                <a className='proj1 right' href='https://github.com/Serendipbrity/Gators-Newsletter'>Github Repo</a>
                </div>
            </div>
            <div className='row projTitles'>Belize National Fire Station</div>
            <div className='row projects'>
            <div className='col proj2' >
                <a className='proj2 left projects' href='https://belize-fire-dept.herokuapp.com/'>Website Link</a>
                <a className='proj2 right' href='https://github.com/ppepin34/fire-dept'>Github Repo</a>
                </div>
            </div>
            <div className='row projTitles'>Game Saver</div>
            <div className='row projects'>
            <div className='col proj5' >
                    <a className='proj5 left projects' href='https://safe-river-91585.herokuapp.com/'>Website Link</a>
                    <a className='proj5 right' href='https://github.com/Serendipbrity/ChickenDinner'>Github Repo</a>
            </div>
            </div>
            {/* <div className='row projTitles'>Book Search</div>
            <div className='row'>
            <div className='col proj3' >
                    <a className='proj3 left' href='https://serendipbrity.github.io/BookSearch2022/'>Website Link</a>
                    <a className='proj3 right' href='https://github.com/Serendipbrity/BookSearch2022'>Github Repo</a>
            </div>
            </div>
            <div className='row projTitles'>Deep Thoughts</div>
            <div className='row'>
            <div class='col proj4' >
                    <a className='proj4 left' href='https://guarded-ridge-02514.herokuapp.com/'>Website Link</a>
                    <a className='proj4 right' href='https://github.com/Serendipbrity/deep-thoughts'>Github Repo</a>
            </div>
            </div> */}
        </section>
    )
}

export default Projects;
