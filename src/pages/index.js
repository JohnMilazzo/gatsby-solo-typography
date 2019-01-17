import React from 'react';

export default () => (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        {' '}
        <h1>Gatsby-Solo-Typography</h1>
        <div>
            <p>
                Hello, I'm a Gatsby Solo project from{' '}
                <a href="https://AtomicGatsby.com">AtomicGatsby.com</a>!
            </p>
            <blockquote>
                <p>
                    Gatsby lets you build blazing fast sites with your data,
                    whatever the source. Liberate your sites from legacy CMSs
                    and fly into the future.
                </p>
                <em>
                    The <a href="https://twitter.com/gatsbyjs">@gatsbyjs</a>{' '}
                    documentation is a very impressive, comprehensive, and
                    thoughtfully organized resource. Really inspiring job! You
                    don’t realize how hard it is to write and organize docs like
                    this until you try to do it for one of your own projects.
                </em>
                <br />
                😅 Hats off to the team! -{' '}
                <a href="https://twitter.com/adamwathan/status/1081731115403042816">
                    Adam Wathan
                </a>
            </blockquote>
        </div>
        <p>Posted January 17, 2019</p>
    </div>
);
