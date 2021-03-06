import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.touch.offset.PointOption;


public class MainTest {
	public static void main(String[] args) {
		DesiredCapabilities dc = new DesiredCapabilities();
		
		dc.setCapability(MobileCapabilityType.DEVICE_NAME, "emulator-5554");
		dc.setCapability("platformName", "android");
		dc.setCapability("appActivity", "com.chromium.chrome.browser.LauncherShortcutActivity");
		AndroidDriver<AndroidElement> ad;
		
		try {
			ad = new AndroidDriver<AndroidElement>(new URL("http://0.0.0.0:4723/wd/hub/"),dc);
			MobileElement el1 = (MobileElement) ad.findElementByAccessibilityId("Chrome");
			el1.click();
			ad.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
			MobileElement el2 = (MobileElement) ad.findElementById("com.android.chrome:id/search_box_text");
			el2.sendKeys("Dog pictures");
			((AndroidDriver) ad).pressKey(new KeyEvent(AndroidKey.ENTER));
			ad.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
			new TouchAction(ad).tap(PointOption.point(0, 0)).perform();
			new TouchAction(ad).tap(PointOption.point(203, 588)).perform();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
