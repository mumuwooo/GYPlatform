# react-native-dva-starter

A React Native starter powered by [dva](https: //github.com/dvajs/dva) and [react-navigation](https: //github.com/react-community/react-navigation)

## Start

```bash
npm install dva-native-cli -g
dvanative git app
cd app
react-native run-ios # or react-native run-android
```

Great thanks to @xuan45 for his cli tool [dva-native-cli](https: //github.com/xuan45/dva-native-cli), check that project for more information.

## Advance

The builtin router of **dva** (not **react-router v4**), doesn't support React Native, we have to integrate other router components, such as **Navigator**, **ExperimentalNavigation**, **react-native-router-flux** and **react-navigation**. Since the former two will be depreciated in flavor of **react-navigation**, which is also be recommended by official, so I choose it to be the navigator.

<del>In this starter, I provide a router model to control the default action flow of **react-navigation** to workaround a known [issue](https: //github.com/react-community/react-navigation/issues/271). If you don't need this, the integration will be much simpler, you can simply remove the router model and pass **routerReducer** to **extraReducer** of dva `extraReducers: { router: routerReducer }`. Read [Redux Integration](https: //reactnavigation.org/docs/guides/redux) and [dva's API](https: //github.com/dvajs/dva/blob/master/docs/API.md) for more information.</del>

Also there is another workaround for a missing feature https: //github.com/react-community/react-navigation/issues/232, so I use two **StackNavigators** to contain the screens with different transition animations, you can create you own transition animations via **transitionConfig**, see https: //github.com/react-community/react-navigation/pull/99

## LICENSE

##  打包调试 命令 
**生成秘钥签名 (根目录)**
```bash
keytool -genkey -v -keystore my-release-key.keystore  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
**生成bundle文件 (根目录)**
```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output  android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```
**打包正式realese (android 目录)**
```bash
./gradlew assembleRelease
或
./gradlew installRelease
```
**打包调试debug (android 目录)**
```bash
./gradlew assembleDebug
或
./gradlew installDebug
```
**adb 停止工作**
```bash
netstat -aon|findstr "5037"
```

## 打包 更新版本 配置
**rn 配置**
项目\app\utils\config.js  配置平台、版本信息
**oss 配置**	
上传本地平台版本配置 （\app\utils\self_app_vertions.json）
到云端oss （/soft/self/self_app_vertions.json）
**安卓配置**
app名称: android\app\src\main\res\values\string.xml
包名更改: android目录下全局替换（12文件15结果）com.GckhAppXXX 或 .GckhAppHN 或 .GckhAppHB 或 .GckhAppSD 或.GckhAppGZ
版本更改: AndroidManifest.xml => versionCode （整数,覆盖更新依据）  versionCode （展示的版本号,未生效）
icon更改: 覆盖 android\app\src\main\res\mipmap-xxx 从/app/assets/android/icon_xx/ 
启动页更改: 覆盖 android\app\src\main\res\mipmap\ 从/app/assets/android/启动页-xxx/launch_screen.png
**ios xcode配置**
app名称: plist更改Bundle display name   湖南网络助学/湖北网络助学/过程性考核/贵大自考评价
包名更改: app/index.js  需改为GckhAppHN
证书更改: General =>identity  =>Bundle Identifier: com.codery.hnself
版本更改: Version;Build
icon更改: 覆盖 ios目录=>GckhAppHN=>images.xcassets=> AppIcon.appiconset 从/app/assets/ios/icon_xx/ 
启动页更改: ios目录=>GckhAppHN=>images.xcassets=>LaunchImage.launchimage 从/app/assets/ios/启动页-xxx/
生成静态jsBundle: 根目录命令 npm run bundle-ios
更改jsBundle引用: AppDelegate.m => debug包或正式包
更改打包模式: shift+command+,  Run =>Build Configuration
更改打包设备: Generic IOS Device
开始打包: 菜单=>Product=>Archive
**-----------------------------------------------**

MIT
