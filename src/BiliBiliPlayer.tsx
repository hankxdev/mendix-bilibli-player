import "./ui/BiliBiliPlayer.css";

import { ReactNode, createElement } from "react";

import { BiliBiliPlayerContainerProps } from "../typings/BiliBiliPlayerProps";
import Player from "./components/Player";

const BiliBiliPlayer = (props: BiliBiliPlayerContainerProps): ReactNode => {
    return (
        <div className="widget-bilibiliplayer aspect-ratio">
            <Player {...props}></Player>
        </div>
    );
};

export default BiliBiliPlayer;
