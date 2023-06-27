"use client";

import React, { useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import firebase, { messaging } from '@/app/utils/firebase';
import { getToken } from 'firebase/messaging';

const NotificationPermission = () => {
  const [showBtn, setShowBtn] = useState(false);

  let permission;
  const getPermission = () => {
    Notification.requestPermission().then(permission => {
      if(permission === 'granted'){
        setShowBtn(false)
      } else if(permission === 'denied'){
        setShowBtn(true)
      }
    })
  }


  useEffect(() => {
    getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY }).then((currentToken) => {
      if (currentToken) {
        alert(currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        getPermission();
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }, [permission]);

  if(showBtn) {
    return (
      <div className="text-red-500 text-sm flex justify-start items-start gap-1">
        <AiOutlineInfoCircle size={20} /> You have blocked notification, turn on your browser settings.
      </div>
    )
  }
  return null;
}

export default NotificationPermission
