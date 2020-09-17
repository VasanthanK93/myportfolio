import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';

import { profilePic } from '../../img'

import { Social } from '../social'

export const Home = () => {
    return (
        <div className="divstyle home" >
            <img src={profilePic} className="profilepic" alt="profileVBK" />
            <ReactTypingEffect className="typingeffect" text={['I am Vasanthan', 'I am a Full Stack developer']} speed={100} eraseDelay={700}>

            </ReactTypingEffect>
            <Social />
        </div>
    )
}