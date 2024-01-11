import React from "react";

function PortfolioItem( {title, subtitle, image, stack, description, link} ) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                    {stack.map(item => (
                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                        {item}
                    </span>
                ))}
                </h6>
                <p className="card-text">{description}</p>
                <a href={link} className="btn btn-primary">Go to {title}</a>
            </div>
        </div>
    );
}

export default PortfolioItem;