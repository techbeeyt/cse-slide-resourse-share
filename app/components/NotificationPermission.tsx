"use client";

import React, { useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { firebaseCloudMessaging } from '@/app/utils/webpush';
import firebase from 'firebase/app';

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
    setToken();
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
    function getMessage() {
      // @ts-ignore
      const messaging = firebase.messaging();
      console.log({ messaging });
      // @ts-ignore
      messaging.onMessage((message) => {
        const { title, body } = JSON.parse(message.data.notification);
        var options = {
          body,
        };
        // @ts-ignore
        self.registration.showNotification(title, options);
      });
    }
  });

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

