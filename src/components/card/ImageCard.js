import React from 'react';
import './ImageCard.css'
function ImageCard(props) {
    const { tattooImageUrl, tagTextSelected, tags } = props;

    return (
        <div className="container-center-horizontal">
            <div className="image-card-view screen">
                <img className="tattoo-image animate-enter" src={tattooImageUrl} />
                <div className="tag-box">
                    <div className="tag-selected">
                        <div className="tag-text-selected valign-text-middle">
                            {tagTextSelected}
                        </div>
                    </div>
                    {tags.slice(0,3)}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;
