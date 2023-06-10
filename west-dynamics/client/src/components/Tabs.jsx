import React, { useState } from 'react';
import Home from './Home';
import Projects from './Projects';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'HOME',
            title: 'RESUME',
            content: <Home /> 
        },
        {
            id: 2,
            tabTitle: 'ABOUT',
            title: 'Title 2',
            content: 'tab 2',
        },
        {
            id: 3,
            tabTitle: 'PROJECTS',
            title: 'LIST OF MY PROJECTS',
            content: <Projects />
        },
        {
            id: 4,
            tabTitle: 'SIGN IN',
            title: 'Title 4',
            content: 'Contenido de tab 4.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div className='content-containter'><p className='title'>{tab.title}</p><div className='inner-content-container'>{tab.content}</div></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;