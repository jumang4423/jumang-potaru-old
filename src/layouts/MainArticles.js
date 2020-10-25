import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/layout/MainArticles.scss";

const MainArticlesButton = React.lazy(() => import('@/components/MainArticlesButton'));
const ForestButton = React.lazy(() => import('@/components/ForestButton'));

export default function MainArticles(props) {
    return (
    <div>
        {/* the kewl line using hr */}
        <motion.hr 
            key={7}
            className="slant-line"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        ></motion.hr>
        <ul className="artUL">
        
        {/* some buttons */}

        <AnimatePresence initial={true} >
            <MainArticlesButton
            id={4}
            name='soundcloud'
            href='https://soundcloud.com/jumanjixxx'/>

            <MainArticlesButton
            id={5}
            name='github'
            href='https://github.com/jumang4423'/>

            <MainArticlesButton
            id={6}
            name='twitter'
            href='https://twitter.com/jumang4423'/>

            <ForestButton
            id={7}
            name='particles'
            useFrst={props.useFrst}
            Frst={props.Frst}/>
        </AnimatePresence>
        
    </ul>
    </div>
  );
};