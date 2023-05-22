import { toast } from "react-toastify";
import { NativeSupportHandlerV2 } from "native-support-handler";
import { IAppInfo, INativeSupport } from "types";

import isIOS from "./iOSDetector";


declare global {
  interface Window {
    androidObj?: any;
    callBackappInfo?: any;
    onSubscribePermissionCallback?: any;
    callbackSelectedContactInfo?: any;
    callBackSingleContact?: any;
    callBackContactInfo?: any;
    callbackPermissionFailure?: any;
    onMultipleContactSelectionSuccess?: any;
  }
}
export const sendRawNativeData = (nativeData: INativeSupport) => {
  console.log("nativeHookCalled:", nativeData);

  if (
    Reflect.has(window, "androidObj") &&
    Reflect.has(window.androidObj, "nativeSupport")
  ) {
    const nativeObj = Reflect.get(window, "androidObj");
    nativeObj.nativeSupport(JSON.stringify(nativeData));
  }
};

export const openUrl = (url: string) => {
  NativeSupportHandlerV2.openUrl(url);
};

export const sendCleverTapEvent = (eventName: string, eventParams: object) => {
  NativeSupportHandlerV2.cleverTrackEvent(eventName, eventParams);
};

export const getAppInfoNative = async (): Promise<IAppInfo> => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line
    window.callBackappInfo = (success: boolean, data: IAppInfo) => {
      localStorage.setItem("appInfo", JSON.stringify(data));
      localStorage.setItem("visa", data.token);
      localStorage.setItem("latitude", data.latitude || "");
      localStorage.setItem("longitude", data.longitude || "");
      if (success) {
        resolve(data);
      } else {
        reject(data);
      }
    };
    sendRawNativeData({ key: 6 });
  });
};

export const openBiometric = async () =>
  new Promise((resolve, reject) => {
    window.callbackAuthenticateApp = (success, data) => {
      if (success) return resolve(data);
      reject(data);
    };
    window.callbackOpenAppSecuritySettings = () => {
      reject("openSettings");
    };
    const nativeData = {
      key: 20,
      title: "Authorize postpe",
      description:
        "Unlock your screen with PIN, Pattern, Password, Face or Fingerprint",
    };
    sendRawNativeData(nativeData);
  });

export const openDeepLinkWithCallback = (
  deepLink: string,
  callback?: (key?: string) => void
) => {
  let finalDeepLink = deepLink;
  window.callbackOpenOrderCard = () => callback && callback("OrderCard");
  window.callbackIncreaseSpendLimit = () =>
    callback && callback("IncreaseLimit");
  window.callbackCardActivityClosed = () =>
    callback && callback("ActivityClosed");

  if (deepLink?.toString().includes("dynamic")) {
    finalDeepLink = `${deepLink}&resultCode=true`;
  }

  NativeSupportHandlerV2.openSimBindingDeepLink(finalDeepLink)
    .then(() => callback && callback())
    .catch(() => {
      toast.error("Auto Refresh failed");
    });
};

export const openSettings = () =>
  new Promise((resolve, reject) => {
    window.callbackOpenAppSecuritySettings = (
      success: unknown,
      data: unknown
    ) => {
      if (success) {
        resolve(data);
      } else {
        reject();
      }
    };
    const nativeData = {
      key: 67,
    };
    sendRawNativeData(nativeData);
  });

export const mandatePermissions = () => {
  return new Promise<void>((resolve, reject) => {
    window.onSubscribePermissionCallback = (isGiven: any) => {
      if (isGiven) {
        console.log("contact permission there");
        resolve();
      } else {
        reject();
      }
    };
    const nativeData: any = {};
    nativeData.key = 68;
    nativeData.permissions = ["android.permission.READ_CONTACTS"];
    nativeData.isCancelable = true;
    sendRawNativeData(nativeData);
  });
};

export const openContactList = () => {
  return new Promise((resolve, reject) => {
    window.callbackSelectedContactInfo = (success: any, data: any) => {
      const contactData = data && JSON.parse(data);
      if (
        success &&
        contactData &&
        contactData.phoneNumbers &&
        contactData.phoneNumbers.length > 0
      ) {
        resolve({
          name: contactData.givenName,
          mobile: contactData.phoneNumbers[0].number,
        });
      } else {
        reject("Error in getting contact");
      }
    };
    window.callBackSingleContact = (
      success: any,
      error: any,
      mobile: any,
      name: any
    ) => {
      if (success) {
        resolve({
          name,
          mobile,
        });
      }
      if (error) {
        reject("Error in getting contact");
      }
    };
    const nativeData: any = {};
    nativeData.key = isIOS ? "39" : "25";
    sendRawNativeData(nativeData);
  });
};

export const getContacts = (forSyncContext: any, showLoad: any, route: any) => {
  return new Promise((resolve: any, reject: any) => {
    // permission allow callback
    window.callBackContactInfo = (success: any, error: any, data: any) => {
      const contactData = data ? JSON.parse(data) : [];
      if (success) {
        if (contactData.length > 0) {
          if (forSyncContext) {
            console.table(contactData);
          }
          resolve(contactData);
        } else {
          reject(data);
        }
      } else {
        reject(data);
      }
    };

    // permission deny callback
    window.callbackPermissionFailure = () => {
      reject();
    };

    const nativeData: any = {};
    nativeData.key = 16;
    sendRawNativeData(nativeData);
  });
};

export const getSingleContact = () => {
  return new Promise((resolve, reject) => {
    window.callbackSelectedContactInfo = (success: any, data: any) => {
      console.log({
        success,
        data,
      });
      const parsedData = data && JSON.parse(data);
      if (success && parsedData) {
        resolve(parsedData);
      }
      reject();
    };

    const nativeData: any = {};
    nativeData.key = 25;
    nativeData.viewType = "postpe";
    nativeData.headerTitle = "choose contact number";
    sendRawNativeData(nativeData);
  });
};

export const getSingleContactIOS = () => {
  return new Promise((resolve, reject) => {
    window.callBackSingleContact = (
      success: boolean,
      error: boolean,
      mobile: string,
      name: string
    ) => {
      console.log({
        success,
        error,
        mobile,
        name,
      });
      mobile = mobile.replace(/\D/g, "").slice(-10);
      resolve({ phoneNumber: mobile, name: name });
    };

    const nativeData: any = {};
    nativeData.key = 39;
    nativeData.viewType = "postpe";
    nativeData.headerTitle = "choose contact number";
    sendRawNativeData(nativeData);
  });
};

export const getMultipleContacts = () => {
  return new Promise((resolve, reject) => {
    window.onMultipleContactSelectionSuccess = (data: any) => {
      const parsedData = JSON.parse(data);
      if (parsedData) {
        resolve(parsedData);
      }
      reject();
    };

    window.onMultipleContactSelectionSuccess = () => {
      reject();
    };

    const nativeData: any = {};
    nativeData.key = 39;
    nativeData.bottomMessage = "";
    sendRawNativeData(nativeData);
  });
};

export const checkJuspaySdkInitializationStatus = () => {
  return new Promise((resolve, reject) => {
      const nativeData = {
          key: 103,
      };
      sendRawNativeData(nativeData);
      window.callbackHyperSdkInitStatus = (status:number) => {
          console.log('======callbackHyperSdkInitStatus======');
          console.log('Callback status-', status);
          // 1: inprogress, 0: uninitialized, 2: initialized
          if (Number(status) === 2) return resolve(true);

          initializeJuspayTransaction();
          return resolve(false);
      };
  });
}

export const initializeJuspayTransaction = ()=> {
  const nativeData = {
      key: 101,
      payload: {
          //@ts-ignore
          requestId: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
              (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
          ),
          service: 'in.juspay.hyperpay',
          payload: {
              action: 'initiate',
              merchantId: 'postpe',
              clientId: 'postpe',
              environment: 'production',
          },
      },
  };
  //@ts-ignore
  sendRawNativeData(nativeData);
  window.callbackHyperSdkInit = (status:number) => {
      // 1: inprogress, 0: uninitialized, 2: initialized
      console.log('===================callbackHyperSdkInit status callback======================', status);
  };
}