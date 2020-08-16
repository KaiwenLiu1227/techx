import React,{ Component } from 'react'
import { Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import {Header} from 'semantic-ui-react'
import 'react-tabs/style/react-tabs.css';
import Videos from './Videos'
import Visualizatiion from './Visualization'
import WordCloud from './WordCloud'
import './../App.css'
import logo from './logo.jpg';

export default () => (
    <div>
        
        <Header as='h1'><img src={logo} alt='logo' />万恶之源搜索器</Header>
        <Tabs>
            <TabList>
                <Tab>Search and See</Tab>
                <Tab>Visualizatiion</Tab>
                <Tab>Word Clouod</Tab>
            </TabList>
            
            <TabPanel className = "tab-panel">
                <Videos/>
            </TabPanel>
            <TabPanel>
                <Visualizatiion />
            </TabPanel>
            <TabPanel>
                <WordCloud />
            </TabPanel>
        </Tabs>
    </div>
  );
