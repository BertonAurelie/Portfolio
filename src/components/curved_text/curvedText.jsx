import './curvedText.scss'
import img from '../../assets/img.jpg'

function CurvedText () {

    return (
        <div className = "curved__text--container">
            <div className="warp" aria-labelledby="warp-label">
                <span id="warp-label" className="warp__placeholder">
                    Je suis Aurélie Berton
                </span>
                    
                <span aria-role="presentation">
                    <span className="warp__0">
                        J
                    </span>
                    <span className="warp__1">
                        e
                    </span>
                    <span className="warp__2">
                        
                    </span>
                    <span className="warp__3">
                        s
                    </span>
                    <span className="warp__4">
                        u
                    </span>
                    <span className="warp__5">
                        i
                    </span>
                    <span className="warp__6">
                        s
                    </span>
                    <span className="warp__7">
                        
                    </span>
                    <span className="warp__8">
                        B
                    </span>
                    <span className="warp__9">
                        e
                    </span>
                    <span className="warp__10">
                        r
                    </span>
                    <span className="warp__11">
                        t
                    </span>
                    <span className="warp__12">
                        o
                    </span>
                    <span className="warp__13">
                        n
                    </span>
                    <span className="warp__14">
                        
                    </span>
                    <span className="warp__15">
                        A
                    </span>
                    <span className="warp__16">
                        u
                    </span>
                    <span className="warp__17">
                        r
                    </span>
                    <span className="warp__18">
                        é
                    </span>
                    <span className="warp__19">
                        l
                    </span>
                    <span className="warp__20">
                        i
                    </span>
                    <span className="warp__21">
                        e
                    </span>
                </span>
            </div>
            <img src = {img} alt = "aurore boréale"></img>
            <div className="warp2" aria-labelledby="warp-label2">
                <span id="warp-label2" className="warp__placeholder2">
                    Développeuse Web
                </span>
    
                <span aria-role="presentation">
                    <span className="warp__0">
                        D
                    </span>
                    <span className="warp__1">
                        é
                    </span>
                    <span className="warp__2">
                        v
                    </span>
                    <span className="warp__3">
                        e
                    </span>
                    <span className="warp__4">
                        l
                    </span>
                    <span className="warp__5">
                        o
                    </span>
                    <span className="warp__6">
                        p
                    </span>
                    <span className="warp__7">
                        p
                    </span>
                    <span className="warp__8">
                        e
                    </span>
                    <span className="warp__9">
                        u
                    </span>
                    <span className="warp__10">
                        s
                    </span>
                    <span className="warp__11">
                        e
                    </span>
                    <span className="warp__12">
                        
                    </span>
                    <span className="warp__13">
                        W
                    </span>
                    <span className="warp__14">
                        e
                    </span>
                    <span className="warp__15">
                        b
                    </span>
                </span>
            </div>                    
        </div>
    )

}

export default CurvedText