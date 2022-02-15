/* eslint-disable prettier/prettier */

import { ReactElement, createElement, useEffect, useState } from "react";

import { BiliBiliPlayerContainerProps } from "../../typings/BiliBiliPlayerProps";

const getBVID = (url: string): string => {
    if (!url) {
        return "";
    }
    const reg = /https?:\/\/www\.bilibili\.com\/video\/(\w{12})/;
    const match = url.match(reg);
    if (match) {
        return match[1];
    }
    return "";
};

const Player = (props: BiliBiliPlayerContainerProps): ReactElement => {
    const [bvid, setBVID] = useState("");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!props.url) {
            return;
        }
        const bvid = getBVID(props.url.value as string);
        if (!bvid) {
            return;
        }
        setBVID(bvid);
        setIsReady(true);
    }, [props.url]);

    return (
        <div>
            {isReady ? (
                <iframe
                    title="player"
                    width="100%"
                    style={{ border: "none", minHeight: "200px" }}
                    src={`https://player.bilibili.com/player.html?bvid=${bvid}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <div className="bilibiliplayer-warning text-warning alert">No video available, yet</div>
            )}
        </div>
    );
};
export default Player;
