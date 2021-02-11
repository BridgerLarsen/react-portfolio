import React from 'react';

import picture from '../../../static/assets/images/bio/ds_square_logo.png';

export default function() {
    return (
        <div className="content-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + picture + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            />

            <div className="right-column">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellendus ipsa temporibus minus, delectus provident voluptates, aliquam vitae suscipit voluptas earum aspernatur ex, obcaecati fugiat reiciendis alias ea consectetur placeat!
                Eius optio quam voluptas est? Molestiae, neque labore iste repudiandae rem quas. Repellat beatae modi maiores vitae quasi corporis corrupti aliquid quibusdam dolorem fuga asperiores, reiciendis quae ea laboriosam est?
                Assumenda eos adipisci quam quae blanditiis ipsa quis nesciunt placeat recusandae ducimus architecto facere, sit dolore libero voluptatibus dignissimos rerum nisi fugiat laudantium iusto mollitia dicta alias. Ad, deserunt quas?
                Debitis voluptates beatae molestias cupiditate porro facere corporis animi commodi est, odio nesciunt dolores enim dolor mollitia dolorem nisi alias aut veniam tempora at sit repellendus voluptatem. Modi, nisi voluptatibus.
                Earum at officia vero? Est accusantium rem nemo inventore, eveniet dolore quasi rerum consequatur eius ab! Repudiandae non, autem esse sit dolor numquam exercitationem, iusto, natus nam eos temporibus soluta?
            </div>
        </div>
    )
}