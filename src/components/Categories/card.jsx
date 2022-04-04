import React from "react";
import camera from "../../assets/images/category-icons/camera.png";

function card() {
    return (
        <div className="caregory-card">
            <div className="cat-icon">
                <img src={camera} alt="" />
            </div>
            <div className="text">Cameras, TVs & Audio</div>
        </div>
    );
}

export default card;
