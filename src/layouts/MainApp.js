import React, { useState } from 'react';
import "@/styles/layout/MainApp.scss";

const Header = React.lazy(() => import('@/layouts/Header'));
const MainArticles = React.lazy(() => import('@/layouts/MainArticles'));
const Notification = React.lazy(() => import('@/components/Notification'));
const RotateJumang = React.lazy(() => import('@/components/RotateJumang'));
const Forest = React.lazy(() => import('@/components/Forest'));

//when the browser webGL is disabled, normally all components r hidden somehow
//this function for escaping the problem
function isWebGLAvailable() {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {

        return false;

    }

}

//basically this <Apps /> for only jsx components
export default function Apps() {
    const [Frst, useFrst] = useState(true);
    return (
        <>
            <Header />
                {Frst && <Forest />}
                { isWebGLAvailable() ? <RotateJumang /> : <p id="webglError"></p>}
            <Notification />
            <MainArticles
                useFrst={useFrst}
                Frst={Frst} />
        </>
    );
};