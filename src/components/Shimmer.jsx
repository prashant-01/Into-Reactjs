import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
            <ShimmerThumbnail height={250} width={200} rounded />
        </div>
    )
}

export default Shimmer;