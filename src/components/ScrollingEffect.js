import { useState } from "react";

const Scrolling = ({ article, index }) => {
    const [background, SetBackground] = useState();

    return (
        <>
            <p>{article.article_title}</p>
            <a href={article.article_url} style={{ textDecoration: 'none', color: 'inherit' }}></a>
        </>
    );
};

export default Scrolling;