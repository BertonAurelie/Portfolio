import './BoxIndexHeader.scss'

function BoxIndexHeader (props) {

    return (
        <div className = "entete">
                            <div className="box1">
                                <div className="box5">

                                </div>
                            </div>
                            <div className="box2">
                                <h1>Porfolio</h1>
                            </div>
                            <div className="box3">
                            
                            <div className="box5">
                                
                            </div>
                            </div>    
                            <div className="box4">
                                <p id="box4__p--desktop">{props.section}</p>
                                <h1 id="box4__p--mobile">Portfolio</h1>
                            </div>
                        </div>
    )
}

export default BoxIndexHeader