import './BackgroundClipPath.css';

function BackgroundClipPath() {
    const imgRectangle2 = "https://www.figma.com/api/mcp/asset/30c3e3c7-3780-48bd-8bd7-a62b126345bb";
    const imgRectangle = "https://www.figma.com/api/mcp/asset/a4757a03-025d-43f2-8328-1ba482802418";
    const imgRectangle1 = "https://www.figma.com/api/mcp/asset/ba175ae4-3866-43af-875a-c962d525c314";

    return (
        <div className="clip-path-background">
            <div className="clip-path-group">
                <div className="clip-path-group-inner">
                    <div className="clip-path-group-mask">
                        <div 
                            className="clip-path-rectangle"
                            style={{ 
                                maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')`,
                                WebkitMaskImage: `url('${imgRectangle}'), url('${imgRectangle1}')`
                            }}
                        >
                            <div className="clip-path-image-wrapper">
                                <img alt="" className="clip-path-image" src={imgRectangle2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundClipPath;


