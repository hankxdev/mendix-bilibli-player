import { Component, ReactNode, createElement } from "react";

import { BiliBiliPlayerContainerProps } from "../typings/BiliBiliPlayerProps";
import Player from "./components/Player";

declare function require(name: string): string;

export class preview extends Component<BiliBiliPlayerContainerProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                <Player {...this.props}></Player>
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }
}

export function getPreviewCss(): string {
    return require("./ui/BiliBiliPlayer.css");
}
