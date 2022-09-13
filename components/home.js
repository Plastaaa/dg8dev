import NavBar from "./navbar";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Carou from "./carousel";
import MiniSearch from "./minisearch";
import SlideMarque from "./slideMarc";
import FourCC from "./fourcc";
import FamilleCC from "./famCC";
import MapConcess from "./mapConcess";

export default class HomePage extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <div class="flex flex-wrap mx-2 overflow-hidden">
                    <div class="my-2 w-full overflow-hidden">
                        <Carou/>
                    </div>
                    <div class="my-2 w-full overflow-hidden">
                        <div className="grid place-items-center">
                            <MiniSearch/>
                        </div>
                    </div>

                    <div class="my-2 w-full overflow-hidden">
                        <SlideMarque/>
                    </div>

                    <div class="my-2 w-full overflow-hidden">
                        <FourCC/>
                    </div>

                    <div class="my-2 w-full overflow-hidden">
                        <FamilleCC/>
                    </div>

                    <div class="my-2 w-full overflow-hidden">
                        <MapConcess/>
                    </div>

                    <div class="my-2 w-full overflow-hidden">

                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
            
        );
    }
}