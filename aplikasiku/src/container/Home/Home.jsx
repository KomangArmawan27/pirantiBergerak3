import React, {Component} from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";


class Home extends Component {
    render(){
        return(
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time = "7.56" 
                    title = "tes1" 
                    desc = "desc1"/>
                <YouTubeComp 
                    time = "6.69" 
                    title = "tes2" 
                    desc = "desc2"/>
                <YouTubeComp 
                    time = "9.9" 
                    title = "tes3" 
                    desc = "desc3"/>
                <YouTubeComp 
                    time = "10.6" 
                    title = "tes4" 
                    desc = "desc4"/>
                <YouTubeComp /> */}
                <p>counter</p>
                <hr/>
                <Product />
            </div>
        )
    }
}

export default Home;