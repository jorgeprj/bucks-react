import React, { useEffect, useState } from 'react';
import { FaCheck, FaX } from 'react-icons/fa6';
import './Message.css';

interface MessageProps {
    type: string | undefined;
    text: string | undefined;
}

const Message: React.FC<MessageProps> = ({ type, text }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!text) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, [text]);

    return (
        <>
            {visible && (
                <div className='message-container'>
                    <div className={`message ${type}`}>
                        {type === 'error' ? (
                            <>
                                <div><FaX /></div>
                                <div>{text}</div>
                            </>
                        ) : type === 'success' ? (
                            <>
                                <div><FaCheck /></div>
                                <div>{text}</div>
                            </>
                        ) : (
                            text
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Message;