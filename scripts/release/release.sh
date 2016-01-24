#! /bin/bash
#

apk_name='ELECTORA'
current_dir=`pwd`
output_dir=$current_dir/platforms/android/build/outputs/apk

# You need to create a signing key for your apk.
# Note: Make sure you keep the keystore file safe as you will need it to release updates.
# WARNING: done only once
#keytool -genkey -v -keystore ./scripts/release/$apk_name-release-key.keystore -alias $apk_name -keyalg RSA -keysize 2048 -validity 10000

# This will create the release.
# Remember to increment the version number in the config.xml.
ionic build --release android

# Sign the unsigned APK To sign the file you will need to use the jarsigner tool.
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -storepass rhonexpress -keypass rhonexpress -keystore ./scripts/release/$apk_name-release-key.keystore android-armv7-release-unsigned.apk $apk_name

# Zip align the resulting APK.
# Use the zipalign tool from $ANDROID_HOME/android-sdk/build-tools/22.0.0/
$ANDROID_HOME/build-tools/22.0.1/zipalign -v 4 $output_dir/android-armv7-release-unsigned.apk $output_dir/$apk_name.apk
