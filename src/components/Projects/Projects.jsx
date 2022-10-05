import React from 'react';
import './Projects.sass'
const Projects = () => {
    return (
        <div className={'projects'}>
            <div className={'projects-list'}>
                <h2 className={'projects-list__title'}>Projects</h2>
                <a className={'projects-list__item'}>
                    <h3 className={'projects-list__item-title'}>
                        Name
                    </h3>
                    <time className={'projects-list__item-date'}>30/06/2021</time>
                    <time className={'projects-list__item-date'}>30/06/2021</time>
                    <div>People</div>
                </a>
                <a className={'projects-list__item'}>
                    <h3 className={'projects-list__item-title'}>
                        Name
                    </h3>
                    <time className={'projects-list__item-date'}>30/06/2021</time>
                    <time className={'projects-list__item-date'}>30/06/2021</time>
                    <div>People</div>
                </a>
            </div>
        </div>
    );
};

export default Projects;
