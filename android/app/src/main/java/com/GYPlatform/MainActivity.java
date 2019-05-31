package com.GYPlatform;

import android.content.Intent;
import android.os.Bundle;

import com.GYPlatform.nativeComponents.ShareModule;
import com.facebook.react.ReactActivity;
import com.umeng.socialize.UMShareAPI;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "GYPlatform";
    }

    @Override
  protected void onCreate(Bundle savedInstanceState){
      super.onCreate(savedInstanceState);
      ShareModule.initSocialSDK(this);
    }

  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
  }
}
